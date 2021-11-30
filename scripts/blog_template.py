import os
import sys
import pandas as pd
import numpy as np
from jinja2 import Environment, FileSystemLoader

script_dir = os.path.dirname(__file__)


def render_md(content: dict, output_path: str, date):

    file_loader = FileSystemLoader(os.path.join(script_dir, "templates"))

    env = Environment(loader=file_loader)

    get_template = env.get_template("12dayshpc-template.md.j2")

    post_day = date.split("-")[-1]

    output_file_name = f"{date}-twelvedayshpc2021-Dec{post_day}.md"

    final_path = os.path.join(output_path, output_file_name)

    with open(final_path, "w") as file_todisk:
        file_todisk.write(get_template.render(**content))

    return final_path


def main(data_file, output_path):
    """
    Main script for loading data in pandas iterating over rows and passing it to render_md
    """
    working_file = pd.read_csv(data_file, encoding='cp1252')

    working_file.fillna("", inplace=True)

    for idx, row in working_file.iterrows():

        file_path = render_md(row.to_dict(), output_path, row["Publish_date"])

        print(f"Blog post written to {file_path}")


if __name__ == "__main__":

    path_to_workbook = sys.argv[1]
    output_path = sys.argv[2]
    main(path_to_workbook, output_path)
