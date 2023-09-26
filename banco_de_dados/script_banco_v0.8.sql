-- Criando Banco de Dados
create database bd_MemoryAnalytics;
use bd_MemoryAnalytics;
-- drop database bd_MemoryAnalytics;
-- -=-=-=-=-=-=-=-=-=-=-= Definindo as tabelas -=-=-=-=-=-=-=-=-=-=-=
-- Tabela Empresa
create table Empresa
(
<<<<<<< HEAD
      idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45) not null,
    cnpjEmpresa char(18) unique not null
);

-- Tabela Cargo
create table Cargo
(
      idCargo int primary key auto_increment,
    nomeCargo varchar(20)
=======
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45) not null,
cnpjEmpresa char(18) unique not null
);

-- Tabela Cargo
create table Cargo(
idCargo int primary key auto_increment,
nomeCargo varchar(20)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);
 
-- Tabela Funcionário
create table Funcionario
(
<<<<<<< HEAD
      idFunc int primary key auto_increment,
    nomeFunc varchar(80),
    emailFunc varchar(80),
    telefoneFunc varchar(15),
    fkCargo int,
    fkEmpresa int,
    foreign key(fkCargo) references Cargo(idCargo),
    foreign key(fkEmpresa) references Empresa(idEmpresa)
=======
idFunc int primary key auto_increment,
nomeFunc varchar(80),
emailFunc varchar(80),
telefoneFunc varchar(15),
fkCargo int,
fkEmpresa int,
foreign key(fkCargo) references Cargo(idCargo),
foreign key(fkEmpresa) references Empresa(idEmpresa)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);

-- Tabela Login
create table Login
(
<<<<<<< HEAD
      idLogin int primary key auto_increment,
    login varchar(80) not null unique,
    senha varchar(16) not null unique,
    fkFunc int,
    foreign key (fkFunc) references Funcionario(idFunc)
=======
idLogin int primary key auto_increment,
login varchar(80) not null unique,
senha varchar(16) not null unique,
fkFunc int,
foreign key (fkFunc) references Funcionario(idFunc)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);

-- Tabela Servidores
create table Servidores
(
<<<<<<< HEAD
      idServer int primary key auto_increment,
    localServer varchar(45),
    ipServer varchar(12) unique,
    numeroSerieServer varchar(20) unique,
    sistemaOperacionalServer varchar(20),
    fkEmpresa int,
    foreign key(fkEmpresa) references Empresa(idEmpresa)
=======
idServer int primary key auto_increment,
localServer varchar(45),
ipServer varchar(12) unique,
numeroSerieServer varchar(20) unique,
sistemaOperacionalServer varchar(20),
fkEmpresa int,
foreign key(fkEmpresa) references Empresa(idEmpresa)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);

-- Tabela Vizualização de dados
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
create table Componente
(
<<<<<<< HEAD
      idComponente int primary key auto_increment,
    nomeComponente varchar(45),
    subComponente varchar(20)
=======
idComponente int primary key auto_increment,
nomeComponente varchar(45),
subComponente varchar(20)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);

-- Tabela Medida
create table Medida
(
<<<<<<< HEAD
      idMedida int primary key auto_increment,
    nomeMedida varchar(30),
    unidadeMedida varchar(20),
    simboloMedida varchar(4)
=======
idMedida int primary key auto_increment,
nomeMedida varchar(30),
unidadeMedida varchar(20),
simboloMedida varchar(4)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
);

create table MedidaComponente
(
<<<<<<< HEAD
      idMedidaComponente int primary key auto_increment,
    fkServidor int,
    fkComponente int,
    fkMedida int,
    foreign key (fkServidor) references Servidores(idServer),
    foreign key (fkComponente) references Componente(idComponente),
    foreign key (fkMedida) references Medida(idMedida)
=======
idMedidaComponente int primary key auto_increment,
fkServidor int,
fkComponente int,
fkMedida int,
foreign key (fkServidor) references Servidores(idServer),
foreign key (fkComponente) references Componente(idComponente),
foreign key (fkMedida) references Medida(idMedida)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
    );
   
   
