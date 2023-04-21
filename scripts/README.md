# README for scripts directory

This directory is for any utility scripts that are used in generating website content.

## 12 days of HPC blog series

The 12 days of HPC is our annual blog series showcasing research projects that
run on the HPC.
These entries are collected via a Microsoft Form which is exported as an Excel
spreadsheet and converted to a `.csv` file and used as the input for the
`blog_template.py` script.

### Usage

The `blog_template.py` file does a number of operations to generate markdown
blog posts these include:

- Reading in the `.csv` file as a Pandas Dataframe
- Renames the columns based on a Python dictionary defined in the file, we need
  to do this because Jinja needs to map values to keys and the keys can't have
  spaces. **The dictionary defining these column mappings will need adjusting if
  the form questions change!**
- Corrects the image file paths for use in your blog posts. The image paths
  stored in MS Forms are url encoded so we correct this
- The script randomly sorts the submissions 
- It generates a publish date for each post as a sequential list of dates for
  the number of blog posts
- It writes out generates blog posts to an output directory that is user-specified

To use the `blog_template.py` script you will need to install some dependencies.
It is highly recommended that you do this by creating a virtual environment in
the `scripts` directory with the following steps:

```bash
$ cd scripts

# create a virtual environment in the scripts directory
$ python -m venv venv

# activate the virtual environment
$ . venv/bin/activate
```

With the virtual environment activated we can install the dependencies we need
to run `blog_template.py` with the following command:

```bash
# install the dependencies into the virtual environment
(venv)$ pip install -r requirements.txt
```

Once installed you can view the scripts `argparse` help by running 
`python blog_template.py -h`:

```bash
# run the script for creating blog posts from the data file
(venv)$ python blog_template.py -h
usage: blog_template.py [-h] input_file output_file date

The 12 days of HPC blog maker!

positional arguments:
  input_file   Path to input .csv file
  output_file  Path to output file
  date         Date in YYYY-MM-DD format

options:
  -h, --help   show this help message and exit
```

Once posts have been created you can move them to the
[`../blog/_posts/`](../blog/_posts/) to ensure they will be published on the
blog and add each post as a separate pull request and [follow the steps](#scheduling-posts) below to
schedule when these are merged automatically.

## Scheduling posts

To save effort on having to submit a new PR each day and have it merged this repository also 
includes a [special GitHub action](../.github/workflows/merge-schedule.yml) for scheduling PR merges.

To use this GitHub action just create a PR for each post and in the description add the following:

```
/schedule YYYY-MM-DD
```

Where `YYYY-MM-DD` is the date you wish the PR to be merged. 
The action will schedule the PR to be merged on that date on or around midnight.

## Troubleshooting

### Changes in the MS Form

If the MS Form changes, it is necessary to update the mapping variable (`col_dict`) in the `blog_template.py` file to ensure consistency. A common example is the **festive question** that we tend to change from year to year. In this case, it is necessary to change the `key` to the `christmas_question` value.

If the column name doesn't match any options in our col_dict we get a `nan` not an error. This can lead to further errors downstream in Jinja that look like this:

```bash
  File "/home/medacola/code/forks/arcleeds.github.io/scripts/blog_template.py", line 69, in render_md
    file_todisk.write(get_template.render(**content))
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: keywords must be strings
```

This error more than likely means we have a column name that has set itself to `nan` via this function.