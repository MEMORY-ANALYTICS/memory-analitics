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
('Windows', 'Servidor D', '192.168.1.7', 'SERV421', 10001),
('Windows', 'Servidor E', '192.168.1.5', 'SERV623', 10001),
('Windows', 'Servidor F', '192.168.1.6', 'SERV151', 10001),
('Windows', 'Servidor G', '192.168.1.9', 'SERV985', 10001);

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
('TPLink','NP3200','REDE','1','1000',4),
('Intel', 'Xeon', 'CPU', '2000','4000',5),
('Corsair', 'Vengeance', 'RAM', '0','16',5), 
('WD', 'Black', 'DISCO', '0','500',5), 
('TPLink','NP3200','REDE','1','1000',5),
('Intel', 'Xeon', 'CPU', '2000','4000',6),
('Corsair', 'Vengeance', 'RAM', '0','16',6), 
('WD', 'Black', 'DISCO', '0','500',6), 
('TPLink','NP3200','REDE','1','1000',6),
('Intel', 'Xeon', 'CPU', '2000','4000',7),
('Corsair', 'Vengeance', 'RAM', '0','16',7), 
('WD', 'Black', 'DISCO', '0','500',7), 
('TPLink','NP3200','REDE','1','1000',7);

-- Inserir dados na tabela 'subComponente'
INSERT INTO recurso (tipoRecurso, fkComponente) VALUES
('Core 1', 1),
('Core 2', 1),
('Core 3', 1),
('Core 4', 1),
('Leitura RAM', 2),
('DISCO 1', 3),
('DISCO 2', 3),
('DISCO 3', 3),
('Leitura REDE', 4),

('Core 1', 5),
('Core 2', 5),
('Core 3', 5),
('Core 4', 5),
('Leitura RAM', 6),
('DISCO 1', 7),
('DISCO 2', 7),
('DISCO 3', 7),
('Leitura REDE', 8),

('Core 1', 9),
('Core 2', 9),
('Core 3', 9),
('Core 4', 9),
('Leitura RAM', 10),
('DISCO 1', 11),
('DISCO 2', 11),
('DISCO 3', 11),
('Leitura REDE', 12),

('Core 1', 13),
('Core 2', 13),
('Core 3', 13),
('Core 4', 13),
('Leitura RAM', 14),
('DISCO 1', 15),
('DISCO 2', 15),
('DISCO 3', 15),
('Leitura REDE', 16),

('Core 1', 17),
('Core 2', 17),
('Core 3', 17),
('Core 4', 17),
('Leitura RAM', 18),
('DISCO 1', 19),
('DISCO 2', 19),
('DISCO 3', 19),
('Leitura REDE', 20),

('Core 1', 21),
('Core 2', 21),
('Core 3', 21),
('Core 4', 21),
('Leitura RAM', 22),
('DISCO 1', 23),
('DISCO 2', 23),
('DISCO 3', 23),
('Leitura REDE', 24),

('Core 1', 25),
('Core 2', 25),
('Core 3', 25),
('Core 4', 25),
('Leitura RAM', 26),
('DISCO 1', 27),
('DISCO 2', 27),
('DISCO 3', 27),
('Leitura REDE', 28);

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
(2200, '2023-10-09 10:00:00', 1, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 2, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 3, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 4, 2),  -- CPU