-- Tabela Registros
create table Registro
(
<<<<<<< HEAD
      idRegistro int primary key auto_increment,
    dtHoraRegistro datetime,
    valorRegistro varchar(45),
    fkMedidaComponente int,
    foreign key (fkMedidaComponente) references MedidaComponente(idMedidaComponente)
=======
idRegistro int primary key auto_increment,
dtHoraRegistro datetime,
valorRegistro varchar(45),
fkMedidaComponente int,
foreign key (fkMedidaComponente) references MedidaComponente(idMedidaComponente)
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
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
<<<<<<< HEAD
(null, 'Frequencia', 'Giga Hertz','GHz');
=======
(null, 'Frequencia', 'Giga Hertz','GHz'),
(null, 'Capacidade', 'Mega Byte', 'Mb');
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
   
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

select * from Empresa;
select * from Cargo;
select * from Funcionario;
select * from Login;
select * from Servidores;
select * from Componente;
select * from Medida;
select * from MedidaComponente;
select * from Registro;

-- -=-=-=-=-=-=-=-=-=-=-= JOINS -=-=-=-=-=-=-=-=-=-=-=

-- Todos os funcionários, suas respectivas empresas e informações de login
select
<<<<<<< HEAD
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

-- Todos os servidores, seus registros, componentes monitorados e unidades de medida correspondentes
Select
      localServer 'Servidores',
    ipServer 'Ip do servidor',
    nomeComponente 'Nome componente',
    valorRegistro 'Valor',
    simboloMedida 'Simbolo',
    dtHoraRegistro 'Hora e data'
from MedidaComponente as mc
      join Servidores on mc.fkServidor = idServer
    join Componente on mc.fkComponente = idComponente
    join Registro on fkMedidaComponente = idMedidaComponente
    join Medida on mc.fkMedida = idMedida;
   
   
=======
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

-- Todos os servidores, seus registros, componentes monitorados e unidades de medida correspondentes
Select
	localServer 'Servidores',
	ipServer 'Ip do servidor',
	nomeComponente 'Nome componente',
	valorRegistro 'Valor',
	simboloMedida 'Simbolo',
	dtHoraRegistro 'Hora e data' 
from MedidaComponente as mc
	join Servidores on mc.fkServidor = idServer
	join Componente on mc.fkComponente = idComponente
	join Registro on fkMedidaComponente = idMedidaComponente
	join Medida on mc.fkMedida = idMedida;
   

>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
-- -=-=-=-=-=-=-=-=-=-=-= Procedures -=-=-=-=-=-=-=-=-=-=-=

DELIMITER $$
create procedure Cadastro
(
<<<<<<< HEAD
      nomeEmpresa varchar(45),
=======
	nomeEmpresa varchar(45),
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
    cnpj char(18),
    emailContato varchar(80),
    telContato varchar(15),
    nomeAdm varchar(80),
    senha varchar(16))
begin
      insert into Empresa values (null, nomeEmpresa, cnpj);
    insert into Funcionario values (null, nomeAdm, emailContato, telContato, 3, (select idEmpresa from Empresa where cnpjEmpresa = cnpj));
<<<<<<< HEAD
    insert into Login values (null, emailContato, senha,
            (select idFunc from Funcionario where emailFunc = emailContato and telefoneFunc = telContato and nomeFunc = nomeAdm));
=======
	insert into Login values (null, emailContato, senha, (select idFunc from Funcionario where emailFunc = emailContato and telefoneFunc = telContato and nomeFunc = nomeAdm));
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
end $$

select * from Registro;
select * from MedidaComponente;

create procedure RegistroCPU
(
      tempoOcioso varchar(45),
    tempoUsoKernel varchar(45),
    interrupcoesCpu varchar(45),
    frequenciaCpuAtual varchar(45))
begin
   insert into MedidaComponente values (null, 5 , 3 , 7);
   insert into Registro values (null, now(), tempoOcioso, (select max(idMedidaComponente) from MedidaComponente));
   
   insert into MedidaComponente values (null, 5 , 3 , 7);
<<<<<<< HEAD
   
   insert into Registro values (null, now(), interrupcoesCpu, null);
   insert into MedidaComponente values (null, 5 , 3 , 7);
   
   insert into Registro values (null, now(), frequenciaCpuAtual, null);
=======
   insert into Registro values (null, now(), tempoUsoKernel, (select max(idMedidaComponente) from MedidaComponente));
   
   insert into MedidaComponente values (null, 5 , 3 , 7);
   insert into Registro values (null, now(), interrupcoesCpu, (select max(idMedidaComponente) from MedidaComponente));
  
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
   insert into MedidaComponente values (null, 5 , 3 , 8);
   insert into Registro values (null, now(), frequenciaCpuAtual, (select max(idMedidaComponente) from MedidaComponente));

end $$

create procedure RegistroMemoria
(
      memoriaUsada varchar(45),
      memoriaLivre varchar(45),
      memoriaDisponivel varchar(45)
)
begin
<<<<<<< HEAD
      insert into Registro values (null, now(), memoriaUsada, 'GB');
      insert into Registro values (null, now(), memoriaLivre, 'GB');
      insert into Registro values (null, now(), memoriaDisponivel, 'GB');
=======
	insert into MedidaComponente values (null, 5 , 2 , 4);
	insert into Registro values (null, now(), memoriaUsada, (select max(idMedidaComponente) from MedidaComponente));
	insert into MedidaComponente values (null, 5 , 2 , 4);
	insert into Registro values (null, now(), memoriaLivre, (select max(idMedidaComponente) from MedidaComponente));
	insert into MedidaComponente values (null, 5 , 2 , 4);
	insert into Registro values (null, now(), memoriaDisponivel, (select max(idMedidaComponente) from MedidaComponente));
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
end $$

create procedure RegistroDisco
(
<<<<<<< HEAD
      usoTotalDisco varchar(45),
      discoUsado varchar(45),
      discoLivre varchar(45),
    porcentDisco varchar(45)    
)
begin
      insert into Registro values (null, now(), usoTotalDisco, 'GB');
      insert into Registro values (null, now(), discoUsado, 'GB');
      insert into Registro values (null, now(), discoLivre, 'GB');
      insert into Registro values (null, now(), porcentDisco, '%');
end $$
=======
	usoTotalDisco varchar(45),
	discoUsado varchar(45),
	discoLivre varchar(45),
	porcentDisco varchar(45)    
)
begin
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e

    insert into MedidaComponente values (null, 5 , 1 , 4);
	insert into Registro values (null, now(), usoTotalDisco, (select max(idMedidaComponente) from MedidaComponente));
    
	insert into MedidaComponente values (null, 5 , 1 , 4);
    insert into Registro values (null, now(), discoUsado, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5 , 1 , 4);
    insert into Registro values (null, now(), discoLivre, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5 , 1 , 2);
    insert into Registro values (null, now(), porcentDisco, (select max(idMedidaComponente) from MedidaComponente));
