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

bundler exec jekyll serve --detach --host=0.0.0.0 --port 8000
