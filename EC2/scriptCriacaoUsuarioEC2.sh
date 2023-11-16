#!/bin/bash

# Solicita o nome de usuário e senha
echo "Por favor, insira o nome de usuário desejado:"
read username

if [ -z "$username" ]; then
echo "Nome de usuário não pode estar em branco."
exit 1
fi

echo "Agora, insira a senha para o usuário $username:"
read -s password

if [ -z "$password" ]; then
echo "Senha não pode estar em branco."
exit 1
fi

# Atualiza o sistema
sudo apt update
sudo apt upgrade -y

# Verifica se o Git está instalado e o instala, se necessário
if ! command -v git &> /dev/null; then
echo "Git não encontrado. Instalando o Git..."
sudo apt install git -y
fi

# Cria o novo usuário
sudo useradd -m -s /bin/bash $username
echo "$username:$password" | sudo chpasswd

# Dá permissão de sudo para o novo usuário
sudo usermod -aG sudo $username

# Saia do novo script
exit
