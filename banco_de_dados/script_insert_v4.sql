use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Inserir dados na tabela 'empresa'
INSERT INTO empresa VALUES (10000 , 'Memory Analytics','12345675601234', 'memoryAnalytics@gmail.com', '1122884455' );
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Empresa A', '12345678901234', 'empresaA@gmail.com', '1122334455'),
('Empresa B', '56789012345678', 'empresaB@gmail.com', '2233445566'),
('Empresa C', '90123456789012', 'empresaC@gmail.com', '3344556677'),
('Empresa D', '90123456789012', 'empresaD@gmail.com', '3344556677'),
("U Contact", "10293847561184", "ucontact@gmail.com", "119480165714");

-- Inserir dados na tabela 'endereco'
INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES
('12345678', 'Rua A', 123, 'Cidade A', 'Estado A', 10000),
('23456789', 'Rua B', 456, 'Cidade B', 'Estado B', 10001),
('34567890', 'Rua C', 789, 'Cidade C', 'Estado C', 10002),
('51462073', 'Rua D', 066, 'Cidade D', 'Estado D', 10003),
('51462063', 'Rua D', 066, 'São Paulo', 'Estado SP', 10004);

-- Inserir dados na tabela 'cargo'
INSERT INTO cargo (nomeCargo) VALUES
('Gerente'),
('Analista'),
('Técnico');


-- Inserir dados na tabela 'funcionario'

INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('Gustavo Desunte', 'gustavo@email.com', '11122233344', 'A', 10000, 1, NULL),
('Adrino Marquês', 'adriano@email.com', '22233344455', 'A', 10001, 2, 100),
('Gabriel Branco', 'gabriel@email.com', '33344455566', 'B', 10002, 3, 100),
('Daniel', 'daniel@email.com', '44455566677', 'C', 10002, 3, NULL),
('Rafael Almeida', 'rafael.almeida@email.com','11092942094', 'A', 10004, 1, null),
('Ana Fonseca', 'anafonseca@email.com', '12938402039', 'C', 10004, 2, 105); 

-- Inserir dados na tabela 'login'
INSERT INTO login (email, senha, fkFuncionario) VALUES
('gustavo@email.com', 'senha123', 100),
('adriano@email.com', 'senha456', 101),
('gabriel@email.com', 'senha789', 102),
('daniel@email.com', 'senhaDaniel', 103),
('rafael.almeida@email.com', 'rafa123', 104),
('ana.fonseca@email.com','ana123',105);


-- Inserir dados na tabela 'servidor'
INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, localServidor,  macAdress, fkEmpresa) VALUES
('Linux', 'rapha', 'Rio de Janeiro', '00:11:B1:RB:ES0:88', 10004),
('Windows', 'ale123', 'São Paulo', '00:45:e2:dd:d6:45', 10004),
('Linux', 'danie', 'São Paulo', '00:11:B2:RB:E1:88', 10004),
('Windows', 'mined', 'São Paulo', '11:11:B1:RB:E1:88', 10004),
('Linux', 'ale321', 'Rio de Janeiro', '98:2c:bc:a3:63:12', 10004),
('Windows', 'Servidor D', 'Rio de Janeiro', '00:11:B1:RB:E1:90', 10002),
('Windows', 'Servidor E', 'China', '00:11:B1:RB:E1:88', 10004),
('Windows', 'Servidor A', 'Carolina do Norte', '00:11:B1:RB:E1:88', 10004),
('Windows', 'Servidor B', 'São Paulo', '09:12:C4:TN:O9:X2', 10004),
('Linux', 'Servidor C', 'Moscou', '44:09:N3:SN:O7:99', 10004);


-- Inserir dados na tabela 'componente'
INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 4), -- CPU
('Intel', 'Xeon', 'CPU', 2, 10, 9), -- CPU
('Intel', 'Xeon', 'CPU', 2, 10, 10), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 4), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 4), -- DISCO
('TPLink','NP3200','REDE', 10, 85, 4), -- REDE
('TPLink','NP3200','REDE', 10, 85, 5); -- REDE


INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(60, 'Mhz','', '2023-10-09 10:00:00', 1),  -- CPU
(50, '°C','Celsius', '2023-10-09 10:00:00', 1),  -- CPU
(70, '°C','Celsius', '2023-10-09 10:01:00', 1),  -- CPU
(70, '°C','Celsius', '2023-10-09 10:02:00', 1),  -- CPU
(75, '°C','Celsius', '2023-10-09 10:04:00', 1),  -- CPU
(98, '°C','Celsius', '2023-10-09 10:03:00', 1),  -- CPU
(100, '°C','Celsius', '2023-10-09 10:06:00', 1),  -- CPU
(100, '°C','Celsius', '2023-11-09 10:06:00', 1),  -- CPU
(100, '°C','Celsius', '2023-10-10 10:08:00', 1),  -- CPU
(101, '°C','Celsius', '2023-10-11 10:08:00', 1),  -- CPU
(134, '°C','Celsius', '2023-10-13 10:08:00', 1),  -- CPU
(197, '°C','Celsius', '2023-10-14 10:08:00', 1),  -- CPU
(20, '°C','Celsius', '2023-10-15 10:08:00', 1),  -- CPU
(60, '°C','Celsius', '2023-10-16 10:08:00', 1),  -- CPU
(56, '°C','Celsius', '2023-10-17 10:08:00', 1),  -- CPU
(46, '°C','Celsius', '2023-10-18 10:08:00', 1),  -- CPU
(48, '°C','Celsius', '2023-10-19 10:08:00', 1),  -- CPU
(87, '°C','Celsius', '2023-10-20 10:08:00', 1),  -- CPU
(100, '°C','Celsius', '2023-10-12 10:08:00', 1),  -- CPU
(50, '°C','Celsius', '2023-10-09 10:00:00', 2),  -- CPU
(90, '°C','Celsius', '2023-11-09 10:01:00', 2),  -- CPU
(80, '°C','Celsius', '2023-12-09 10:02:00', 2),  -- CPU
(80, '°C','Celsius', '2023-12-09 10:04:00', 2),  -- CPU
(50, '°C','Celsius', '2023-10-09 10:00:00', 3),  -- CPU
(90, '°C','Celsius', '2023-11-09 10:01:00', 3),  -- CPU
(80, '°C','Celsius', '2023-12-09 10:02:00', 3),  -- CPU
(80, '°C','Celsius', '2023-12-09 10:03:00', 3),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(10,'%','Uso RAM', '2023-10-09 10:00:00', 2),  -- RAM
(10,'%','Uso RAM', '2023-10-09 10:00:00', 2),  -- RAM
(10,'%','Uso RAM', '2023-10-09 10:00:00', 2),  -- RAM
(329.415816,'Mb','Enviados Rede', '2023-10-09 10:30:00', 5),  -- REDE
(1998.433296,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 5),  -- REDE
(1328.632464,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 5),  -- REDE
(85.42277900366695, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 5), -- REDE
(330.548499,'Mb','Enviados Rede', '2023-10-09 10:30:00', 5),  -- REDE
(2004.8182029999998,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 5),  -- REDE
(1332.9576005,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 5),  -- REDE
(85.42994977827041, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 5), -- REDE
(330.586587,'Mb','Enviados Rede', '2023-10-09 10:30:00', 5),  -- REDE
(2004.9851039999999,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 5),  -- REDE
(1333.079139,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 5),  -- REDE
(1328.632464,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 5),  -- REDE
(85.43925798563782, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 5), -- REDE
(330.548499,'Mb','Enviados Rede', '2023-10-09 10:30:00', 5),  -- REDE
(2004.8182029999998,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 5),  -- REDE
(1332.9576005,'Mbps','Taxa de tranferência', '2023-10-09 10:30:00', 5),  -- REDE
(85.25846318978412, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 5), -- REDE
(40, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1); -- CPU

insert into chamadoServidor(descricao,dtHoraChamado,fkComponente) values 
("CPU","2023-03-12 10:00:00", 1 ),
("CPU","2023-03-12 10:00:00", 2 ),
("CPU","2023-03-12 10:00:00", 3 ),
("CPU","2023-03-12 11:00:00", 1 ),
("CPU","2023-03-12 11:00:00", 2 ),
("CPU","2023-03-12 11:00:00", 3 ),
("CPU","2023-04-12 11:00:00", 3 );


-- INSERT INTO processosBanidos VALUES (null, 'chrome.exe', 12);

-- select * from registro where idRegistro > 156;

-- Para exibir os dados no dash da Ana Fonseca e do Renan Almeida
SELECT * FROM servidor join empresa on fkEmpresa = idEmpresa join componente on fkServidor = idServidor WHERE fkEmpresa = 10004;