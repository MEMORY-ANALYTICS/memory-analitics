use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Selects interresantes -=-=-=-=-=-=-=-=-=-=-=

select idRegistro, valorRegistro, unidadeMedida, tipoRecurso, tipoComponente, fkServidor FROM registro 
left join medidaComponente on fkMedidaComponente = idMedidaComponente
left join recurso on fkRecurso = idRecurso
left join componente on fkComponente = idComponente
left join servidor on fkServidor = idServidor
where idMedidaComponente = 1;

    SELECT valorRegistro, fkEmpresa, limiteMin, limiteMax, idServidor,
		CASE
			WHEN rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin THEN 3
			WHEN (rg.valorRegistro > c.limiteMax * 0.85 AND rg.valorRegistro < c.limiteMax) OR (rg.valorRegistro < c.limiteMin * 1.15 AND rg.valorRegistro > c.limiteMin) THEN 2
			WHEN  rg.valorRegistro < c.limiteMax * 0.85 OR rg.valorRegistro > c.limiteMin * 1.15 THEN 1
        END AS Estado
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
        WHERE idMedidaComponente = 1;
        
        CREATE VIEW viewAlertasCriticos AS     
SELECT idRegistro, idServidor, valorRegistro, fkEmpresa 
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
    WHERE 
        (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin)
        AND idMedidaComponente = 1;

SELECT count(idRegistro), fkEmpresa 
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
    WHERE 
        (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin)
        AND idMedidaComponente = 1
        GROUP BY fkEmpresa;

select * from funcionario;
select * from login;
select * from Empresa;
select * from servidor;
select * from downtimeServidor;
select * from componente;
select * from registro;
select * from medidacomponente;

#insert into registro values
#(null, 90, '2023-11-10 11:25:25', 6, 1);

#insert into registro values
#(null, 5, '2023-11-10 11:25:25', 25, 1);


  
#### DOWNTIME ####

CREATE OR REPLACE VIEW getTempoDowntime AS SELECT sum(tempoDowntime) tempoDowntime, fkEmpresa
FROM downtimeServidor 
JOIN servidor on fkServidor = idServidor
GROUP BY fkEmpresa;

SELECT tempoDowntime FROM getTempoDowntime WHERE fkEmpresa = 10002;

#### COMPONENTE PROBLEMATICO ####
    
create or replace view getCompProblematico as select tipoComponente as nomeComponente, count(idRegistro), fkEmpresa from registro r 
	left join componente c on r.fkComponente = c.idComponente
	left join servidor s on c.fkServidor = s.idServidor
where 
	(r.valorRegistro > c.limiteMax or r.valorRegistro < c.limiteMin)
	and tipoMedida = '%'
group by tipoComponente, fkEmpresa
order by count(idRegistro)
desc limit 1;

# SELECT nomeComponente FROM getCompProblematico WHERE fkEmpresa = ${fkEmpresa};
SELECT nomeComponente FROM getCompProblematico WHERE fkEmpresa = 10000;


#### CHAMADOS ABERTOS ####

