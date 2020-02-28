# bootstrap for provisioning development environment for arcleeds github site

apt update
apt install -y ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install bundler jekyll

cd /vagrant

bundle update

echo 'Environment should now be configured.'
echo 'To serve website run bundler exec jekyll serve --port 8000'
