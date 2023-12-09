use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Inserir dados na tabela 'empresa'
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Memory Analytics','12345675601234', 'memoryAnalytics@gmail.com', '1122884455' ), -- 10000
('Empresa A', '12345678901234', 'empresaA@gmail.com', '1122334455'), -- 10001
('Empresa B', '56789012345678', 'empresaB@gmail.com', '2233445566'), -- 10002
('Empresa C', '90123456789012', 'empresaC@gmail.com', '3344556677'), -- 10003
('Empresa D', '90123456789012', 'empresaD@gmail.com', '3344556677'), -- 10004
('U Contact', '10293847561184', 'ucontact@gmail.com', '119480165714'); -- 10005

-- Inserir dados na tabela 'endereco'
INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES
('12345678', 'Rua A', 123, 'Cidade A', 'Estado A', 10000),
('23456789', 'Rua B', 456, 'Cidade B', 'Estado B', 10001),
('34567890', 'Rua C', 789, 'Cidade C', 'Estado C', 10002),
('51462073', 'Rua D', 066, 'Cidade D', 'Estado D', 10003),
('51462063', 'Rua E', 078, 'São Paulo', 'Estado SP', 10004);

-- Inserir dados na tabela 'cargo'
INSERT INTO cargo (nomeCargo) VALUES
('Gerente'),
('Analista'),
('Técnico');


-- Inserir dados na tabela 'funcionario'
INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('Gustavo Desunte', 'gustavo@email.com', '11122233344', 'A', 10000, 1, NULL),
('Adrino Marquês', 'adriano@email.com', '22233344455', 'A', 10000, 2, 100),
('Gabriel Branco', 'gabriel@email.com', '33344455566', 'B', 10000, 3, 100),
('Daniel', 'daniel@email.com', '44455566677', 'C', 10000, 3, NULL),
('Rafael Almeida', 'rafael.almeida@email.com','11092942094', 'A', 10005, 1, null),
('Ana Fonseca', 'anafonseca@email.com', '12938402039', 'C', 10005, 2, 104),
('Roberto Marques', 'robertoMarques@email.com', '12939802039', 'C', 10005, 2, 104);

-- Inserir dados na tabela 'login'
INSERT INTO login (email, senha, fkFuncionario) VALUES
('gustavo@email.com', 'senha123', 100),
('adriano@email.com', 'senha456', 101),
('gabriel@email.com', 'senha789', 102),
('daniel@email.com', 'senhaDaniel', 103),
('rafael.almeida@email.com', 'rafa123', 104),
('anafonseca@email.com','ana123',105),
('robertoMarques@email.com','roberto123',106);


-- Inserir dados na tabela 'servidor'
INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, localServidor,  macAdress, fkEmpresa) VALUES
('Linux', 'rapha', 'Rio de Janeiro', '00:11:B1:RB:ES0:88', 10005), -- 1
('Windows', 'ale123', 'São Paulo', '00:45:e2:dd:d6:45', 10005), -- 2
('Linux', 'daniel', 'São Paulo', 'e2:2e:0b:67:0e:12', 10005), -- 3
('Windows', 'mined', 'São Paulo', '11:11:B1:RB:E1:88', 10005), -- 4
('Linux', 'ale321', 'Rio de Janeiro', '98:2c:bc:a3:63:12', 10005), -- 5
('Windows', 'Servidor D', 'Rio de Janeiro', '00:11:B1:RB:E1:90', 10000), -- 6
('Windows', 'Servidor E', 'China', '00:11:B1:RB:E1:88', 10000), -- 7
('Windows', 'Servidor A', 'Carolina do Norte', '00:11:B1:RB:E1:88', 10000), -- 8
('Windows', 'Servidor B', 'São Paulo', '09:12:C4:TN:O9:X2', 10000), -- 9
('Linux', 'Servidor C', 'Moscou', '44:09:N3:SN:O7:99', 10000); -- 10


