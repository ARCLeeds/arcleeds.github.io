---
title: Research Platforms
permalink: /platforms/
breadcrumb: true
---
Welcome to the University of Leeds' Research Computing Resource Guide!
IT Services provide a number of tools and services for both data storage and compute, Research Computing being the primary point of contact for research users.

## Finding the Right Computing Resources for Your Research

Whether you're working on small-scale analysis, developing complex simulations, or running intensive computations, we have a wide range of computing resources tailored to support your research.

This guide will help you navigate through various options, from individual devices to advanced High-Performance Computing (HPC) systems. To find the most appropriate resource, consider these questions:

- Are you looking for something you can use immediately on your personal device?
- Do you need more power without the complexity of HPC systems?
- Are you running large-scale computations that require multi-node parallel processing?

*Use our Resource Roadmap below to discover the best solution for your research needs.*

### Resource Roadmap

1. **Starting Small: Individual Device**
   - If you're just getting started or your computations are lightweight, you can easily begin on your laptop or desktop.
   - Ideal for initial code development, small data analysis, and non-intensive simulations.
2. **Need More Power? Try Shared Devices**
   - If your work is starting to slow down your individual device, consider using a cluster machine or Linux server.
   - These shared systems give you extra memory, CPU power, or GPU access without the complexity of an HPC queue. Great for testing and debugging.
3. **Cloud Solutions for Flexibility and Collaboration**
   - For collaborative projects, cloud resources offer flexible environments.
   - These are perfect for sharing work, developing in teams, and quickly testing your code without investing in hardware.
   - Unfortunately, most of the solutions are not supported by the university
4. **Need to Scale Up? Local HPC is the Next Step**
   - When your research requires heavy computation, high-end GPUs, or parallel processing, it’s time to consider our local (Tier 3) HPC resources like.
   - Get direct support from the Research Computing team and access systems tailored to your project’s needs.
5. **For the Largest Projects: External HPC**
   - For large, multi-node, or specialized GPU jobs, Tier-2 (Regional) and Tier-1 (National) HPC facilities offer matchless power and scale.
   - These external HPC systems are ideal for massive datasets, complex simulations, or GPU-heavy research.

## Detailed Resource Overview

Following the roadmap, we dive into each section, helping you understand the specifics of each option, what benefits they bring, and how they can fit your project’s needs.

### Individual Devices

<table>
  <thead>
      <th>Platform</th>
      <th>Application</th>
      <th>Information</th>
  </thead>
  <tbody>
    <!-- New row -->
    <tr>
      <td>Standard Laptops</td>
      <td><ul>
        <li>Standard request/support via University IT - faster deliver/support</li>
        <li>Flexible and Portable</li>
        <li>Impacts your other work whilst running computationally intensive jobs</li>
      </ul></td>
      <td><a href="https://it.leeds.ac.uk/it?id=sc_cat_item&sys_id=37351d301bd55110f23fa8a4bd4bcbb5" target="_blank">Request Form</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>Standard Windows Desktops</td>
      <td><ul>
        <li>Standard request/support via University IT - faster deliver/support</li>
        <li>Impacts your other work whilst running computationally intensive jobs</li>
        <li>Not necessarily considerably faster than laptops</li>
      </ul></td>
      <td><a href="https://it.leeds.ac.uk/it?id=kb_article&sys_id=9e36085b1bcf02d0d5d60e51f54bcb92" target="_blank">Request Form</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>Non-Standard Computer</td>
      <td><ul>
        <li>Request/support via University IT</li>
        <li>Custom solution</li>
        <li>Long Purchasing/setting up time</li>
        <li>Impacts your other work whilst running computationally intensive jobs</li>
      </ul></td>
      <td><a href="https://it.leeds.ac.uk/it?id=sc_cat_item&sys_id=a649379c0f2f9b40a82247ece1050e25" target="_blank">Request Form</a></td>
    </tr>    
    <!-- New row -->
    <tr>
      <td>Windows Virtual Desktop</td>
      <td><ul>
        <li>Useful for small admin tasks</li>
        <li>Easy access to online Windows 10 desktop</li>
        <li>Access to Network drives (e.g. M:, N:), Microsoft Office; on-campus web services, Banner, Argos, Printing, and teaching applications. </li>
      </ul></td>
      <td><a href="https://it.leeds.ac.uk/it?id=kb_article_view&table=kb_knowledge&sys_kb_id=159be92f97cde9103d52720f2153af92" target="_blank">Overview</a></td>
    </tr>
  </tbody>
