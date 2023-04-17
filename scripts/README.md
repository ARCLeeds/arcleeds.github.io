# README for scripts directory

This directory is for any utility scripts that are used in generating website content.

## 12 days of HPC blog series

The 12 days of HPC is our annual blog series showcasing research projects that run on the HPC.
These entries are collected via a Microsoft Form which is exported as an Excel spreadsheet and converted to a .csv file.

Some hand tinkering is required with the form .csv file as it contains weird and wonderful OneDrive paths to image files and formats image files with their name and the name of the user appended with whitespace. 
The function `fix_img_paths` in `blog_template.py` attempts to resolve this but is not guaranteed against Microsoft Form behaviour changes with
regards to uploaded files.

After tinkering with the spreadsheet you can run the `blog_template.py` script with some arguments to build the markdown blog post files using the Jinja templates.

### Usage

You will also need to adjust the column names in the original spreadsheet to match the template variables in the jinja2 template.

| Original                                                                                                                       | Template variable |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Start time                                                                                                                     | Start time        |
| Completion time                                                                                                                | Completion time   |
| Email                                                                                                                          | Email             |
| Name                                                                                                                           | Name              |
| What's your name?                                                                                                              | your_name         |
| What department do you work in?                                                                                                | your_department   |
| What would you like the subtitle of your blogpost to be? (Points for festive puns)                                             | subtitle          |
| What research question are you trying to answer? (The more detail the better)                                                  | research_question |
| What tools or technologies do you use in your research? (Programming languages, packages, APIs)                                | tools_techniques  |
| How does HPC help your research?                                                                                               | hpc_help          |
| What is the potential impact of your research?                                                                                 | impact            |
| In your person opinion what's the coolest thing about your research?                                                           | coolest           |
| Below you're able to upload some images to include in your post. Please use the box below to provide a caption for each image. | captions          |
| Upload an image/images to be included with your blogpost                                                                       | image_file        |
| In your opinion, what is the ultimate Christmas song?                                                                          | christmas_song    |
| Extra content (if there's anything you'd like to add that doesn't fall into the above categories)                              | extra_content     |

You also need to randomise the posts, and add a column for the publish date (`Publish_date`) (in format yyyy-mm-dd) and the number of the post (`post_number`).

Your final arrangement of columns for the template to work should look like this:
| Final columns |
| ----------------- |
| ID |
| post_number |
| Publish_date |
| Start time |
| Completion time |
| Email |
| Name |
| your_name |
| your_department |
| subtitle |
| research_question |
| tools_techniques |
| hpc_help |
| impact |
| coolest |
| captions |
| image_file |
| christmas_song |
| extra_content |

If necessarily you could look at changing the column names but you will also need to change the
variables used in the Jinja template.

You are now ready to generate your blog posts! You can do this by setting up a virtualenv:

```bash
$ cd scripts

# create a virtual environment in the scripts directory
$ python -m venv venv

# activate the virtual environment
$ . venv/bin/activate

# install the dependencies into the virtual environment
(.venv)$ pip install -r requirements.txt

# run the script for creating blog posts from the data file
$ python blog_template.py path/to/data.csv path/to/output/directory/for/.md

```

## Scheduling posts

To save effort on having to submit a new PR each day and have it merged this repository also 
includes a [special GitHub action](../.github/workflows/merge-schedule.yml) for scheduling PR merges.

To use this GitHub action just create a PR for each post and in the description add the following:

```
/schedule YYYY-MM-DD
```

Where `YYYY-MM-DD` is the date you wish the PR to be merged. 
The action will schedule the PR to be merged on that date on or around midnight.