import os
import sys
import pandas as pd
from jinja2 import Environment, FileSystemLoader

script_dir = os.path.dirname(__file__)


def render_md(content: dict, output_path: str, date):
    """
    A helper function for rendering markdown in jinja2 template

    Loads the 12dayshpc template from the templates directory,
    creates output path to write file too,
    writes file to disk.
    """

    file_loader = FileSystemLoader(os.path.join(script_dir, "templates"))

    env = Environment(loader=file_loader)

    get_template = env.get_template("12dayshpc-template.md.j2")

    post_day = date.split("-")[-1]

    # we have to format the file names like this due to how jekyll
    # expects blogpost file names
    output_file_name = f"{date}-twelvedayshpc2021-Dec{post_day}.md"

    final_path = os.path.join(output_path, output_file_name)

    with open(final_path, "w") as file_todisk:
        file_todisk.write(get_template.render(**content))

    return final_path


def main(data_file, output_path):
    """
    Main script for loading data in pandas iterating over rows and passing it to render_md
    """
    # open data file from csv
    # expects csv file containing windows encoding from forms
    working_file = pd.read_csv(data_file, encoding="cp1252")

    # fill blank entries (which default to nan)
    # to empty string, we use this in jinja2 template to test for length of variable
    working_file.fillna("", inplace=True)

    # iter through all rows
    for idx, row in working_file.iterrows():

        # render markdown and return filepath it wrote file to
        file_path = render_md(row.to_dict(), output_path, row["Publish_date"])

        # print out to let us know where it wrote too
        print(f"Blog post written to {file_path}")


if __name__ == "__main__":

    # take first command line argument as path to .csv file
    path_to_workbook = sys.argv[1]
    # take 2nd command line argument as output path
    output_path = sys.argv[2]
    # run main on both
    main(path_to_workbook, output_path)