(10, '2023-10-09 10:00:00', 1, 3),  -- CPU
(10, '2023-10-09 10:00:00', 2, 3),  -- CPU
(10, '2023-10-09 10:00:00', 3, 3),  -- CPU
(10, '2023-10-09 10:00:00', 4, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-10-09 10:30:00', 5, 1),  -- RAM
(50, '2023-10-09 10:30:00', 5, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-10-09 10:30:00', 6, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 7, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 8, 1),  -- DISCO
(50, '2023-10-09 10:30:00', 6, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 7, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 8, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-10-09 10:30:00', 9, 4),  -- REDE
(50, '2023-10-09 10:30:00', 9, 3),  -- REDE


(2200, '2023-10-09 10:00:00', 10, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 11, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 12, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 13, 2),  -- CPU

(10, '2023-10-09 10:00:00', 10, 3),  -- CPU
(10, '2023-10-09 10:00:00', 11, 3),  -- CPU
(10, '2023-10-09 10:00:00', 12, 3),  -- CPU
(10, '2023-10-09 10:00:00', 13, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-10-09 10:30:00', 14, 1),  -- RAM
(50, '2023-10-09 10:30:00', 14, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-10-09 10:30:00', 15, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 16, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 17, 1),  -- DISCO
(50, '2023-10-09 10:30:00', 15, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 16, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 17, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-10-09 10:30:00', 18, 4),  -- REDE
(50, '2023-10-09 10:30:00', 18, 3),  -- REDE


(2200, '2023-10-09 10:00:00', 19, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 20, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 21, 2),  -- CPU
(2200, '2023-10-09 10:00:00', 22, 2),  -- CPU

(10, '2023-10-09 10:00:00', 19, 3),  -- CPU
(10, '2023-10-09 10:00:00', 20, 3),  -- CPU
(10, '2023-10-09 10:00:00', 21, 3),  -- CPU
(10, '2023-10-09 10:00:00', 22, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-10-09 10:30:00', 23, 1),  -- RAM
(50, '2023-10-09 10:30:00', 23, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-10-09 10:30:00', 24, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 25, 1),  -- DISCO
(250, '2023-10-09 10:30:00', 26, 1),  -- DISCO
(50, '2023-10-09 10:30:00', 24, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 25, 3),  -- DISCO
(50, '2023-10-09 10:30:00', 26, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-10-09 10:30:00', 27, 4),  -- REDE
(50, '2023-10-09 10:30:00', 27, 3),  -- REDE


(2200, '2023-09-09 10:00:00', 28, 2),  -- CPU
(2200, '2023-09-09 10:00:00', 29, 2),  -- CPU
(2200, '2023-09-09 10:00:00', 30, 2),  -- CPU
(2200, '2023-09-09 10:00:00', 31, 2),  -- CPU

(10, '2023-09-09 10:00:00', 28, 3),  -- CPU
(10, '2023-09-09 10:00:00', 29, 3),  -- CPU
(10, '2023-09-09 10:00:00', 30, 3),  -- CPU
(10, '2023-09-09 10:00:00', 31, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-09-09 10:30:00', 32, 1),  -- RAM
(50, '2023-09-09 10:30:00', 32, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-09-09 10:30:00', 33, 1),  -- DISCO
(250, '2023-09-09 10:30:00', 34, 1),  -- DISCO
(250, '2023-09-09 10:30:00', 35, 1),  -- DISCO
(50, '2023-09-09 10:30:00', 33, 3),  -- DISCO
(50, '2023-09-09 10:30:00', 34, 3),  -- DISCO
(50, '2023-09-09 10:30:00', 35, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-09-09 10:30:00', 36, 4),  -- REDE
(50, '2023-09-09 10:30:00', 36, 3),  -- REDE


(2200, '2023-08-09 10:00:00', 37, 2),  -- CPU
(2200, '2023-08-09 10:00:00', 38, 2),  -- CPU
(2200, '2023-08-09 10:00:00', 39, 2),  -- CPU
(2200, '2023-08-09 10:00:00', 40, 2),  -- CPU

(10, '2023-08-09 10:00:00', 37, 3),  -- CPU
(10, '2023-08-09 10:00:00', 38, 3),  -- CPU
(10, '2023-08-09 10:00:00', 39, 3),  -- CPU
(10, '2023-08-09 10:00:00', 40, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-08-09 10:30:00', 41, 1),  -- RAM
(50, '2023-08-09 10:30:00', 41, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-08-09 10:30:00', 42, 1),  -- DISCO
(250, '2023-08-09 10:30:00', 43, 1),  -- DISCO
(250, '2023-08-09 10:30:00', 44, 1),  -- DISCO
(50, '2023-08-09 10:30:00', 42, 3),  -- DISCO
(50, '2023-08-09 10:30:00', 43, 3),  -- DISCO
(50, '2023-08-09 10:30:00', 44, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-08-09 10:30:00', 45, 4),  -- REDE
(50, '2023-08-09 10:30:00', 45, 3),  -- REDE


(2200, '2023-07-09 10:00:00', 46, 2),  -- CPU
(2200, '2023-07-09 10:00:00', 47, 2),  -- CPU
(2200, '2023-07-09 10:00:00', 48, 2),  -- CPU
(2200, '2023-07-09 10:00:00', 49, 2),  -- CPU

(10, '2023-07-09 10:00:00', 46, 3),  -- CPU
(22, '2023-07-09 10:00:00', 47, 3),  -- CPU
(5, '2023-07-09 10:00:00', 48, 3),  -- CPU
(10, '2023-07-09 10:00:00', 49, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-07-09 10:30:00', 50, 1),  -- RAM
(50, '2023-07-09 10:30:00', 50, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-07-09 10:30:00', 51, 1),  -- DISCO
(700, '2023-07-09 10:30:00', 52, 1),  -- DISCO
(250, '2023-07-09 10:30:00', 53, 1),  -- DISCO
(50, '2023-07-09 10:30:00', 51, 3),  -- DISCO
(50, '2023-07-09 10:30:00', 52, 3),  -- DISCO
(50, '2023-07-09 10:30:00', 53, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-07-09 10:30:00', 54, 4),  -- REDE
(50, '2023-07-09 10:30:00', 54, 3),  -- REDE


(5000, '2023-06-09 10:00:00', 55, 2),  -- CPU
(1100, '2023-06-09 10:00:00', 56, 2),  -- CPU
(2700, '2023-06-09 10:00:00', 57, 2),  -- CPU
(3100, '2023-06-09 10:00:00', 58, 2),  -- CPU

(10, '2023-06-09 10:00:00', 55, 3),  -- CPU
(10, '2023-06-09 10:00:00', 56, 3),  -- CPU
(10, '2023-06-09 10:00:00', 57, 3),  -- CPU
(10, '2023-06-09 10:00:00', 58, 3),  -- CPU
-- ------------------------------------------------
(8, '2023-06-09 10:30:00', 59, 1),  -- RAM
(50, '2023-06-09 10:30:00', 59, 3),  -- RAM
-- ------------------------------------------------
(250, '2023-06-09 10:30:00', 60, 1),  -- DISCO
(250, '2023-06-09 10:30:00', 61, 1),  -- DISCO
(250, '2023-06-09 10:30:00', 62, 1),  -- DISCO
(50, '2023-06-09 10:30:00', 60, 3),  -- DISCO
(50, '2023-06-09 10:30:00', 61, 3),  -- DISCO
(50, '2023-06-09 10:30:00', 62, 3),  -- DISCO
-- ------------------------------------------------
(500, '2023-06-09 10:30:00', 63, 4),  -- REDE
(50, '2023-06-09 10:30:00', 36, 3);  -- REDE

select * from funcionario;
select * from login;
select * from Empresa;
select * from servidor;
select * from componente;
select * from recurso;
select * from registro;
select * from medidacomponente;

# SERVIDORES INSTAVEIS

CREATE OR REPLACE VIEW getServInstaveis as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServInstaveis
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
WHERE (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
GROUP BY e.nomeEmpresa;

SELECT * FROM getServInstaveis where nomeEmpresa;

SELECT idFuncionario, nomeFunc, emailFunc, telefoneFunc, fkCargo, fkEmpresa, nomeEmpresa FROM funcionario
	JOIN empresa ON fkEmpresa = idEmpresa join login on idFuncionario = fkFuncionario 
  WHERE email = 'joao@email.com' AND senha = 'senha123';

# GERAL SERVIDORES

CREATE OR REPLACE VIEW getServAlertas as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServAlertas
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
WHERE (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax OR r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin)
GROUP BY e.nomeEmpresa;

SELECT * FROM getServAlertas;

CREATE OR REPLACE VIEW getServSeguros as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServSeguros
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
WHERE (r.valorRegistro < c.limiteMax * 0.85 AND r.valorRegistro > c.limiteMin * 1.15)
GROUP BY e.nomeEmpresa;

SELECT * FROM getServSeguros;

CREATE OR REPLACE VIEW getEstadoGeralServ AS SELECT S.nomeEmpresa, qtdServSeguros, qtdServAlertas, qtdServInstaveis FROM getServSeguros S 
JOIN getServAlertas A 
JOIN getServInstaveis I 
WHERE S.nomeEmpresa = A.nomeEmpresa 
AND S.nomeEmpresa = I.nomeEmpresa 
AND A.nomeEmpresa = I.nomeEmpresa;

SELECT * FROM getEstadoGeralServ WHERE nomeEmpresa = "Empresa C";


# COMPONENTE PROBLEMATICO

SELECT c.tipoComponente AS nomeComponente, COUNT(*) AS total_registros_excedidos
FROM componente c
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN registro r ON c.idComponente = r.fkRecurso
WHERE e.idEmpresa = 10001 
    AND (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
GROUP BY c.tipoComponente
ORDER BY total_registros_excedidos DESC limit 1;

create or replace view getCompProblematico as select tipoComponente, count(tipoComponente) from registro rg 
join recurso r on rg.fkRecurso = r.idRecurso 
join componente c on r.fkComponente = c.idComponente
join servidor s on c.fkServidor = s.idServidor
join medidacomponente m on rg.fkMedidaComponente = m.idMedidaComponente 
where (rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin) and fkMedidaComponente = 1 and fkEmpresa = 10002 group by tipoComponente order by count(tipoComponente) desc limit 1;

SELECT tipoComponente AS nomeComponente, count(tipoComponente) FROM registro rg 
	JOIN recurso r ON rg.fkRecurso = r.idRecurso 
	JOIN componente c ON r.fkComponente = c.idComponente
	JOIN servidor s ON c.fkServidor = s.idServidor
	JOIN medidacomponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
WHERE fkEmpresa = 10002 
GROUP BY tipoComponente 
ORDER BY count(tipoComponente);

SELECT tipoComponente AS nomeComponente, count(tipoComponente) FROM registro rg 
	JOIN recurso r ON rg.fkRecurso = r.idRecurso 
	JOIN componente c ON r.fkComponente = c.idComponente
	JOIN servidor s ON c.fkServidor = s.idServidor
	JOIN medidacomponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
WHERE (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin) 
	AND fkMedidaComponente = 1 
	AND fkEmpresa = 10002 
GROUP BY tipoComponente 
ORDER BY count(tipoComponente) 
DESC LIMIT 1;


select * from getCompProblematico where fkEmpresa = 10002;

select * from registro;
truncate registro;

select sum from registro rg 
join recurso r on rg.fkRecurso = r.idRecurso 
join componente c on r.fkComponente = c.idComponente
join servidor s on c.fkServidor = s.idServidor 
where rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin group by tipoComponente;

where rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin;

select * from componente;

SELECT tipoComponente
FROM componente
WHERE idComponente = (
    SELECT c.idComponente
    FROM componente c
    INNER JOIN registro r ON c.idComponente = r.fkComponente
    WHERE r.valorRegistro > c.limiteMin OR r.valorRegistro > c.limiteMax
    GROUP BY c.idComponente
    ORDER BY COUNT(*) DESC
    LIMIT 1
);


# GRAFICO PICO DE USO

Error Code: 1055. Expression #2 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'bd_memoryanalytics.c.fkServidor' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by	0.015 sec


CREATE OR REPLACE VIEW limitesExcedidos AS SELECT 
    e.nomeEmpresa AS NomeEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%Y-%m') AS MesAno,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
WHERE e.nomeEmpresa = 'Empresa B'
GROUP BY NomeEmpresa, MesAno, TipoComponente
ORDER BY NomeEmpresa, MesAno, TipoComponente;

SELECT 
    e.nomeEmpresa AS NomeEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%Y-%m') AS MesAno,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
WHERE e.nomeEmpresa = 'nomeEmpresa'
GROUP BY NomeEmpresa, MesAno, TipoComponente
ORDER BY NomeEmpresa, MesAno, TipoComponente;

SELECT SUM(ExcedeuLimites) picosDeUso FROM limitesExcedidos WHERE NomeEmpresa = 'Empresa B' GROUP BY MesAno ORDER BY MesAno LIMIT 5;

create table testeeee 
(id int primary key,
valor int);

insert into testeeee values
(1, 53),
(2, 32),
(3, 11),
(4, 87);

select * from testeeee order by valor;