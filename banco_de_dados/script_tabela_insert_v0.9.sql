-- Criando Banco de Dados
DROP DATABASE if exists bd_MemoryAnalytics;
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;


-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=

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

drop table if exists cargo;
create table cargo
(
idCargo int primary key auto_increment,
nomeCargo varchar(45)
);

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


drop table if exists login;
create table login
(
idLogin int primary key auto_increment,
login varchar(80) not null unique,
senha varchar(45) not null,
fkFuncionario int not null,
foreign key (fkFuncionario) references funcionario(idFunc)
);


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



drop table if exists nomeComponente;
create table nomeComponente
(
idNomeComponente int primary key auto_increment,
nomeComponente varchar(45)    
);

drop table if exists modeloComponente;
create table modeloComponente
(
idModeloComponente int primary key auto_increment,
fabricante varchar(45),
nomeModelo varchar(45),
codigoGeracao varchar(45),
fkNomeComponente int,
foreign key (fkNomeComponente) references nomeComponente(idNomeComponente)    
);

drop table if exists subComponente;
create table subComponente 
(
idSubComponente int primary key auto_increment,
nomeSubComponente varchar(45)
);

drop table if exists componenteTotal;
create table componenteTotal
(
idComponenteTotal int primary key auto_increment,
fkSubComponente int,
fkModeloComponente int,
foreign key(fkSubComponente) references subComponente(idSubComponente),
foreign key(fkModeloComponente) references modeloComponente(idModeloComponente)
);

drop table if exists metricaComponente;
create table metricaComponente
(
idMetrica int primary key,
limiteMin varchar(45),
limiteMax varchar(45),
fkComponenteTotal int,
foreign key(fkComponenteTotal) references componenteTotal(idComponenteTotal)
);


drop table if exists medidaComponente;
create table medidaComponente
(
idMedidaComponente int primary key auto_increment,
nomeMedida varchar(30),
simboloMedida varchar(4),
unidadeMedida varchar(20)

);


drop table if exists componente;
create table componente
(
idComponente int primary key auto_increment,
fkServidor int,
fkMedidaComponente int,
fkComponenteTotal int,
foreign key(fkServidor) references servidor(idServer),
foreign key(fkMedidaComponente) references medidaComponente(idMedidaComponente),
foreign key(fkComponenteTotal) references componenteTotal(idComponenteTotal)
);

Drop table if exists registro;
create table registro
(
idRegistro int primary key auto_increment,
dtHoraRegistro datetime,
valorRegistro varchar(45),
fkComponente int,
foreign key (fkComponente) references componente(idComponente)
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
