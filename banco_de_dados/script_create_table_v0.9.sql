-- Criando Banco de Dados
DROP DATABASE if exists bd_MemoryAnalytics;
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;


-- drop database bd_MemoryAnalytics;
-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=
-- Tabela Empresa

DROP TABLE if exists empresa;
create table empresa
(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45) not null,
cnpjEmpresa char(18) unique not null
);

DROP TABLE if exists endereco;
CREATE TABLE endereco 
(
idEndereco INT,
cep CHAR(8),
logradouro VARCHAR(45),
numero VARCHAR(45),
cidade VARCHAR(45),
estado VARCHAR(45),
fkEmpresa INT, 
FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa) 
);


-- Tabela Cargo
drop table if exists cargo;
create table cargo
(
idCargo int primary key auto_increment,
nomeCargo varchar(20)
);

-- Tabela Funcionário
drop table if exists funcionario;
create table funcionario
(
idFunc int primary key auto_increment,
nomeFunc varchar(80),
emailFunc varchar(80),
telefoneFunc varchar(11),
permissao char(1),
fkEmpresa int,
fkCargo int,
fkSupervisor int,
foreign key(fkCargo) references Cargo(idCargo),
foreign key(fkEmpresa) references Empresa(idEmpresa)
);

-- Tabela Login
drop table if exists login;
create table login
(
idLogin int primary key auto_increment,
login varchar(80) not null unique,
senha varchar(16) not null unique,
fkFunc int,
foreign key (fkFunc) references funcionario(idFunc)
);

-- Tabela Servidor
drop table if exists servidor;
create table servidor
(
idServer int primary key auto_increment,
apelidoServer varchar(45),
ipServer varchar(12) unique,
numeroSerieServer varchar(40) unique,
sistemaOperacionalServer varchar(20),
fkEmpresa int,
foreign key(fkEmpresa) references Empresa(idEmpresa)
);


-- Tabela Vizualização de dados
drop table if exists visualizacao_dados;
create table visualizacao_dados
(
idDados int primary key auto_increment,
fkServidor int,
CPU_USO bigint,
DISCO_USO bigint,
RAM_USO bigint,
simbolo char(1),
dtHoraRegistro datetime,
foreign key (fkServidor) references Servidores(idServer)
);

-- Tabela Componente
drop table if exists Componente;
create table Componente
(
idComponente int primary key auto_increment,
nomeComponente varchar(45),
subComponente varchar(20)
);

-- Tabela Medida
drop table if exists Medida;
create table Medida
(
idMedida int primary key auto_increment,
nomeMedida varchar(30),
unidadeMedida varchar(20),
simboloMedida varchar(4)
);

-- Tabela Componente da medida
drop table if exists MedidaComponente;
create table MedidaComponente
(
idMedidaComponente int primary key auto_increment,
fkServidor int,
fkComponente int,
fkMedida int,
foreign key (fkServidor) references Servidores(idServer),
foreign key (fkComponente) references Componente(idComponente),
foreign key (fkMedida) references Medida(idMedida)
);
   
   
-- Tabela Registros
Drop table if exists Registro;
create table Registro
(
idRegistro int primary key auto_increment,
dtHoraRegistro datetime,
valorRegistro varchar(45),
fkMedidaComponente varchar(45)
-- foreign key (fkMedidaComponente) references MedidaComponente(idMedidaComponente)
);

-- -=-=-=-=-=-=-=-=-=-=-= SELECTS -=-=-=-=-=-=-=-=-=-=-=

-- select * from Empresa;
-- select * from Cargo;
-- select * from Funcionario;
-- select * from Login;
-- select * from Servidores;
-- select * from Componente;
-- select * from Medida;
-- select * from MedidaComponente;
-- select * from Registro;
