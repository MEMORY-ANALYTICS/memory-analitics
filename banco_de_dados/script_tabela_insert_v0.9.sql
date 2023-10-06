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
cnpjEmpresa char(18) unique not null,
emailEmpresa varchar(50) not null,
telEmpresa char(14) not null
);


drop table if exists endereco;
create table endereco
(
idEndereco int primary key auto_increment,
cep char(8),
logradouro varchar(45),
numero varchar(45),
cidade varchar(45),
estado varchar(45),
fkEmpresa int,
foreign key(fkEmpresa) references empresa(idEmpresa)
);

-- Tabela Cargo
drop table if exists cargo;
create table cargo
(
idCargo int primary key auto_increment,
nomeCargo varchar(45)
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
foreign key(fkEmpresa) references empresa(idEmpresa),
foreign key(fkCargo) references cargo(idCargo),
foreign key(fkSupervisor) references funcionario(idFunc)
);

-- Tabela Login
drop table if exists login;
create table login
(
idLogin int primary key auto_increment,
login varchar(80) not null unique,
senha varchar(45) not null,
fkFuncionario int not null,
foreign key (fkFuncionario) references funcionario(idFunc)
);

-- Tabela Servidores
drop table if exists servidor;
create table servidor
(
idServer int primary key auto_increment,
sistemaOperacionalServer varchar(20),
apelidoServer varchar(45),
ipServer varchar(12) unique, -- Unique?
numeroSerieServer varchar(20) unique,
fkEmpresa int,
foreign key(fkEmpresa) references empresa(idEmpresa)
);

drop table if exists registro;
create table registro
(
idRegistro int,
valorRegistro double,
dtHoraRegistro datetime
);

drop table if exists medidaComponente;
CREATE TABLE medidaComponente (
    idMedidaComponente INT PRIMARY KEY AUTO_INCREMENT,
    nomeMedida VARCHAR(25),
    simboloMedida VARCHAR(4),
    unidadeMedida VARCHAR(45)
);

drop table if exists metricaComponente;
create table metricaComponente
(
idMetrica int primary key,
limiteMin varchar(45),
limiteMax varchar(45),
fkComponente int
);


drop table if exists componenteCompleto;
create table componenteCompleto
(
idComponenteCompleto varchar(45),
fkSubComponente INT,
fkModeloComponente int
);

drop table if exists componenteCompleto;
create table componenteCompleto
(
idComponenteCompleto varchar(45),
fkSubComponente INT,
fkModeloComponente int
);


drop table if exists componente;
create table componente
(
idComponente int,
fkServidor int,
fkMedidaComponente int,
fkComponenteTotal int
);

-- Tabela Componente
drop table if exists componente;
create table componente
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
Drop table if exists registro;
create table registro
(
idRegistro int primary key auto_increment,
dtHoraRegistro datetime,
valorRegistro varchar(45),
fkMedidaComponente int
-- foreign key (fkMedidaComponente) references MedidaComponente(idMedidaComponente)
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
(null,'joao@gmail.com','joao123',1),
(null,'marcos@gmail.com','marcos123',2),
(null,'solange@gmail.com','solange123',3),
(null,'luan@gmail.com','luan123',4),
(null,'maria@gmail.com','maria123',5),
(null,'larissa@gmail.com','larissa123',6);

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
