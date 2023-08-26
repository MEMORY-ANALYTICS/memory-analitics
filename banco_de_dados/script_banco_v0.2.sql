-- Criando Banco de Dados
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=
-- Tabela Empresa
create table Empresa 
(
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45) not null,
    cnpjEmpresa char(14) unique not null
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
    telefoneFunc varchar(11), 
    fkCargo int,
    fkEmpresa int,
    foreign key(fkCargo) references Cargo(idCargo),
    foreign key(fkEmpresa) references Empresa(idEmpresa)
);

-- Tabela Login
create table Login
(
	idLogin int primary key auto_increment,
    login varchar(80) not null unique,
    senha varchar(16) not null unique,
    fkFunc int,
    foreign key (fkFunc) references Funcionario(idFunc)
);

-- Tabela Servidores
create table Servidores
(
	idServer int primary key auto_increment,
    localServer varchar(45),
    ipServer varchar(12) unique,
    numeroSerieServer varchar(20) unique,
    sistemaOperacionalServer varchar(20),
    fkEmpresa int,
    foreign key(fkEmpresa) references Empresa(idEmpresa)
);

-- Tabela Componente
create table Componente
(
	idComponente int primary key auto_increment,
    nomeComponente varchar(45)
);

-- Tabela Medida
create table Medida
(
	idMedida int primary key auto_increment,
    nomeMedida varchar(30),
    unidadeMedida varchar(20),
    simboloMedida varchar(4)
);

-- Tabela Registros
create table Registro
(
	idRegistro int primary key auto_increment,
    dtHoraRegistro datetime,
    valorRegistro bigint,
    fkMedida int,
    fkComponente int,
    fkServer int,
    foreign key(fkMedida) references Medida(idMedida),
    foreign key(fkComponente) references Componente(idComponente),
    foreign key(fkServer) references Servidores(idServer)
);

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Tabela Empresa
insert into Empresa values
(null, 'Uceae', '01235794000012'),
(null, 'Memory Analytics', '32564433000012');

-- Tabela Cargo
insert into Cargo values
(null, 'Analista de Hardware'),
(null, 'Analista de Sistema'),
(null, 'Gerente');

-- Tabela Funcionário
insert into Funcionario values
(null, 'João Miguel Almeida', 'joao@gmail.com','11983220192', 3, 1),
(null, 'Marcos Araújo', 'marcos@gmail.com','11933340099', 2, 1),
(null, 'Solange Medeiros', 'solange@gmail.com','11983228776', 1, 1),
(null, 'Luan Santos', 'luan@gmail.com','11923280192', 3, 2),
(null, 'Maria da Penha', 'maria@gmail.com','11983522190', 2, 2),
(null, 'Larissa Pinheiro de Brito', 'larissa@gmail.com','11912230112', 1, 2);

-- Tabela Login
insert into Login values
(null,'joao123','joao123',1),
(null,'marcos123','marcos123',2),
(null,'solange123','solange123',3),
(null,'luan123','luan123',4),
(null,'maria123','maria123',5),
(null,'larissa123','larissa123',6);

-- 	Tabela Servidores
insert into Servidores values
(null, "Setor F6", "192.158.1.38","6007041","Linux",1),
(null, "Setor G4", "192.157.1.38","3008041","Windows",1),
(null, "Setor T8", "192.156.1.38","6347056","Linux",2),
(null, "Setor H3", "192.155.1.38","6901231","Unix",2);

-- Tabela Componente
insert into Componente values
(null, 'HD'),
(null, 'SSD'),
(null, 'CPU'),
(null, 'RAM');

-- Tabela Medida
insert into Medida values
(null, 'Temperatura', 'Celsius','°C'),
(null, 'Uso', 'Porcentagem','%'),
(null, 'Frequencia', 'Hertz','Hz'),
(null, 'Capacidade', 'Giga Byte','Gb'),
(null, 'Latência', 'Byte','B');

-- Tabela Registro
insert into Registro values
(null, now(), 23, 1, 1, 1),
(null, now(), 67, 1, 3, 2),
(null, now(), 30, 2, 3, 2),
(null, now(), 8, 3, 4, 3);

-- -=-=-=-=-=-=-=-=-=-=-= SELECTS -=-=-=-=-=-=-=-=-=-=-=

select * from Empresa;
select * from Cargo;
select * from Funcionario;
select * from Login;
select * from Servidores;
select * from Componente;
select * from Medida;
select * from Registro;

-- -=-=-=-=-=-=-=-=-=-=-= JOINS -=-=-=-=-=-=-=-=-=-=-=

-- Todos os funcionários, suas respectivas empresas e informações de login
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
    