CREATE OR REPLACE VIEW qtdPicosDeUso AS SELECT count(idRegistro), fkEmpresa 
    FROM registro r
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
    WHERE 
        (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
        AND tipoMedida = '%'
        GROUP BY fkEmpresa;

SELECT SUM(ExcedeuLimites) qtdPicosDeUso FROM limitesExcedidos WHERE idEmpresa = 10000;
# SELECT SUM(ExcedeuLimites) qtdPicosDeUso FROM limitesExcedidos WHERE idEmpresa = ${fkServidor};
  
#### QUANTIDADE SERVIDORES INSTAVEIS ####

CREATE OR REPLACE VIEW getServCriticos AS SELECT COUNT(*) AS qtdServCriticos, fkEmpresa
FROM (
    SELECT idServidor, fkEmpresa 
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
    WHERE 
        (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin)
        AND idMedidaComponente = 1
    GROUP BY idServidor
) AS subqueryAlias
GROUP BY fkEmpresa;

    SELECT idRegistro, idServidor, valorRegistro, fkEmpresa 
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
    WHERE 
        (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin)
        AND idMedidaComponente = 1;

# SELECT qtdServCriticos FROM getServCriticos WHERE fkEmpresa = ${fkEmpresa};
SELECT qtdServCriticos FROM getServCriticos WHERE fkEmpresa = 10002;



#### GERAL SERVIDORES ####
        
        create or replace view qtdRegistrosEstado as SELECT idServidor, 
		CASE
			WHEN r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin THEN 3
			WHEN (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax) OR (r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin) THEN 2
			WHEN  r.valorRegistro < c.limiteMax * 0.85 OR r.valorRegistro > c.limiteMin * 1.15 THEN 1
        END AS Estado, fkEmpresa
    FROM registro r
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        WHERE tipoMedida = '%'
        GROUP BY Estado, idServidor;


SELECT count(estado) AS qtdServers, Estado FROM 
(SELECT max(Estado) AS estado FROM qtdRegistrosEstado WHERE fkEmpresa = 10002 GROUP BY idServidor) 
AS selectQtdEstadoServers 
GROUP BY estado ORDER BY Estado;
/*
SELECT count(estado) AS qtdServers, Estado FROM 
(SELECT max(Estado) AS estado FROM qtdRegistrosEstado WHERE fkEmpresa = ${fkEmpresa} GROUP BY idServidor) 
AS selectQtdEstadoServers 
GROUP BY estado;
*/

# GRAFICO PICO DE USO

CREATE OR REPLACE VIEW limitesExcedidos AS SELECT 
    e.idEmpresa, idServidor,
    DATE_FORMAT(r.dtHoraRegistro, '%d') AS Dia,
    DATE_FORMAT(r.dtHoraRegistro, '%m') AS Mes,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN componente c ON r.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
WHERE tipoMedida = '%'
AND dtHoraRegistro >= DATE_SUB(now(), INTERVAL 1 MONTH)
GROUP BY NomeEmpresa, Dia, Mes, TipoComponente, idServidor
ORDER BY NomeEmpresa, Dia, Mes, TipoComponente, idServidor;

SELECT SUM(ExcedeuLimites) picosDeUso, Dia, Mes FROM limitesExcedidos WHERE idEmpresa = 10002 GROUP BY Dia, Mes;
SELECT SUM(ExcedeuLimites) qtdPicosDeUso FROM limitesExcedidos WHERE idEmpresa = 10002;
# SELECT SUM(ExcedeuLimites) picosDeUso, Dia, Mes FROM limitesExcedidos WHERE idEmpresa = ${fkEmpresa} GROUP BY Dia, Mes;

select SUM(ExcedeuLimites) picosDeUso, Dia, Mes, idServidor from limitesexcedidos group by Dia, Mes, idServidor;

SELECT 
    e.idEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%m-%d') AS MesDia,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE e.idEmpresa = 10002
AND idMedidaComponente = 1
GROUP BY NomeEmpresa, MesDia, TipoComponente
ORDER BY NomeEmpresa, MesDia, TipoComponente;


SELECT idRegistro, MONTH(dtHoraRegistro), fkEmpresa, idServidor FROM registro rg
JOIN recurso rc ON fkRecurso = idRecurso
JOIN componente c ON fkComponente = idComponente
JOIN servidor s ON fkServidor = idServidor
JOIN medidaComponente ON fkMedidaComponente = idMedidaComponente
WHERE 
	rg.valorRegistro > limiteMax || rg.valorRegistro < limiteMin
	AND	idMedidaComponente = 1;
    
SELECT idServidor, fkEmpresa FROM registro rg
JOIN recurso rc ON fkRecurso = idRecurso
JOIN componente c ON fkComponente = idComponente
JOIN servidor s ON fkServidor = idServidor
JOIN medidaComponente ON fkMedidaComponente = idMedidaComponente
WHERE 
	(rg.valorRegistro > limiteMax || rg.valorRegistro < limiteMin)
	AND	idMedidaComponente = 1
    AND fkEmpresa = 10002
    GROUP BY idServidor;
    
    


-- select * from medidaComponente;
-- INSERT INTO medidaComponente (tipoMedida, unidadeMedida) VALUES
-- ('Porcentagem Uso', '%'),  					-- 1
-- ('Armazenamento Total', 'GB'),				-- 2
-- ('Armazenamento Disponível', 'GB'),			-- 3
-- ('Armazenamento Usado', 'GB'),				-- 4
-- ('Frequência Atual', 'MHz'),				-- 5
-- ('Frequência Máxima', 'MHz'),				-- 6
-- ('Frequência Mínima', 'MHz'),				-- 7
-- ('Transferência Enviados','Mbps'),			-- 8
-- ('Transferência Recebidos','Mbps'),			-- 9
-- ('Quantidade Virtuais','Int'),				-- 10
-- ('Quantidade Físicas','Int'),				-- 11
-- ('Quantidade Erros Entrada','Int'),	-- 12
-- ('Quantidade Erros na Saída','Int'),		-- 13
-- ('Tempo', 's'),								-- 14
-- ('Temperatura', '°C');						-- 15

-- INSERT INTO recurso (tipoRecurso, fkComponente) VALUES
-- ('Total CPU', 1),
-- ('Frequência CPU', 1),
-- ('Temperatura CPU', 1),
-- ('Uso RAM', 2),
-- ('Enviados Rede', 4),
-- ('Recebidos Rede', 4);

-- INSERT INTO registro (valorRegistro, tipoMedida, dtHoraRegistro, fkRecurso) VALUES
-- (2200, 'Mhz', '2023-10-09 10:00:00', 2),  -- CPU
-- (2200, 'Mhz', '2023-10-09 10:00:00', 2),  -- CPU
-- (2200, 'Mhz', '2023-10-09 10:00:00', 2),  -- CPU
-- (2200, 'Mhz', '2023-10-09 10:00:00', 2),  -- CPU
-- (10,'%', '2023-10-09 10:00:00', 4),  -- RAM
-- (10,'%', '2023-10-09 10:00:00', 4),  -- RAM
-- (10,'%', '2023-10-09 10:00:00', 4),  -- RAM
-- (50034,'Bytes', '2023-10-09 10:30:00', 5),  -- REDE
-- (53098,'Bytes', '2023-10-09 10:30:00', 6);  -- REDE
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