</table>

### Shared Devices

<table>
  <thead>
      <th>Platform</th>
      <th>Application</th>
      <th>Information</th>
  </thead>
  <tbody>
    <!-- New row -->
    <tr>
      <td>Clusters</td>
      <td><ul>
        <li>Useful for trialing and debugging on a high end machine without needing to buy a workstation or queue on the HPC for testing</li>
        <li>Useful for access to Windows for non-Windows users</li>
        <li>Access to Printer / Copier / Scanner </li>
        <li>Possibility of 24h access</li>
        <li>Access to a range of software (installed or available via AppsAnywhere)</li>
      </ul></td>
      <td><ul>
        <li><a href="https://it.leeds.ac.uk/it?id=clusters" target="_blank">Overview</a></li>
        <li><a href="https://it.leeds.ac.uk/it?id=nr_software_a_z" target="_blank">Software List</a></li>
        <li><a href="https://it.leeds.ac.uk/it?id=kb_article&sysparm_article=KB0011754" target="_blank">Cluster Map</a></li>
      </ul></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>Linux Workstations/Servers</td>
      <td><ul>
        <li>Benefits of RAM/Cores/GPU, a general issue of scale compared to personal systems</li>
        <li>None of the queuing issues or other complexity of HPC</li>
      </ul></td>
      <td><a href="https://it.leeds.ac.uk/it?id=kb_article_view&table=kb_knowledge&sys_kb_id=4b5e3e6c1b66cd9042c642ead34bcb40" target="_blank">Environment System</a></td>
    </tr>
  </tbody>
</table>

### Cloud Resources

<table>
  <thead>
      <th>Platform</th>
      <th>Application</th>
      <th>Features</th>
      <th>Information</th>
  </thead>
  <tbody>
    <!-- New row -->
    <tr>
      <td>Colab</td>
      <td>Jupyter Notebook service useful for teaching, training and development</td>
      <td><ul>
        <li>Can be useful for trialling and experimenting with GPU Python codes</li>
        <li>Relatively limited CPU (2 vCPU, 13G RAM)</li>
        <li>No control about resource allocation - bad for reproducibility</li>
      </ul></td>
      <td><a href="https://colab.research.google.com/" target="_blank">Colab Homepage</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>MyBinder</td>
      <td>Can install dependencies more nicely than Colab</td>
      <td><ul>
        <li>Opens up the whole repository rather than just a single notebook</li>
        <li>Low machine specification as it is 1-2Gbytes of RAM</li>
      </ul></td>
      <td><a href="https://mybinder.org/" target="_blank">MyBinder Homepage</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>GitHub codespaces</td>
      <td>Useful for Python, non-Python, non-GPU projects and teaching.</td>
      <td><ul>
        <li>You can easily have 4 cores and 32Gbytes of RAM</li>
        <li>Provide an environment to assist others to reproduce your work</li>
        <li>Easy to shift from devcontainers to apptainer containers for use on HPC and Linux systems on campus</li>
        <li>The University of Leeds has a GitHub Enterprise educational licence</li>
      </ul></td>
      <td><ul>
        <li><a href="https://github.com/features/codespaces" target="_blank">Codespace Overview</a></li>
        <li><a href="https://docs.github.com/pt/codespaces/overview" target="_blank">Codespace Documentation</a></li>
        <li><a href="https://it.leeds.ac.uk/it?id=kb_article_view&table=kb_knowledge&sys_kb_id=b99bdf791ba74298e0502060f54bcbcd" target="_blank">IT GH Enterprise Article</a></li>
      </ul></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>GitHub actions</td>
      <td>A model for well defined workflows. CI/CD lifecycle</td>
      <td><ul>
        <li>Automating code testing and deployment</li>
        <li>Run actions in windows, linux and macos environments</li>
        <li>The University of Leeds has a GitHub Enterprise educational licence</li>
      </ul></td>
      <td><ul>
        <li><a href="https://github.com/features/actions" target="_blank">GH Actions Overview</a></li>
        <li><a href="https://docs.github.com/pt/actions" target="_blank">GH Actions Documentation</a></li>
        <li><a href="https://it.leeds.ac.uk/it?id=kb_article_view&table=kb_knowledge&sys_kb_id=b99bdf791ba74298e0502060f54bcbcd" target="_blank">IT GH Enterprise Article</a></li>
      </ul></td>
    </tr>
  </tbody>
