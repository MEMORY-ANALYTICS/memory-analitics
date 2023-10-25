#!/bin/bash

# Obtenha o nome de usuário atual
current_user=$USER

# Nome de usuário
echo "O nome de usuário atual é: $current_user"

# Instala o MySQL Server
echo "Instalando o MySQL Server..."
sudo apt update
sudo apt install mysql-server -y

# Inicia o serviço do MySQL Server
echo "Iniciando o serviço do MySQL Server..."
sudo service mysql start

# Instala o MySQL Workbench
echo "Instalando o MySQL Workbench..."
sudo snap install mysql-workbench-community

# Acessa o diretório do usuário novo
cd /home/$current_user/Desktop

# Cria um diretório na pasta do usuário novo
mkdir repositorio

# Acessa o diretório criado
cd repositorio

# Clona o projeto Git
git clone https://github.com/MEMORY-ANALYTICS/memory-analytics.git

# Acessa o projeto
cd memory-analytics

# Acessa a pasta site
cd site/src/python/ec2pasta

# Cria um arquivo .env e insere as informações do banco
echo "DB_HOST=localhost" > .env
echo "DB_USER=urubu100" >> .env
echo "DB_PASSWORD=urubu100" >> .env
echo "DB_DATABASE=bd_MemoryAnalytics" >> .env

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

# Verifica a versão do Python
python3 --version
if [ $? -eq 0 ]; then
  echo "Python instalado"
else
  echo "Python não instalado"
  echo "Gostaria de instalar o Python e as dependências (pip e psutil)? [s/n]"
  read get

  if [ "$get" == "s" ]; then
    sudo apt install python3 -y

    # Instala o pip para Python
    sudo apt install python3-pip -y
    if [ $? -eq 0 ]; then
      echo "pip instalado com sucesso"
    else
      echo "Não foi possível instalar o pip"
    fi
    # Instala as dependências usando o pip
      sudo pip3 install psutil
  fi
fi

# Pergunta se o usuário deseja baixar e executar o projeto
echo "Deseja baixar e executar o projeto? [s/n]"
read get

if [ "$get" == "s" ]; then
  # Ajusta permissões do arquivo
  chmod +x main.py
  
  # Verifica se existe um arquivo Python para executar
  if [ -f "main.py" ]; then
    python3 main.py
  fi
  echo "Projeto Executado."
else
  echo "Projeto não executado."
fi
