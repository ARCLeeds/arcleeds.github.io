require 'yaml'
require 'fileutils'

# Load the service catalog data from the YAML file
services = YAML.load_file('_data/service_catalogue.yml')

services.each do |service|
  # Generate the file name based on the URL (last part of the path)
  file_name = File.basename(service['url'].chomp('/')) + '.md'

  # Create the directory where the page will be saved if it doesn't exist
  dir_path = File.join('pages', 'consulting')
  FileUtils.mkdir_p(dir_path) unless Dir.exist?(dir_path)

  # Define the path to the file that will be generated
  file_path = File.join(dir_path, file_name)

  # Front matter with only the necessary data
  content = <<-HEREDOC
---
layout: service_template
title: "#{service['title']}"
permalink: "#{service['url']}"
description: "#{service['description']}"
services:
#{service['services'].map { |item| "  - item: \"#{item['item']}\"\n    description: \"#{item['description']}\"" }.join("\n")}
---
HEREDOC

  # Write the content to the file
  File.write(file_path, content)
  puts "Page created for #{service['title']} at #{file_path}"
end
