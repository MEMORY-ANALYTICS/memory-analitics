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
('Linux', 'Servidor C', '192.168.1.3', 'SERV789', 10002);

-- Inserir dados na tabela 'componente'
INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) VALUES
('Intel', 'Xeon', 'CPU', '2000','4000',1),
('Corsair', 'Vengeance', 'RAM', '0','16',1), 
('WD', 'Black', 'DISCO', '0','500',1), 
('TPLink','NP3200','REDE','1','1000',1),
('Intel', 'Xeon', 'CPU', '2000','4000',2),
('Corsair', 'Vengeance', 'RAM', '0','16',2), 
('WD', 'Black', 'DISCO', '0','500',2),
('TPLink','NP3200','REDE','1','1000',2), 
('Intel', 'Xeon', 'CPU', '2000','4000',3),
('Corsair', 'Vengeance', 'RAM', '0','16',3), 
('WD', 'Black', 'DISCO', '0','500',3), 
('TPLink','NP3200','REDE','1','1000',3);

-- Inserir dados na tabela 'subComponente'
INSERT INTO recurso (tipoRecurso, fkComponente) VALUES
('Core 1', 1),
('Core 2', 1),
('Core 3', 1),
('Core 4', 1),
('Core 1', 4),
('Core 2', 4),
('Core 3', 4),
('Core 4', 4),
('Core 1', 6),
('Core 2', 6),
('Core 3', 6),
('Core 4', 6),
('Leitura RAM', 2),
('Leitura RAM', 5),
('Leitura RAM', 8),
('Partição DISCO 1', 3),
('Partição DISCO 2', 3),
('Partição DISCO 3', 3),
('Partição DISCO 1', 6),
('Partição DISCO 2', 6),
('Partição DISCO 3', 6),
('Partição DISCO 1', 9),
('Partição DISCO 2', 9),
('Partição DISCO 3', 9),
('Leitura REDE', 4),
('Leitura REDE', 8),
('Leitura REDE', 12);

-- Inserir dados na tabela 'medidaComponente'
INSERT INTO medidaComponente (tipoMedida, unidadeMedida) VALUES
('Armazenamento', 'GB'),
('Frequência', 'MHz'),
('Porcentagem', '%'),
('Transferência','Mbps'),
('Quantidade','Int'),
('Velocidade', 's');

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