end $$

create procedure RegistroRede
(
<<<<<<< HEAD
      bytesEnviados varchar(45),
      bytesRecebidos varchar(45),
      qtdErrosEntrada varchar(45),
    qtdErrosSaida varchar(45)    
)
begin
      insert into Registro values (null, now(), bytesEnviados, 'MB');
      insert into Registro values (null, now(), bytesRecebidos, 'MB');
      insert into Registro values (null, now(), qtdErrosEntrada, null);
      insert into Registro values (null, now(), qtdErrosSaida, null);
=======
	bytesEnviados varchar(45),
	bytesRecebidos varchar(45),
	qtdErrosEntrada varchar(45),
	qtdErrosSaida varchar(45)
)
begin
	insert into MedidaComponente values (null, 5,4,9);
    insert into Registro values (null, now(), bytesEnviados, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5,4,9);
    insert into Registro values (null, now(), bytesRecebidos, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5,4,6);
    insert into Registro values (null, now(), qtdErrosEntrada, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5,4,6);
    insert into Registro values (null, now(), qtdErrosSaida, (select max(idMedidaComponente) from MedidaComponente));
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
end $$
create procedure RegistroTemperatura
(
      temperaturaCpuLabel varchar(45),
      temperaturaCpuAtual varchar(45)
)
begin
<<<<<<< HEAD
      insert into Registro values (null, now(), temperaturaCpuLabel, '°C');
      insert into Registro values (null, now(), temperaturaCpuAtual, '°C');
end $$


create procedure vizualizacao_dados
(
      cpu_uso bigint,
    disco_uso bigint,
    ram_uso  bigint
)
begin
      insert into visualizacao_dados values(null, 5, cpu_uso, disco_uso, ram_uso, '%', now());
