---
layout: page
title:  "COVID-19 and Folding@Home"
subheadline: "Using HPC"
teaser: "
 Helping COVID-19 research using HPC and configuring old systems to run new code.
"
date: 2020-04-07
author: John Hodrien
image:
  thumb: widget-github-303x182.jpg
  caption: Test caption
breadcrumb: true
---

[Folding@Home](https://foldingathome.org/) is a project much like
[Seti@Home](https://setiathome.berkeley.edu/). It is a distributed
computing project for simulating protein dynamics, and topically, it is
also [doing work on COVID-19](https://foldingathome.org/covid19/). I was
curious as to whether we could get this running on some obsolete HPC
systems, home systems, and modern HPC systems. and how the performance
would compare assuming I could make it work on all these different
systems.

### Getting it all working on ARC2

The starting point was the remnants of
[ARC2](https://arc.leeds.ac.uk/systems/arc2/), which used to be the
university\'s main HPC, before it was obsoleted by
[ARC3](https://arc.leeds.ac.uk/systems/arc3/), and more recently
[ARC4](https://arc.leeds.ac.uk/systems/arc4/). It\'s out of production
now, but with 137 usable 16 core nodes, still makes for a potent CPU
based workhorse. Just what could be achieved by using this system, and
would it be worthwhile doing so? First step was downloading the [freely
available client](https://foldingathome.org/start-folding/) and running
it on ARC2:

```{bash}
$ wget https://download.foldingathome.org/releases/public/release/fahclient/centos-6.7-64bit/v7.5/fahclient-7.5.1-1.x86_64.rpm
$ mkdir test && rpm2cpio ../fahclient-7.5.1-1.x86_64.rpm | cpio -id
$ usr/bin/FAHClient --configure
User name [Anonymous]: ARC
Team number [0]: 257437
Passkey:
Enable SMP [true]:
Enable GPU [true]: false
Name of configuration file [config.xml]:
```

Well that was easy. We download the rpm, and extract it (since I\'m
doing this without admin rights), and set it up. That all seems to work
fine, so it should just be a case of running the client to generate
results:

```{bash}
$ usr/bin/FAHClient --config config.xml
10:48:21:************************* Folding@home Client *************************
10:48:21:    Website: https://foldingathome.org/
10:48:21:  Copyright: (c) 2009-2018 foldingathome.org
10:48:21:     Author: Joseph Coffland <joseph@cauldrondevelopment.com>
10:48:21:       Args: --config config.xml
```

So the client runs, and waits for a job. First job arrives:

```{bash}
10:56:16:WU00:FS00:Started FahCore on PID 9956
10:56:16:WU00:FS00:Core PID:9960
10:56:16:WU00:FS00:FahCore 0xa7 started
10:56:16:WARNING:WU00:FS00:FahCore returned: FAILED_2 (1 = 0x1)
```

Something\'s broken, but I\'m not clear what at this point. On disk you
can see it\'s downloaded a particular client executable to do the
solving. This allows a generic FAHClient to then download specific
scientific codes later, making it easier for them to do new calculations
without requiring you to update your client, or indeed downloaded lots
of clients ahead of time. So let\'s have a look at it:

```{bash}
$ file ./cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7
./cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7: ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), dynamically linked (uses shared libs), for GNU/Linux 3.2.0, not stripped
```

It\'s download an executable targeting a 64bit system that supports AVX,
and given us a dynamically linked executable. Does ARC2 support AVX, and
does it have all the libraries it thinks it needs?:

```{bash}
$ grep -q avx /proc/cpuinfo && echo yes it does
yes it does
$ ldd cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7
cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7: /lib64/libc.so.6: version `GLIBC_2.15' not found (required by cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7)
cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7: /lib64/libc.so.6: version `GLIBC_2.17' not found (required by cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7)
cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7: /lib64/libc.so.6: version `GLIBC_2.14' not found (required by cores/cores.foldingathome.org/v7/lin/64bit/avx/Core_a7.fah/FahCore_a7)
    linux-vdso.so.1 =>  (0x00007ffdb8fe0000)
    libpthread.so.0 => /lib64/libpthread.so.0 (0x0000003ad2c00000)
    libdl.so.2 => /lib64/libdl.so.2 (0x0000003ad2800000)
    libm.so.6 => /lib64/libm.so.6 (0x0000003ad2400000)
    libc.so.6 => /lib64/libc.so.6 (0x0000003ad2000000)
    /lib64/ld-linux-x86-64.so.2 (0x0000003ad1c00000)
```

Ah, so on the plus side ARC2 does support AVX, but this has been built
for a newer system, and the glibc of the host system (CentOS 6 on ARC2)
is too old for the executable they\'ve sent us. So that\'s not going to
work then. The answer is, as it often is,
[containers](https://arcleeds.github.io/Techtalks/techtalk-containers/#/title-slide)!
Let\'s build a [singularity](https://sylabs.io/singularity/) container
for ARC2 with a more modern system. You can really quickly test this
with singularity:

```{bash}
$ singularity run docker://ubuntu:18.04
INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
Getting image source signatures
Copying blob sha256:5bed26d33875e6da1d9ff9a1054c5fef3bbeb22ee979e14b72acf72528de007b
  25.45 MiB / 25.45 MiB [====================================================] 0s
Copying blob sha256:f11b29a9c7306674a9479158c1b4259938af11b97359d9ac02030cc1095e9ed1
  34.54 KiB / 34.54 KiB [====================================================] 0s
Copying blob sha256:930bda195c84cf132344bf38edcad255317382f910503fef234a9ce3bff0f4dd
  848 B / 848 B [============================================================] 0s
Copying blob sha256:78bf9a5ad49e4ae42a83f4995ade4efc096f78fd38299cf05bc041e8cdda2a36
  162 B / 162 B [============================================================] 0s
Copying config sha256:84d0de4598f42a1cff7431817398c1649e571955159d9100ea17c8a091e876ee
  2.42 KiB / 2.42 KiB [======================================================] 0s
Writing manifest to image destination
Storing signatures
INFO:    Creating SIF file...
INFO:    Build complete: /home/home02/scsjh/.singularity/cache/oci-tmp/bec5a2727be7fff3d308193cfde3491f8fba1a2ba392b7546b43a051853a341d/ubuntu_18.04.sif
WARNING: underlay of /etc/localtime required more than 50 (65) bind mounts
FATAL: kernel too old
```

Right, that doesn\'t work, as the host kernel is too old to use that
container. 16.04 has no such issue, so let\'s try building an Ubuntu
16.04 image then. Download the Ubuntu Folding\@Home client, and using
this recipe make an image:

```{bash}
Bootstrap: docker
From: ubuntu:18.04

%files
  fahclient_7.4.4_amd64.deb /

%post
    chmod 644 /fahclient_7.4.4_amd64.deb
    apt-get update
    apt-get install -y locales
    locale-gen en_GB.UTF-8
    apt-get install -y /fahclient_7.4.4_amd64.deb
```

This can be built on a virtual machine or system where you do have root
access; whilst we could run a container from [docker
hub](https://hub.docker.com/) in the previous example without needing
root, you need root to build your own custom image. Not a problem, as
once you\'ve built that image you can copy it onto systems where
singularity is installed, and you don\'t need root to run it. The reason
I install the locales package and generate a locale for en\_GB.UTF-8
(the locale I have set on ARC2) is that things get annoyed if there\'s
not a locale configured, so this is not uncommon to require when
building containers.

```{bash}
$ module add test singularity
$ mkdir test
$ singularity exec test.img FAHClient --chdir test --config ../config.xml

...

11:27:13:WU00:FS00:0xa7:Project: 16403 (Run 203, Clone 0, Gen 10)
11:27:13:WU00:FS00:0xa7:Unit: 0x0000000a96880e6e5e8be0e24d281908
11:27:13:WU00:FS00:0xa7:Reading tar file core.xml
11:27:13:WU00:FS00:0xa7:Reading tar file frame10.tpr
11:27:13:WU00:FS00:0xa7:Digital signatures verified
11:27:13:WU00:FS00:0xa7:Calling: mdrun -s frame10.tpr -o frame10.trr -x frame10.xtc -cpt 15 -nt 16
11:27:13:WU00:FS00:0xa7:Steps: first=5000000 total=500000
11:27:13:WU00:FS00:0xa7:Completed 1 out of 500000 steps (0%)
```

So, that\'s cheered up the client, and we\'re now running the
Folding\@Home code on an old machine. Hurrah! You can see at this step
I\'ve told it to run in a test directory. This will come in useful when
I actually submit a big job to run this on multiple nodes, as each node
can have its own directory for storing its workfiles. So let\'s write a
job script:

```{bash}
#!/bin/bash
#$ -cwd -V
#$ -l h_rt=48:00:00
#$ -l nodes=1
#$ -t 1-137

module add test singularity

# Let's be properly paranoid, as LANG actually gets fed through to ARC from the SSH client.
export LANG=en_GB.UTF-8

# Give each jobs its own work directory
mkdir -p $SGE_TASK_ID

singularity exec test.img FAHClient --chdir $SGE_TASK_ID --config ../config.xml
```

Submit a task array job that\'ll run a task per node, for the 137 nodes
I know are free. This will do, given I\'m the only user on ARC2, but it
might not be the most sensible way of doing it otherwise. An exercise
for the reader to think why not. And off we go. ARC2 lacks GPUs, so this
is CPU only processing, but they are 16 core nodes, and we\'ve got 137
of them to play with. You\'d reasonably think that\'d add up to a lot
(and it\'s worth noting there are CPU only jobs in Folding\@Home so even
if the scores look low, it doesn\'t mean it\'s not in some way
worthwhile). How much does each node manage? First job completed and it
says, \"Final credit estimate, 2786.00 points\", and it took \~23
minutes if you ignore the time to get a job, the time to download, and
the time to upload (all of which can vary). So best case you might be
looking at \~23 million points per day, using \*all\* of an old HPC
machine. Having run it for a couple of days, what does this really look
like? Crufty adding up of the lines that look like this
\"08:36:39:WU01:FS00:Final credit estimate, 12329.00 points\":

```{bash}
$ grep Final submit-big.sh.o5377470.*|awk -F, '{print $2}'|sed 's/ points//'|paste -sd+|bc
26363222.00
```

So after running for two days, we\'ve got 26 million points, or 13
million a day. Quite a bit less than expected, but in truth, the
upstream servers are pretty poor at handing out jobs consistently and
quickly, so nodes hang around idle for long periods, and if you try to
improve that, you lower your reward per job by asking for jobs before
you\'re ready to start them.

### Comparisons

How does that compare with an old desktop I have at home. Turns out an
i3-2120 is worth 4511 a day, with a following wind. So ARC2 doesn\'t
look so bad in that light, delivering the equivalent performance of 2922
times an old desktop PC. That old desktop also had an Nvidia 560 Ti OEM
graphics card in it. How about that? 41509 predicted per day, so ARC2\'s
still 317 of those. Less impressive, but still reasonable looking. How
about if we move onto a slightly more modern GPU? I\'ve also got a
Nvidia 1070 GTX at home, and that reports \~700k a day. I think that
makes ARC2 look somewhat disappointing, as it\'d only take 19 of these
four year old GPUs to beat an entire HPC system with these calculations.
This obviously does then make you think what it could do with a more
modern GPU setup, and I couldn\'t resist but run a test on our current
HPC, ARC4. Now you don\'t need to jump through the same hoops to get
this all working on ARC4 as it properly supports the Folding\@Home
client out of the box, but if you did want to make a container work on
both systems you really could, but you\'d need to make sure you had all
the OpenCL libraries present in the container, along with CUDA, and
since this was just curiosity I skipped this step and just ran the
client on the system outside the container. There would be no
performance difference, as containers do not in any way limit CPU/GPU
performance. So, using a node with 4x Nvidia V100 GPUs, how much could a
single node on ARC4 generate compared to ARC2 (remembering ARC2 managed
13 million using 137 nodes per day)? The actual result is just over 10
million, so really quite close to what the entire ARC2 cluster managed.
The power consumption figures between these two would be staggering, as
the v100 GPUs were only drawing \~600W between them to do this.

### Take away lessons

New code really can run on old systems using containers like
Singularity, and it\'s really not a lot of work to make that happen.
That said, old HPC systems also really should be thrown away and
replaced by more modern systems, and the efficiency and performance
gains to be had by moving code from legacy systems onto modern GPU
systems (where appropriate) are mind blowing. We\'ve created a team for
this test (257437) [(current
stats)](https://stats.foldingathome.org/team/257437) that you\'re free
to also submit to if you wish. As a result of this brief test, we got
The University of Leeds to the position of number one UK university
team, and in the top ten listed university teams in the world. It\'s a
fun factoid, but don\'t read too much into it, as the scale of our
contribution pales into insignificance when compared to the top
contributors.  
