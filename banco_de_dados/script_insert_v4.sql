use bd_memoryanalytics;

select * from funcionario;

SELECT idFuncionario, nomeFunc, emailFunc, telefoneFunc, fkCargo, fkEmpresa, nomeEmpresa FROM funcionario
        join login on idFuncionario = fkFuncionario JOIN empresa ON fkEmpresa = idEmpresa
  WHERE email = 'joao@email.com' AND senha = 'senha123';	

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Inserir dados na tabela 'empresa'
INSERT INTO empresa VALUES (1 , 'Memory Analytics','12345675601234', 'memoryAnalytics@gmail.com', '1122884455' );
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
('51462073', 'Rua D', 066, 'Cidade D', 'Estado D', 10003);

-- Inserir dados na tabela 'cargo'
INSERT INTO cargo (nomeCargo) VALUES
('Gerente'),
('Analista'),
('Técnico');

-- Inserir dados na tabela 'funcionario'
INSERT INTO funcionario (nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor) VALUES
('Gustavo Desunte', 'gustavo@email.com', '11122233344', 'A', 10000, 1, NULL),
('Adrino Marquês', 'adriano@email.com', '22233344455', 'A', 10001, 2, 100000),
('Gabriel Branco', 'gabriel@email.com', '33344455566', 'B', 10002, 3, 100000),
('Daniel', 'daniel@email.com', '44455566677', 'C', 10002, 3, NULL);

-- Inserir dados na tabela 'login'
INSERT INTO login (email, senha, fkFuncionario) VALUES
('gustavo@email.com', 'senha123', 100000),
('adriano@email.com', 'senha456', 100001),
('gabriel@email.com', 'senha789', 100002),
('daniel@email.com', 'senhaDaniel', 100003);

-- Inserir dados na tabela 'servidor'
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
('TPLink','NP3200','REDE', NULL, NULL, 1), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 2), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 2), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 2), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 2), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 3), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 3), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 3), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 3), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 4), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 4), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 4), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 4), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 5), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 5), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 5), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 5), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 6), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 6), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 6), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 6), -- REDE

('Intel', 'Xeon', 'CPU', 2, 10, 7), -- CPU
('Corsair', 'Vengeance', 'RAM', 15, 85, 7), -- RAM
('WD', 'Black', 'DISCO', 1, 70 , 7), -- DISCO
('TPLink','NP3200','REDE', NULL, NULL, 7); -- REDE

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

-- -------------------------------------------------------------------------------------------------------------------------------
SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor;

SELECT fabricante, nomeModelo,tipoComponente,limiteMin,limiteMax,idServidor,apelidoServidor FROM componente JOIN servidor 
ON fkServidor = idServidor WHERE fkEmpresa = 10001;

SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'REDE';

-- -------------------------------------------------------------------------------------------------------------------------------
CREATE VIEW teste AS
SELECT 
    r.dtHoraRegistro AS Data_Hora_Registro,
    r.fkRecurso,
    rc.tipoRecurso AS Tipo_Recurso,
    c.fabricante AS Fabricante_Componente,
    c.nomeModelo AS Modelo_Componente,
    s.apelidoServidor AS Apelido_Servidor,
    e.nomeEmpresa AS Nome_Empresa,
    MAX(CASE WHEN mc.tipoMedida = 'Porcentagem Uso' THEN r.valorRegistro END) AS Porcentagem_Uso,
    MAX(CASE WHEN mc.tipoMedida = 'Armazenamento Total' THEN r.valorRegistro END) AS Armazenamento_Total,
    MAX(CASE WHEN mc.tipoMedida = 'Armazenamento Disponível' THEN r.valorRegistro END) AS Armazenamento_Disponivel,
    MAX(CASE WHEN mc.tipoMedida = 'Armazenamento Usado' THEN r.valorRegistro END) AS Armazenamento_Usado,
    MAX(CASE WHEN mc.tipoMedida = 'Frequência Atual' THEN r.valorRegistro END) AS Frequencia_Atual,
    MAX(CASE WHEN mc.tipoMedida = 'Frequência Máxima' THEN r.valorRegistro END) AS Frequencia_Maxima,
    MAX(CASE WHEN mc.tipoMedida = 'Frequência Mínima' THEN r.valorRegistro END) AS Frequencia_Minima,
    MAX(CASE WHEN mc.tipoMedida = 'Transferência Enviados' THEN r.valorRegistro END) AS Transferencia_Enviados,
    MAX(CASE WHEN mc.tipoMedida = 'Transferência Recebidos' THEN r.valorRegistro END) AS Transferencia_Recebidos,
    MAX(CASE WHEN mc.tipoMedida = 'Quantidade Virtuais' THEN r.valorRegistro END) AS Quantidade_Virtuais,
    MAX(CASE WHEN mc.tipoMedida = 'Quantidade Físicas' THEN r.valorRegistro END) AS Quantidade_Fisicas,
    MAX(CASE WHEN mc.tipoMedida = 'Quantidade Erros Entrada' THEN r.valorRegistro END) AS Quantidade_Erros_Entrada,
    MAX(CASE WHEN mc.tipoMedida = 'Quantidade Erros na Saída' THEN r.valorRegistro END) AS Quantidade_Erros_Saida,
    MAX(CASE WHEN mc.tipoMedida = 'Tempo' THEN r.valorRegistro END) AS Tempo,
    MAX(CASE WHEN mc.tipoMedida = 'Temperatura' THEN r.valorRegistro END) AS Temperatura
