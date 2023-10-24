use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Inserir dados na tabela 'empresa'
INSERT INTO empresa VALUES (1 , 'Memory Analytics','12345675601234', 'memoryAnalytics@gmail.com', '1122884455' );
INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) VALUES
('Empresa A', '12345678901234', 'empresaA@gmail.com', '1122334455'),
('Empresa B', '56789012345678', 'empresaB@gmail.com', '2233445566'),
('Empresa C', '90123456789012', 'empresaC@gmail.com', '3344556677');

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
INSERT INTO login (email, senha, fkFuncionario) VALUES
('joao@email.com', 'senha123', 100000),
('maria456', 'senha456', 100001),
('pedro789', 'senha789', 100002);

-- Inserir dados na tabela 'servidor'
INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor, fkEmpresa) VALUES
('Linux', 'rapha', '192.168.1.1', 'SERV123', 10000),
('Windows', 'Servidor B', '192.168.1.2', 'SERV456', 10001),
('Linux', 'Servidor C', '192.168.1.3', 'SERV789', 10002),
('Linux', 'Servidor D', '192.168.1.4', 'SERV789', 10002);

-- Inserir dados na tabela 'componente'
INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', '2000','4000',1), -- CPU
('Corsair', 'Vengeance', 'RAM', '0','16',1), -- RAM
('WD', 'Black', 'DISCO', '0','500',1), -- DISCO
('TPLink','NP3200','REDE','1','1000',1), -- REDE
('Intel', 'Xeon', 'CPU', '2000','4000',2),
('Corsair', 'Vengeance', 'RAM', '0','16',2), 
('WD', 'Black', 'DISCO', '0','500',2),
('TPLink','NP3200','REDE','1','1000',2), 
('Intel', 'Xeon', 'CPU', '2000','4000',3),
('Corsair', 'Vengeance', 'RAM', '0','16',3), 
('WD', 'Black', 'DISCO', '0','500',3), 
('TPLink','NP3200','REDE','1','1000',3),
('Intel', 'Xeon', 'CPU', '2000','4000',4),
('Corsair', 'Vengeance', 'RAM', '0','16',4), 
('WD', 'Black', 'DISCO', '0','500',4), 
('TPLink','NP3200','REDE','1','1000',4);

-- Inserir dados na tabela 'subComponente'
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

select * from componente;
Select * from recurso;
-- Inserir dados na tabela 'medidaComponente'
select * from medidaComponente;
INSERT INTO medidaComponente (tipoMedida, unidadeMedida) VALUES
('Porcentagem Uso', '%'),  					-- 1
('Armazenamento Total', 'GB'),				-- 2
('Armazenamento Disponível', 'GB'),			-- 3
('Armazenamento Usado', 'GB'),				-- 4
('Frequência Atual', 'MHz'),				-- 5
('Frequência Máxima', 'MHz'),				-- 6
('Frequência Mínima', 'MHz'),				-- 7
('Transferência Enviados','Mbps'),			-- 8
('Transferência Recebidos','Mbps'),			-- 9
('Quantidade Virtuais','Int'),				-- 10
('Quantidade Físicas','Int'),				-- 11
('Quantidade Erros Entrada','Int'),	-- 12
('Quantidade Erros na Saída','Int'),		-- 13
('Tempo', 's'),								-- 14
('Temperatura', '°C');						-- 15

-- Inserir dados na tabela 'registro'
INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
(2200, '2023-10-09 10:00:00', 5, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 6, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 7, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 8, 2),  -- CPU

(10, '2023-10-09 10:00:00', 5, 3),  -- CPU
(10, '2023-10-09 10:00:00', 6, 3),  -- CPU
(10, '2023-10-09 10:00:00', 7, 3),  -- CPU
(10, '2023-10-09 10:00:00', 8, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-10-09 10:30:00', 14, 1),  -- RAM
(50, '2023-10-09 10:30:00', 14, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-10-09 10:30:00', 19, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 20, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 21, 1),  -- DISCO
(50, '2023-10-09 10:30:00', 19, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 20, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 21, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-10-09 10:30:00', 26, 4),  -- REDE
(50, '2023-10-09 10:30:00', 26, 3);  -- REDE

select * from recurso;
select * from componente;
select * from empresa;

select * from registro;

SELECT fabricante, nomeModelo,tipoComponente,limiteMin,limiteMax,idServidor,apelidoServidor FROM componente JOIN servidor ON fkServidor = idServidor WHERE fkEmpresa = 10001;

SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'RAM';

SELECT * from registro;