-- Inserir dados na tabela 'componente'
INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 4), -- CPU -> 1
('Intel', 'Xeon', 'CPU', 2, 10, 9), -- CPU -> 2
('Intel', 'Xeon', 'CPU', 2, 10, 10), -- CPU -> 3
('Corsair', 'Vengeance', 'RAM', 15, 85, 4), -- RAM -> 4
('WD', 'Black', 'DISCO', 1, 70 , 4), -- DISCO -> 5
('TPLink','NP3200','REDE', 10, 85, 2), -- REDE -> 6
('TPLink','NP3200','REDE', 10, 85, 5), -- REDE -> 7
('Intel', 'Xeon', 'CPU', 2, 10, 1), -- CPU -> 8
('Intel', 'Xeon', 'CPU', 2, 10, 2), -- CPU -> 9
('Intel', 'Xeon', 'CPU', 2, 10, 3), -- CPU -> 10
('Intel', 'Xeon', 'CPU', 2, 10, 5), -- CPU -> 11
('Intel', 'Xeon', 'CPU', 2, 10, 6), -- CPU -> 12
('Intel', 'Xeon', 'CPU', 2, 10, 7), -- CPU -> 13
('Intel', 'Xeon', 'CPU', 2, 10, 8), -- CPU -> 14
('Corsair', 'Vengeance', 'RAM', 15, 85, 1), -- RAM -> 15
('Corsair', 'Vengeance', 'RAM', 15, 85, 2), -- RAM -> 16
('Corsair', 'Vengeance', 'RAM', 15, 85, 3), -- RAM -> 17
('Corsair', 'Vengeance', 'RAM', 15, 85, 5), -- RAM -> 18
('Corsair', 'Vengeance', 'RAM', 15, 85, 6), -- RAM -> 19
('Corsair', 'Vengeance', 'RAM', 15, 85, 7), -- RAM -> 20
('Corsair', 'Vengeance', 'RAM', 15, 85, 8), -- RAM -> 21
('Corsair', 'Vengeance', 'RAM', 15, 85, 9), -- RAM -> 22
('Corsair', 'Vengeance', 'RAM', 15, 85, 10), -- RAM -> 23
('WD', 'Black', 'DISCO', 1, 70 , 1), -- DISCO -> 24
('WD', 'Black', 'DISCO', 1, 70 , 2), -- DISCO -> 25
('WD', 'Black', 'DISCO', 1, 70 , 3), -- DISCO -> 26
('WD', 'Black', 'DISCO', 1, 70 , 5), -- DISCO -> 27
('WD', 'Black', 'DISCO', 1, 70 , 6), -- DISCO -> 28
('WD', 'Black', 'DISCO', 1, 70 , 7), -- DISCO -> 29
('WD', 'Black', 'DISCO', 1, 70 , 8), -- DISCO -> 30
('WD', 'Black', 'DISCO', 1, 70 , 9), -- DISCO -> 31
('WD', 'Black', 'DISCO', 1, 70 , 10), -- DISCO -> 32
('TPLink','NP3200','REDE', 10, 85, 1), -- REDE -> 33
('TPLink','NP3200','REDE', 10, 85, 3), -- REDE -> 34
('TPLink','NP3200','REDE', 10, 85, 4), -- REDE -> 35
('TPLink','NP3200','REDE', 10, 85, 6), -- REDE -> 36
('TPLink','NP3200','REDE', 10, 85, 7), -- REDE -> 37
('TPLink','NP3200','REDE', 10, 85, 8), -- REDE ->38
('TPLink','NP3200','REDE', 10, 85, 9), -- REDE -> 39
('TPLink','NP3200','REDE', 10, 85, 10); -- REDE -> 40


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
(329.415816,'MB','Enviados Rede', '2023-12-09 10:30:00', 35),  -- REDE
(1998.433296,'MB','Recebidos Rede', '2023-12-09 10:30:00', 35),  -- REDE
(199.632464,'MBps','Taxa de Transmissão', '2023-12-09 10:30:00', 35),  -- REDE
(85.42277900366695, 'ms', 'Latência da Rede', '2023-12-09 10:30:00', 35), -- REDE
(330.548499,'MB','Enviados Rede', '2023-12-09 10:30:00', 35),  -- REDE
(2004.8182029999998,'MB','Recebidos Rede', '2023-12-09 10:30:00', 35),  -- REDE
(201.9576005,'MBps','Taxa de Transmissão', '2023-12-09 10:30:00', 35),  -- REDE
(85.42994977827041, 'ms', 'Latência da Rede', '2023-12-09 10:30:00', 35), -- REDE
(330.586587,'MB','Enviados Rede', '2023-12-09 10:30:00', 35),  -- REDE
(2004.9851039999999,'MB','Recebidos Rede', '2023-12-09 10:30:00', 35),  -- REDE
(200.079139,'MBps','Taxa de Transmissão', '2023-12-09 10:30:00', 35),  -- REDE
(200.632464,'MBps','Taxa de Transmissão', '2023-12-09 10:30:00', 35),  -- REDE
(85.43925798563782, 'ms', 'Latência da Rede', '2023-12-09 10:30:00', 35), -- REDE
(330.548499,'MB','Enviados Rede', '2023-12-09 10:30:00', 35),  -- REDE
(2004.8182029999998,'MB','Recebidos Rede', '2023-12-09 10:30:00', 35),  -- REDE
(201.9576005,'MBps','Taxa de Transmissão', '2023-12-09 10:30:00', 35),  -- REDE
(85.25846318978412, 'ms', 'Latência da Rede', '2023-12-09 10:30:00', 35), -- REDE
(40, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1); -- CPU

insert into chamadoServidor(descricao,dtHoraChamado,fkServidor) values 
("CPU","2023-03-12 10:00:00", 1 ),
("CPU","2023-03-12 10:00:00", 2 ),
("CPU","2023-03-12 10:00:00", 3 ),
("CPU","2023-03-12 11:00:00", 1 ),
("CPU","2023-03-12 11:00:00", 2 ),
("CPU","2023-03-12 11:00:00", 3 ),
("CPU","2023-04-12 11:00:00", 3 );


-- INSERT INTO processosBanidos VALUES (null, 'chrome.exe', 12);

-- select * from registro where idRegistro > 156;
select * from registro;
-- Para exibir os dados no dash da Ana Fonseca e do Renan Almeida
-- SELECT * FROM servidor join empresa on fkEmpresa = idEmpresa join componente on fkServidor = idServidor WHERE fkEmpresa = 10005;