FROM (
    SELECT r1.dtHoraRegistro, r1.fkRecurso
    FROM registro r1
    GROUP BY r1.dtHoraRegistro, r1.fkRecurso
) AS grouped
JOIN registro r ON grouped.dtHoraRegistro = r.dtHoraRegistro AND grouped.fkRecurso = r.fkRecurso
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN medidaComponente mc ON r.fkMedidaComponente = mc.idMedidaComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
GROUP BY
    r.dtHoraRegistro,
    r.fkRecurso,
    rc.tipoRecurso,
    c.fabricante,
    c.nomeModelo,
    s.apelidoServidor,
    e.nomeEmpresa;

select * from teste;

CREATE VIEW testeteste AS
SELECT 
    r.dtHoraRegistro AS Data_Hora_Registro,
    r.fkRecurso,
    rc.tipoRecurso AS Tipo_Recurso,
    c.fabricante AS Fabricante_Componente,
    c.nomeModelo AS Modelo_Componente,
    s.apelidoServidor AS Apelido_Servidor,
    e.nomeEmpresa AS Nome_Empresa,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Porcentagem Uso' THEN r.valorRegistro END), 0) AS Porcentagem_Uso,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Frequência Atual' THEN r.valorRegistro END), 0) AS Frequencia_Atual,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Frequência Máxima' THEN r.valorRegistro END), 0) AS Frequencia_Maxima,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Frequência Mínima' THEN r.valorRegistro END), 0) AS Frequencia_Minima,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Quantidade Virtuais' THEN r.valorRegistro END), 0) AS Quantidade_Virtuais,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Quantidade Físicas' THEN r.valorRegistro END), 0) AS Quantidade_Fisicas,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Armazenamento Total' THEN r.valorRegistro END), 0) AS Armazenamento_Total,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Armazenamento Disponível' THEN r.valorRegistro END), 0) AS Armazenamento_Disponivel,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Armazenamento Usado' THEN r.valorRegistro END), 0) AS Armazenamento_Usado,
	COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Transferência Enviados' THEN r.valorRegistro END), 0) AS Transferencia_Enviados,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Transferência Recebidos' THEN r.valorRegistro END), 0) AS Transferencia_Recebidos,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Quantidade Erros Entrada' THEN r.valorRegistro END), 0) AS Quantidade_Erros_Entrada,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Quantidade Erros na Saída' THEN r.valorRegistro END), 0) AS Quantidade_Erros_Saida,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Tempo' THEN r.valorRegistro END), 0) AS Tempo,
    COALESCE(SUM(CASE WHEN mc.tipoMedida = 'Temperatura' THEN r.valorRegistro END), 0) AS Temperatura
FROM (
    SELECT r1.dtHoraRegistro, r1.fkRecurso
    FROM registro r1
    GROUP BY r1.dtHoraRegistro, r1.fkRecurso
) AS grouped
JOIN registro r ON grouped.dtHoraRegistro = r.dtHoraRegistro AND grouped.fkRecurso = r.fkRecurso
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN medidaComponente mc ON r.fkMedidaComponente = mc.idMedidaComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
GROUP BY
    r.dtHoraRegistro,
    r.fkRecurso,
    rc.tipoRecurso,
    c.fabricante,
    c.nomeModelo,
    s.apelidoServidor,
    e.nomeEmpresa
ORDER BY Data_Hora_Registro;

    select * from testeteste;
    SELECT * FROM downtimeServidor;
    select sum(tempoDowntime) from downtimeServidor 
    JOIN servidor on fkServidor = idServidor WHERE fkEmpresa = 10002;
    
    
	CREATE OR REPLACE VIEW getTempoDowntime AS SELECT sum(tempoDowntime) tempoDowntime, fkEmpresa
    FROM downtimeServidor 
    JOIN servidor on fkServidor = idServidor
        GROUP BY fkEmpresa;
        
    
SELECT tempoDowntime FROM getTempoDowntime WHERE fkEmpresa = 10002;





select * from empresa;



# -------------------------------------------------------------------------------------------------
insert into empresa values(null, "U Contact", "10293847561184", "ucontact@gmail.com", "119480165714");

select * from funcionario;

insert into funcionario values (10007, "Rafael Almeida", "rafael.almeida@email.com","11092942094", 
	"A", 10005, 1, null);
 
insert into funcionario values(10008, "Ana Fonseca", "anafonseca@email.com", 
	"12938402039", "C", 10005, 2, 100007); 


select * from servidor;    
insert into servidor values (12, "Windows", "Servidor A", "Carolina do Norte", "00:11:B1:RB:E1:88", 10005);
insert into servidor values (13, "Windows", "Servidor B", "São Paulo", "09:12:C4:TN:O9:X2", 10005);
insert into servidor values (14, "Linux", "Servidor C", "Moscou", "44:09:N3:SN:O7:99", 10005);


select apelidoServidor, nomeEmpresa, nomeFunc from servidorEmpresa;
select * from servidorEmpresa;
    
    






select * from funcionario;





