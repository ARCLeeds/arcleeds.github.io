Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.hostname = 'ARCLeeds'
  config.vm.network :forwarded_port, guest: 8000, host: 8000
  config.vm.provision :shell, path: "bootstrap.sh"

  config.ssh.forward_agent = true
end
