-- Criando Banco de Dados
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=
-- Tabela Empresa
create table Empresa 
(
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45) not null,
    cnpjEmpresa bigint unique not null
);

-- Tabela Cargo
create table Cargo
(
	idCargo int primary key auto_increment,
    nomeCargo varchar(20)
);

-- Tabela Funcionário
create table Funcionario
(
	idFunc int primary key auto_increment,
    nomeFunc varchar(80),
    emailFunc varchar(80),
    telefoneFunc bigint, 
    fkCargo int,
    fkEmpresa int,
    foreign key(fkCargo) references Cargo(idCargo),
    foreign key(fkEmpresa) references Empresa(idEmpresa)
);

-- Tabela Login
create table Login
(
	idLogin int primary key auto_increment,
    login varchar(20) not null unique,
    senha varchar(20) not null unique,
    fkFunc int,
    foreign key (fkFunc) references Funcionario(idFunc)
);

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Tabela Empresa
insert into Empresa values
(null, 'Uceae', 1001001),
(null, 'Memory Analytics', 0110110);

-- Tabela Cargo
insert into Cargo values
(null, 'Analista de Hardware'),
(null, 'Analista de Sistema'),
(null, 'Gerente');

-- Tabela Funcionário
insert into Funcionario values
(null, 'João Miguel Almeida', 'joao@gmail.com',11983220192, 3, 1),
(null, 'Marcos Araújo', 'marcos@gmail.com',11933340099, 2, 1),
(null, 'Solange Medeiros', 'solange@gmail.com',11983228776, 1, 1),
(null, 'Luan Santos', 'luan@gmail.com',11923280192, 3, 2),
(null, 'Maria da Penha', 'maria@gmail.com',11983522190, 2, 2),
(null, 'Larissa Pinheiro de Brito', 'larissa@gmail.com',11912230112, 1, 2);

-- Tabela Login
insert into Login values
(null,'joao123','joao123',1),
(null,'marcos123','marcos123',2),
(null,'solange123','solange123',3),
(null,'luan123','luan123',4),
(null,'maria123','maria123',5),
(null,'larissa123','larissa123',6);

-- -=-=-=-=-=-=-=-=-=-=-= SELECTS E JOINS -=-=-=-=-=-=-=-=-=-=-=

select * from Empresa;
select * from Cargo;
select * from Funcionario;
select * from Login;

select 
	nomeFunc "Nome",
    emailFunc "Email",
    nomeEmpresa "Empresa",
    login "Login",
    senha "Senha",
    nomeCargo "Cargo"
from Empresa
	join Funcionario on fkEmpresa = idEmpresa
    join Cargo on fkCargo = idCargo
    join Login on fkFunc = idFunc;