</table>

### Local HPC

<table>
  <thead>
      <th>Platform</th>
      <th>Application</th>
      <th>Features</th>
      <th>Information</th>
  </thead>
  <tbody>
    <!-- New row -->
    <tr>
      <td>ARC3/4†</td>
      <td>Higher RAM/core/storage than can be achieved in previous options</td>
      <td><ul>
        <li>GPUs (V100), but a relatively small number</li>
        <li>ARC3 GPUs often lightly used, enabling development and debugging work with interactive sessions</li>
        <li>Support - ability to get guidance and advice from the Research Computing team on how to best solve your research problems on the platform</li>
      </ul></td>
      <td><ul>
        <li><a href="https://it.leeds.ac.uk/it?id=sc_cat_item&table=sc_cat_item&sys_id=4c002dd70f235f00a82247ece1050ebc" target="_blank">Request an Account</a></li>
        <li><a href="https://arcdocs.leeds.ac.uk/welcome.html" target="_blank">ARC Documentation</a></li>
      </ul></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>Aire‡</td>
      <td>11 times more flops than ARC3 and ARC4 combined</td>
      <td><ul>
        <li>84 Nvidia L40S GPUs</li>
        <li>Total of 9072 Cores</li>
        <li>Individual nodes are larger than ARC4 (768GB and 168 cores per node)</li>
        <li>2 Large memory nodes (2.3TB)</li>
      </ul></td>
      <td>-</td>
    </tr>
  </tbody>
</table>

† *ARC3 and ARC4 are being decommissioned and the service will be terminated late 2024*

‡ *Aire will replace ARC3 and ARC4 and it will be available late 2024*

### External HPC

<table>
  <thead>
      <th>Platform</th>
      <th>Application</th>
      <th>Features</th>
      <th>Information</th>
  </thead>
  <tbody>
    <!-- New row -->
    <tr>
      <td>Bede</td>
      <td>Running multiple GPU jobs, especially across multiple nodes</td>
      <td><ul>
        <li>100% GPU based, with Power9 CPUs adding complexity to building research environments</li>
        <li>Also contains Grace-Hopper ARM GPU nodes, which are likely the fastest most capable systems you have access to.</li>
        <li>Login nodes have GPUs, so useful for debugging and development</li>
      </ul></td>
      <td><a href="https://n8cir.org.uk/bede/" target="_blank">Bede Overview</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>JADE2†</td>
      <td>Running multiple GPU jobs - simpler than Bede due to the x86\_64 architecture</td>
      <td><ul>
        <li>GPU, V100</li>
        <li>Higher performance storage options</li>
      </ul></td>
      <td><a href="https://www.jade.ac.uk/" target="_blank">JADE2 Overview</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>ARCHER2</td>
      <td>Much larger system for parallel CPU jobs</td>
      <td><ul>
        <li>Individual nodes are larger (up to 512G and 128 cores per node)</li>
        <li>Total of 750k cores</li>
      </ul></td>
      <td><a href="https://www.archer2.ac.uk/about/hardware.html" target="_blank">ARCHER2 Overview</a></td>
    </tr>
    <!-- New row -->
    <tr>
      <td>Jasmin</td>
      <td>A much more comprehensive service for NERC users</td>
      <td><ul>
        <li>Jupyer notebook support</li>
        <li>HPC</li>
        <li>Shared Linux systems</li>
        <li>Cloud</li>
      </ul></td>
      <td><a href="https://jasmin.ac.uk/about/" target="_blank">Jasmin Overview</a></td>
    </tr>
  </tbody>
</table>

† *The JADE2 account registration period closed on 01/09/2024. As of this date, we are no longer able to approve project requests. 6th January 2025: All access to the service will be withdrawn and physical decommissioning of the system will commence.*