-- Inserir dados na tabela 'empresa'
USE bd_memoryanalytics;
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Empresa A', '12345678901234', 'empresaA@gmail.com', '1122334455'),
('Empresa B', '56789012345678', 'empresaB@gmail.com', '2233445566'),
('Empresa C', '90123456789012', 'empresaC@gmail.com', '3344556677'),
('Empresa D', '90123456789012', 'empresaD@gmail.com', '3344556677'),
('U Contact', '10293847561184', 'ucontact@gmail.com', '119480165714');

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


INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('Gustavo Desunte', 'gustavo@email.com', '11122233344', 'A', 10000, 1, NULL),
('Adrino Marquês', 'adriano@email.com', '22233344455', 'A', 10000, 2, 100),
('Gabriel Branco', 'gabriel@email.com', '33344455566', 'B', 10000, 3, 100),
('Daniel', 'daniel@email.com', '44455566677', 'C', 10000, 3, NULL),
('Raphael Klein', 'raphael@email.com', '55566677788', 'A', 10000,1,NULL),		
('Alexandra Harumi', 'alexandra@email.com', '66677788899', 'A', 10000,1,NULL);

select * from funcionario;

INSERT INTO login (email, senha, fkFuncionario) VALUES
('gustavo@email.com', 'senha123', 100),
('adriano@email.com', 'senha456', 101),
('gabriel@email.com', 'senha789', 102),
('daniel@email.com', 'senhaDaniel', 103),
('raphael@email.com','senha101', 104),
('alexandra@email.com','senha110', 105);

INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, macAdress, fkEmpresa) VALUES
('Windows', 'rapha', 'd0-94-66-c6-bf-02', 10000),
('Windows', 'adriano', '30:24:a9:fb:e1:1b', 10000),
('Windows', 'danie', '192.168.1.3', 10000),
('Windows', 'mined', '192.168.1.4', 10000),
('Linux', 'ale123', '00:45:e2:dd:d6:45', 10000),
('Windows', 'gabbranco', '192.168.1.7', 10000),
('Linux', 'ale321', '98:2c:bc:a3:63:12', 10000);

-- Inserir dados na tabela 'componente'
INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 1), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 1), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 1), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 1); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 2), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 2), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 2), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 2); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 3), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 3), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 3), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 3); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 4), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 4), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 4), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 4); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 5), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 5), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 5), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 5); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 6), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 6), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 6), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 6); -- REDE

INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', 2, 10, 7), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 7), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 7), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 7); -- REDE

-- Select * from servidor;


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
(329.415816,'Mb','Enviados Rede', '2023-10-09 10:30:00', 6),  -- REDE
(1998.433296,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 6),  -- REDE
(1328.632464,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 6),  -- REDE
(85.42277900366695, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 6), -- REDE
(330.548499,'Mb','Enviados Rede', '2023-10-09 10:30:00', 6),  -- REDE
(2004.8182029999998,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 6),  -- REDE
(1332.9576005,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 6),  -- REDE
(85.42994977827041, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 6), -- REDE
(330.586587,'Mb','Enviados Rede', '2023-10-09 10:30:00', 6),  -- REDE
(2004.9851039999999,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 6),  -- REDE
(1333.079139,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 6),  -- REDE
(1328.632464,'Mbps','Taxa de Transmissão', '2023-10-09 10:30:00', 6),  -- REDE
(85.43925798563782, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 6), -- REDE
(330.548499,'Mb','Enviados Rede', '2023-10-09 10:30:00', 6),  -- REDE
(2004.8182029999998,'Mb','Recebidos Rede', '2023-10-09 10:30:00', 6),  -- REDE
(1332.9576005,'Mbps','Taxa de tranferência', '2023-10-09 10:30:00', 6),  -- REDE
(85.25846318978412, 'ms', 'Latência da Rede', '2023-10-09 10:30:00', 6), -- REDE
(40, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1),  -- CPU
(2200, 'Mhz','Frequência CPU', '2023-10-09 10:00:00', 1); -- CPU


INSERT INTO processosBanidos (nomeProcesso, fkServidor) VALUES ('chrome.exe', 12);