end $$
=======
    insert into MedidaComponente values (null, 5 , 3 , 1);
    insert into Registro values (null, now(), temperaturaCpuLabel, (select max(idMedidaComponente) from MedidaComponente));
    
    insert into MedidaComponente values (null, 5 , 3 , 1);
    insert into Registro values (null, now(), temperaturaCpuAtual, (select max(idMedidaComponente) from MedidaComponente));
end $$   
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e

DELIMITER ;
    -- -=-=-=-=-=-=-=-=-=-=-= Views -=-=-=-=-=-=-=-=-=-=-=

select * from MedidaComponente;
select * from Servidores;
select * from Componente;
select * from Medida;
select * from Registro;

create view TabelaAnalitica as
select
	fkServidor Servidor,
	nomeComponente Componente,
	nomeMedida Medida,
	valorRegistro Valor,
	dtHoraRegistro Horario
from MedidaComponente mc
	join Servidores s on s.idServer = mc.fkServidor
	join Componente c on c.idComponente = mc.fkComponente
	join Medida m on m.idMedida = mc.fkMedida
	join Registro r on r.fkMedidaComponente = mc.idMedidaComponente;
   
select * from TabelaAnalitica where Servidor = 5;

SET @sql = NULL; -- Criando uma variável para armazenar o comando

SELECT
<<<<<<< HEAD
      dtHoraRegistro as "Hora do Registro",
  max(CASE WHEN nomeComponente = 'CPU' THEN valorRegistro ELSE null END) AS "CPU",
  max(CASE WHEN nomeComponente = 'Disco' THEN valorRegistro ELSE null END) AS "Disco",
  max(CASE WHEN nomeComponente = 'Rede' THEN valorRegistro ELSE null END) AS 'Rede',
  max(CASE WHEN nomeComponente = 'Memoria' THEN valorRegistro ELSE null END) AS 'Memoria'
  -- Repita o padrão para cada ano que você deseja incluir
FROM medida
join Registro on medida.fkRegistro = idRegistro
join Componente on medida.fkRegistro = idComponente
GROUP BY dtHoraRegistro;
*/

select * from MedidaComponente;
select * from Servidores;
select * from Componente;
select * from Medida;
select * from Registro;

create view TabelaAnalitica as
select
    fkServidor Servidor,
    nomeComponente Componente,
    nomeMedida Medida,
    valorRegistro Valor,
    dtHoraRegistro Horario
from MedidaComponente mc
	join Servidores s on s.idServer = mc.fkServidor
    join Componente c on c.idComponente = mc.fkComponente
    join Medida m on m.idMedida = mc.fkMedida
    join Registro r on r.fkMedidaComponente = mc.idMedidaComponente;
   
select * from TabelaAnalitica where Servidor = 5;

SET @sql = NULL; -- Criando uma variável para armazenar o comando

SELECT
  GROUP_CONCAT(DISTINCT
    CONCAT(
      "max(case when Componente = '",Componente,"' and Medida = '",Medida,"' then Valor end) ",Medida,Componente
    )
  )
INTO @sql

FROM
  TabelaAnalitica; -- Aqui vem o nome da sua view!
 
select @sql;

SET @sql = CONCAT('SELECT Servidor, Horario, ', @sql, '
                 
FROM TabelaAnalitica
                   
GROUP BY Servidor, Horario');

select @sql;

PREPARE stmt FROM @sql;

EXECUTE stmt;

DEALLOCATE PREPARE stmt;
=======
  GROUP_CONCAT(DISTINCT
    CONCAT(
      "max(case when Componente = '",Componente,"' and Medida = '",Medida,"' then Valor end) ",Medida,Componente
    )
  )
INTO @sql

FROM
  TabelaAnalitica; -- Aqui vem o nome da sua view!
 
select * from TabelaAnalitica;

select @sql;

SET @sql = CONCAT('SELECT Servidor, Horario, ', @sql, '
                 
FROM TabelaAnalitica
                   
GROUP BY Servidor, Horario');

select @sql;

PREPARE stmt FROM @sql;

EXECUTE stmt;

DEALLOCATE PREPARE stmt;

select * from MedidaComponente;
select * from Componente;
select * from Medida;

-- drop database bd_MemoryAnalytics;
>>>>>>> 42153bbd924be6067ab0a21648b4be7bb3d10c6e
