#!/bin/bash

# Obtenha o nome de usuário atual
current_user=$USER

# Nome de usuário
echo "O nome de usuário atual é: $current_user"

# Acessa o diretório do usuário novo
cd /home/$current_user/Desktop

# Instalação do Docker
sudo apt update
sudo apt install -y docker.io

# Inicia o serviço do Docker
sudo systemctl start docker

# Habilita o serviço do Docker para iniciar junto ao sistema operacional
sudo systemctl enable docker

# Faz pull da imagem do MySQL
sudo docker pull mysql:5.7

# Cria o container MySQL
sudo docker run -d -p 3306:3306 --name ContainerBD -e MYSQL_DATABASE=banco1 -e MYSQL_ROOT_PASSWORD=urubu100 mysql:5.7

# Verifica se o container foi criado com sucesso
container_status=$(sudo docker ps -q --filter "name=ContainerBD")

if [ -n "$container_status" ]; then
  echo "Container MySQL criado com sucesso."
else
  echo "Falha ao criar o container MySQL."
fi

# Cria um diretório na pasta do usuário novo
mkdir repositorio

# Acessa o diretório criado
cd repositorio

# Clona o projeto Git
git clone https://github.com/MEMORY-ANALYTICS/memory-analytics.git

# Acessa o projeto
cd memory-analytics

# Acessa a pasta da API JAVA
cd APIJava

# Verifica a versão do Java
java -version
if [ $? -eq 0 ]; then
  echo "Java instalado"
else
  echo "Java não instalado"
  echo "Gostaria de instalar o Java? [s/n]"
  read get

  if [ "$get" == "s" ]; then
    sudo apt install openjdk-17-jre -y
  fi
fi
