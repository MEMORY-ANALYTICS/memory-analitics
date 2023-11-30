-- Inserir dados na tabela 'empresa'
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Empresa A', '12345678901234', 'empresaA@gmail.com', '1122334455'),
('Empresa B', '56789012345678', 'empresaB@gmail.com', '2233445566'),
('Empresa C', '90123456789012', 'empresaC@gmail.com', '3344556677'),
('Empresa D', '90123456789012', 'empresaD@gmail.com', '3344556677');

-- Inserir dados na tabela 'endereco'
INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES
('12345678', 'Rua A', 123, 'Cidade A', 'Estado A', 10000),
('23456789', 'Rua B', 456, 'Cidade B', 'Estado B', 10001),
('34567890', 'Rua C', 789, 'Cidade C', 'Estado C', 10002),
('51462073', 'Rua D', 66, 'Cidade D', 'Estado D', 10003);

-- Inserir dados na tabela 'cargo'
INSERT INTO cargo (nomeCargo) VALUES
('Gerente'),
('Analista'),
('Técnico');


INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('Gustavo Desunte', 'gustavo@email.com', '11122233344', 'A', 10000, 1, NULL),
('Adrino Marquês', 'adriano@email.com', '22233344455', 'A', 10001, 2, 100000),
('Gabriel Branco', 'gabriel@email.com', '33344455566', 'B', 10002, 3, 100000),
('Daniel', 'daniel@email.com', '44455566677', 'C', 10002, 3, NULL);


INSERT INTO login (email, senha, fkFuncionario) VALUES
('gustavo@email.com', 'senha123', 100000),
('adriano@email.com', 'senha456', 100001),
('gabriel@email.com', 'senha789', 100002),
('daniel@email.com', 'senhaDaniel', 100003);


INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, macAdress, numeroSerieServidor, fkEmpresa) VALUES
('Linux', 'rapha', '192.168.1.1', 'SERV123', 10000),
('Windows', 'Servidor B', '192.168.1.2', 'SERV456', 10001),
('Linux', 'danie', '192.168.1.3', 'SERV789', 10002),
('Linux', 'mined', '192.168.1.4', 'SERV789', 10002),
('Linux', 'Servidor C', '192.168.1.3', 'SERV789', 10002),
('Windows', 'Servidor D', '192.168.1.7', 'SERV421', 10002),
('Windows', 'Servidor E', '192.168.1.5', 'SERV623', 10002);

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

-- Inserir dados na tabela 'medidaComponente'
INSERT INTO medidaComponente (tipoMedida, unidadeMedida) VALUES
('Porcentagem Uso', '%'),                   -- 1
('Armazenamento Total', 'GB'),              -- 2
('Armazenamento Disponível', 'GB'),         -- 3
('Armazenamento Usado', 'GB'),				-- 4
('Frequência Atual', 'MHz'),				-- 5
('Frequência Máxima', 'MHz'),				-- 6
('Frequência Mínima', 'MHz'),				-- 7
('Enviados','Bytes'),		                -- 8
('Recebidos','Bytes'),		                -- 9
('Quantidade Virtuais','Int'),				-- 10
('Quantidade Físicas','Int'),				-- 11
('Quantidade Erros Entrada','Int'),     	-- 12
('Quantidade Erros na Saída','Int'),		-- 13
('Tempo', 's'),								-- 14
('Temperatura', '°C');                      -- 15

-- Inserir dados na tabela 'recurso'
INSERT INTO recurso (tipoRecurso, fkComponente) VALUES
('Core 1', 1),
('Core 2', 1),
('Core 3', 1),
('Core 4', 1),
('Core 1', 5),
('Core 2', 5),
('Core 3', 5),
('Core 4', 5),
('Core 1', 9),
('Core 2', 9),
('Core 3', 9),
('Core 4', 9),
('Leitura RAM', 2),
('Leitura RAM', 6),
('Leitura RAM', 10),
('Partição DISCO 1', 3),
('Partição DISCO 2', 3),
('Partição DISCO 3', 3),
('Partição DISCO 1', 7),
('Partição DISCO 2', 7),
('Partição DISCO 3', 7),
('Partição DISCO 1', 11),
('Partição DISCO 2', 11),
('Partição DISCO 3', 11),
('Leitura REDE', 4),
('Leitura REDE', 8),
('Leitura REDE', 12);

-- Inserir dados na tabela 'registro'
INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
(2200, '2023-10-09 10:00:00', 5, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 6, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 7, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 8, 2),  -- CPU
(10, '2023-10-09 10:00:00', 5, 3),  -- CPU
(10, '2023-10-09 10:00:00', 6, 3),  -- CPU
(10, '2023-10-09 10:00:00', 7, 3),  -- CPU
(500, '2023-10-09 10:30:00', 26, 4),  -- REDE
(50, '2023-10-09 10:30:00', 26, 3);  -- REDE
