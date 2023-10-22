DROP DATABASE IF EXISTS bd_memoryanalytics;
CREATE DATABASE IF NOT EXISTS bd_memoryanalytics;
USE bd_memoryAnalytics;

CREATE USER IF NOT EXISTS urubu100 IDENTIFIED BY 'urubu100';
GRANT SELECT, INSERT, UPDATE, DELETE ON bd_memoryanalytics.* TO urubu100;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `empresa`(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(45),
cnpjEmpresa CHAR(18),
emailEmpresa VARCHAR(50),
telEmpresa CHAR(15)
) AUTO_INCREMENT = 10000;

CREATE TABLE IF NOT EXISTS `endereco`(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
cep CHAR(9),
logradouro VARCHAR(60),
numero INT,
cidade VARCHAR(60),
estado VARCHAR(45),
fkEmpresa INT,
FOREIGN KEY (`fkEmpresa`) REFERENCES empresa (idEmpresa)
);

CREATE TABLE IF NOT EXISTS `cargo`(
idCargo INT PRIMARY KEY AUTO_INCREMENT,
nomeCargo VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS `funcionario`(
idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
nomeFunc VARCHAR(80),
emailFunc VARCHAR(45),
telefoneFunc CHAR(11),
permissao CHAR(1),
fkEmpresa INT,
fkCargo INT,
fkSupervisor INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
FOREIGN KEY (fkCargo) REFERENCES cargo (idCargo),
FOREIGN KEY (fkSupervisor) REFERENCES funcionario (idFuncionario)
) AUTO_INCREMENT = 100000;

CREATE TABLE IF NOT EXISTS `login`(
idLogin INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(80),
senha VARCHAR(45),
fkFuncionario INT,
FOREIGN KEY (fkFuncionario) REFERENCES funcionario (idFuncionario)
);

CREATE TABLE IF NOT EXISTS `servidor`(
idServidor INT PRIMARY KEY AUTO_INCREMENT,
SistemaOperacionalServidor VARCHAR(20),
apelidoServidor VARCHAR(45),
ipServidor CHAR(12),
numeroSerieServidor VARCHAR(20),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE IF NOT EXISTS `tipoComponente`(
idTipoComponente INT PRIMARY KEY AUTO_INCREMENT,
tipoComponente VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS `modeloComponente`(
idModeloComponente INT PRIMARY KEY AUTO_INCREMENT,
fabricante VARCHAR(45),
nomeModelo VARCHAR(45),
codigogeracao VARCHAR(45),
fkTipoComponente INT,
FOREIGN KEY (fkTipoComponente) REFERENCES tipoComponente (idTipoComponente)
);

CREATE TABLE IF NOT EXISTS `metricaComponente`(
idMetricaComponente INT PRIMARY KEY AUTO_INCREMENT,
limiteMin VARCHAR(45),
limiteMax VARCHAR(45),
fkModeloComponente INT,
FOREIGN KEY (fkModeloComponente) REFERENCES modeloComponente (idModeloComponente)
);

CREATE TABLE IF NOT EXISTS `componente`(
idComponente INT PRIMARY KEY AUTO_INCREMENT,
fkServidor INT,
fkModeloComponente INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
FOREIGN KEY (fkModeloComponente) REFERENCES modeloComponente (idModeloComponente)
);

CREATE TABLE IF NOT EXISTS `subComponente`(
idSubComponente INT PRIMARY KEY AUTO_INCREMENT,
nomeSubComponente VARCHAR(45),
fkComponente INT,
FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
);

CREATE TABLE IF NOT EXISTS `medidaComponente`(
idMedidaComponente INT PRIMARY KEY AUTO_INCREMENT,
nomeMedida VARCHAR(45),
simboloMedida VARCHAR(10),
unidadeMedida VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS `detalheSubComponente`(
fkSubComponente INT NOT NULL,
fkMedidaComponente INT NOT NULL,
FOREIGN KEY (fkSubComponente) REFERENCES subComponente (idSubComponente),
FOREIGN KEY (fkMedidaComponente) REFERENCES medidaComponente (idMedidaComponente),
PRIMARY KEY (fkSubComponente, fkMedidaComponente)
);

CREATE TABLE IF NOT EXISTS `registro`(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
valorRegistro DOUBLE,
dtHoraRegistro DATETIME,
fkDSCSubComponente INT,
fkDSCMedidaComponente INT,
FOREIGN KEY (fkDSCSubComponente) REFERENCES detalheSubComponente (fkSubComponente),
FOREIGN KEY (fkDSCMedidaComponente) REFERENCES detalheSubComponente (fkMedidaComponente)
);

-- Inserir dados na tabela 'empresa'
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Empresa A', '12345678901234', 'empresaA@email.com', '1122334455'),
('Empresa B', '56789012345678', 'empresaB@email.com', '2233445566'),
('Empresa C', '90123456789012', 'empresaC@email.com', '3344556677');

-- Inserir dados na tabela 'endereco'
INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES
('12345678', 'Rua A', 123, 'Cidade A', 'Estado A', 10000),
('23456789', 'Rua B', 456, 'Cidade B', 'Estado B', 10001),
('34567890', 'Rua C', 789, 'Cidade C', 'Estado C', 10002);

-- Inserir dados na tabela 'cargo'
INSERT INTO cargo (nomeCargo) VALUES
('Gerente'),
('Analista'),
('Técnico');

-- Inserir dados na tabela 'funcionario'
INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('João', 'joao@email.com', '11122233344', 'A', 10000, 1, NULL),
('Maria', 'maria@email.com', '22233344455', 'A', 10001, 2, 100000),
('Pedro', 'pedro@email.com', '33344455566', 'B', 10002, 3, 100000);

-- Inserir dados na tabela 'login'
INSERT INTO login (login, senha, fkFuncionario) VALUES
('joao123', 'senha123', 100000),
('maria456', 'senha456', 100001),
('pedro789', 'senha789', 100002);

-- Inserir dados na tabela 'servidor'
INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor, fkEmpresa) VALUES
('Linux', 'Servidor A', '192.168.1.1', 'SERV123', 10000),
('Windows', 'Servidor B', '192.168.1.2', 'SERV456', 10001),
('Linux', 'Servidor C', '192.168.1.3', 'SERV789', 10002);

-- Inserir dados na tabela 'tipoComponente'
INSERT INTO tipoComponente (tipoComponente) VALUES
('Sensor'),
('Atuador'),
('Controlador');

-- Inserir dados na tabela 'modeloComponente'
INSERT INTO modeloComponente (fabricante, nomeModelo, codigogeracao, fkTipoComponente) VALUES
('Fabricante A', 'Modelo X', 'COD123', 1),
('Fabricante B', 'Modelo Y', 'COD456', 2),
('Fabricante C', 'Modelo Z', 'COD789', 3);

-- Inserir dados na tabela 'metricaComponente'
INSERT INTO metricaComponente (limiteMin, limiteMax, fkModeloComponente) VALUES
('0', '100', 1),
('10', '90', 2),
('20', '80', 3);

-- Inserir dados na tabela 'componente'
INSERT INTO componente (fkServidor, fkModeloComponente) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Inserir dados na tabela 'subComponente'
INSERT INTO subComponente (nomeSubComponente, fkComponente) VALUES
('SubComponente 1', 1),
('SubComponente 2', 2),
('SubComponente 3', 3);

-- Inserir dados na tabela 'medidaComponente'
INSERT INTO medidaComponente (nomeMedida, simboloMedida, unidadeMedida) VALUES
('Temperatura', '°C', 'Celsius'),
('Pressão', 'Pa', 'Pascal'),
('Umidade', '%', 'Porcentagem');

INSERT INTO detalheSubComponente VALUES
(1, 1),
(2, 2),
(3, 3);

-- Inserir dados na tabela 'registro'
INSERT INTO registro (idRegistro, valorRegistro, dtHoraRegistro, fkDSCSubComponente, fkDSCMedidaComponente) VALUES
(null, 25.5, '2023-10-09 10:00:00', 1, 1), #Seguros
(null, 31.5, '2023-10-09 10:30:00', 1, 1),
(null, 50.0, '2023-10-09 10:45:00', 1, 1),
(null, 35.0, '2023-10-09 11:00:00', 2, 2),
(null, 28.0, '2023-10-09 11:30:00', 2, 2),
(null, 61.0, '2023-10-09 11:45:00', 2, 2),
(null, 50.0, '2023-10-09 12:00:00', 3, 3),
(null, 62.0, '2023-10-09 12:30:00', 3, 3),
(null, 44.5, '2023-10-09 12:45:00', 3, 3),
(null, 90.0, '2023-10-09 13:00:00', 1, 1), #Alertas
(null, 95.0, '2023-10-09 13:30:00', 1, 1),
(null, 12.0, '2023-10-09 14:00:00', 2, 2),
(null, 84.0, '2023-10-09 14:30:00', 2, 2),
(null, 75.0, '2023-10-09 15:00:00', 3, 3),
(null, 23.0, '2023-10-09 15:30:00', 3, 3),
(null, -5.0, '2023-10-09 16:00:00', 1, 1), # Criticos
(null, 109.5, '2023-10-09 16:30:00', 2, 2), 
(null, 97.0, '2023-10-09 17:00:00', 3, 3);

select * from login;

select * from Registro;
select * from metricaComponente;
select * from servidor;
select * from componente;
select * from medidacomponente;
select * from subcomponente;
select * from detalhesubcomponente;

# VIEW SERVIDORES INSTAVEIS
create view getServInstaveis as select count(Servidor.idServidor) as qtdRegistrosLimiteMax from Servidor join componente on idServidor = fkServidor 
join subComponente on idComponente = fkComponente 
join detalheSubComponente on idSubComponente = fkSubComponente 
join Registro on fkSubComponente = fkDSCSubComponente 
join ModeloComponente on componente.fkModeloComponente = ModeloComponente.idModeloComponente
join metricaComponente on ModeloComponente.idModeloComponente = metricaComponente.fkModeloComponente 
where Registro.valorRegistro > metricaComponente.limiteMax;
# drop view getServInstaveis;

# SELECT count(idServidor) as qtdServInstaveis FROM getServInstaveis JOIN servidor WHERE fkEmpresa = 10002;

# VIEWS ESTADO SERVIDORES GERAL

create view getServidoresSeguros as select count(Servidor.idServidor) as qtdServSeguros, fkEmpresa from Servidor join componente on idServidor = fkServidor 
join subComponente on idComponente = fkComponente 
join detalheSubComponente on idSubComponente = fkSubComponente 
join Registro on fkSubComponente = fkDSCSubComponente 
join ModeloComponente on componente.fkModeloComponente = ModeloComponente.idModeloComponente
join metricaComponente on ModeloComponente.idModeloComponente = metricaComponente.fkModeloComponente 
where Registro.valorRegistro <= metricaComponente.limiteMax * 0.85 and Registro.valorRegistro >= metricaComponente.limiteMin * 1.15 group by fkEmpresa;
select * from getServidoresSeguros;

create view getServidoresAlertas as select count(Servidor.idServidor) as qtdServAlertas, fkEmpresa from Servidor join componente on idServidor = fkServidor 
join subComponente on idComponente = fkComponente 
join detalheSubComponente on idSubComponente = fkSubComponente 
join Registro on fkSubComponente = fkDSCSubComponente 
join ModeloComponente on componente.fkModeloComponente = ModeloComponente.idModeloComponente
join metricaComponente on ModeloComponente.idModeloComponente = metricaComponente.fkModeloComponente 
where Registro.valorRegistro > metricaComponente.limiteMax * 0.85 and Registro.valorRegistro < metricaComponente.limiteMax or Registro.valorRegistro < metricaComponente.limiteMin * 1.15 and Registro.valorRegistro > metricaComponente.limiteMin group by fkEmpresa;
select * from getServidoresAlertas;

create view getServidoresCriticos as select count(Servidor.idServidor) as qtdServCriticos, fkEmpresa from Servidor join componente on idServidor = fkServidor 
join subComponente on idComponente = fkComponente 
join detalheSubComponente on idSubComponente = fkSubComponente 
join Registro on fkSubComponente = fkDSCSubComponente 
join ModeloComponente on componente.fkModeloComponente = ModeloComponente.idModeloComponente
join metricaComponente on ModeloComponente.idModeloComponente = metricaComponente.fkModeloComponente 
where Registro.valorRegistro > metricaComponente.limiteMax or Registro.valorRegistro < metricaComponente.limiteMin group by fkEmpresa;
select * from getServidoresCriticos;


# drop view getServidoresCriticos;

create view getEstadoGeralServ as select qtdServSeguros, qtdServAlertas, qtdServCriticos, S.fkEmpresa from getServidoresSeguros S, getServidoresAlertas A, getServidoresCriticos C where S.fkEmpresa = A.fkEmpresa and S.fkEmpresa = C.fkEmpresa and A.fkEmpresa = C.fkEmpresa;
select * from getEstadoGeralServ WHERE fkEmpresa = 10000;
SELECT qtdServSeguros, qtdServAlertas, qtdServCriticos FROM getEstadoGeralServ JOIN servidor WHERE fkEmpresa = 10002;

select qtdServSeguros, qtdServAlertas, qtdServCriticos, S.fkEmpresa from getServidoresSeguros S, getServidoresAlertas A, getServidoresCriticos C where S.fkEmpresa = A.fkEmpresa and S.fkEmpresa = C.fkEmpresa and A.fkEmpresa = C.fkEmpresa;


# VIEW ESCALABILIDADE

CREATE OR REPLACE VIEW capacidade_e_escalabilidade AS
SELECT
    s.idServidor,
    s.apelidoServidor,
    s.SistemaOperacionalServidor,
    s.ipServidor,
    e.nomeEmpresa,
    c.nomeCargo,
    AVG(CASE WHEN mc.nomeModelo = 'Modelo X' THEN r.valorRegistro ELSE 0 END) AS uso_memoria,
    AVG(CASE WHEN mc.nomeModelo = 'Modelo Y' THEN r.valorRegistro ELSE 0 END) AS uso_cpu
FROM
    servidor AS s
JOIN empresa AS e ON s.fkEmpresa = e.idEmpresa
JOIN funcionario AS f ON e.idEmpresa = f.fkEmpresa
JOIN cargo AS c ON f.fkCargo = c.idCargo
JOIN modeloComponente AS mc ON s.idServidor = mc.fkTipoComponente
JOIN metricaComponente AS mco ON mc.idModeloComponente = mco.fkModeloComponente
JOIN registro AS r ON mco.idMetricaComponente = r.fkDSCMedidaComponente
GROUP BY
    s.idServidor,
    s.apelidoServidor,
    s.SistemaOperacionalServidor,
    s.ipServidor,
    e.nomeEmpresa,
    c.nomeCargo;
    
    SELECT * FROM capacidade_e_escalabilidade;