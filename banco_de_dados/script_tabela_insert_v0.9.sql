-- Criando Banco de Dados
DROP DATABASE if exists bd_MemoryAnalytics;
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;
-- drop database bd_MemoryAnalytics;
-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=
-- Tabela Empresa

DROP TABLE if exists Empresa;
create table Empresa
(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45) not null,
cnpjEmpresa char(18) unique not null
);

-- Tabela Cargo
drop table if exists Cargo;
create table Cargo
(
idCargo int primary key auto_increment,
nomeCargo varchar(20)
);

-- Tabela Funcionário
drop table if exists Funcionario;
create table Funcionario
(
idFunc int primary key auto_increment,
nomeFunc varchar(80),
emailFunc varchar(80),
telefoneFunc varchar(15),
fkCargo int,
fkEmpresa int,
foreign key(fkCargo) references Cargo(idCargo),
foreign key(fkEmpresa) references Empresa(idEmpresa)
);

-- Tabela Login
drop table if exists Login;
create table Login
(
idLogin int primary key auto_increment,
login varchar(80) not null unique,
senha varchar(16) not null unique,
fkFunc int,
foreign key (fkFunc) references Funcionario(idFunc)
);

-- Tabela Servidores
drop table if exists Servidores;
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
fkMedidaComponente int,
foreign key (fkMedidaComponente) references MedidaComponente(idMedidaComponente)
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

--    Tabela Servidores
insert into Servidores values
(null, "Setor F6", "192.158.1.38","6007041","Linux",1),
(null, "Setor G4", "192.157.1.38","3008041","Windows",1),
(null, "Setor T8", "192.156.1.38","6347056","Linux",2),
(null, "Setor H3", "192.155.1.38","6901231","Unix",2),
(null, "Setor de teste", "999.999.9.99", "9999999", "Windows", 2);


-- Tabela Componentes
insert into Componente values
(null, 'DISCO', 'C://'),
(null, 'MEMORIA', null),
(null, 'CPU', 'CPU 1'),
(null, 'REDE', null);

insert into Medida values
(null, 'Temperatura', 'Celsius','°C'),
(null, 'Uso', 'Porcentagem','%'),
(null, 'Frequencia', 'Hertz','Hz'),
(null, 'Capacidade', 'Giga Byte','Gb'),
(null, 'Latência', 'Byte','B'),
(null, 'Unidade', null, null),
(null, 'Tempo', 'Segundos', 's'),
(null, 'Frequencia', 'Giga Hertz','GHz');
   
insert into MedidaComponente values
(null, 5 , 1 , 2),
(null, 5 , 2 , 2),
(null, 5 , 3 , 2),
(null, 5 , 4 , 6);

-- Tabela Registro
insert into Registro values
(null, now(), 23, 1),
(null, now(), 67, 2),
(null, now(), 30, 3),
(null, now(), 12, 4);


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
