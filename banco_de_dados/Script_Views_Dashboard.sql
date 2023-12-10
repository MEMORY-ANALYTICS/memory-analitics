#### DOWNTIME ####

CREATE OR REPLACE VIEW getTempoDowntime AS SELECT sum(tempoDowntime) tempoDowntime, fkEmpresa
FROM downtimeServidor 
JOIN servidor on fkServidor = idServidor
GROUP BY fkEmpresa;

SELECT tempoDowntime FROM getTempoDowntime WHERE fkEmpresa = 10000;

#### COMPONENTE PROBLEMATICO ####
    
create or replace view getCompProblematico as select tipoComponente as nomeComponente, count(idRegistro), fkEmpresa from registro r 
	left join componente c on r.fkComponente = c.idComponente
	left join servidor s on c.fkServidor = s.idServidor
where 
	(r.valorRegistro > c.limiteMax or r.valorRegistro < c.limiteMin)
	and tipoMedida like '%%%'
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
        AND tipoMedida like '%%%'
        GROUP BY fkEmpresa;

SELECT SUM(ExcedeuLimites) qtdPicosDeUso FROM limitesExcedidos WHERE idEmpresa = 10000;
# SELECT SUM(ExcedeuLimites) qtdPicosDeUso FROM limitesExcedidos WHERE idEmpresa = ${fkServidor};
  
#### QUANTIDADE SERVIDORES INSTAVEIS ####

CREATE OR REPLACE VIEW getServCriticos AS SELECT COUNT(*) AS qtdServCriticos, fkEmpresa
FROM (
    SELECT idServidor, fkEmpresa 
    FROM registro r
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
    WHERE 
        (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
        AND tipoMedida like '%%%'
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
        
        CREATE OR REPLACE VIEW qtdRegistrosEstado as SELECT idServidor, 
		CASE
			WHEN r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin THEN 3
			WHEN (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax) OR (r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin) THEN 2
			WHEN  r.valorRegistro < c.limiteMax * 0.85 OR r.valorRegistro > c.limiteMin * 1.15 THEN 1
        END AS Estado, fkEmpresa
    FROM registro r
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        WHERE tipoMedida like '%%%'
        GROUP BY Estado, idServidor;


SELECT count(estado) AS qtdServers, Estado FROM 
(SELECT max(Estado) AS estado FROM qtdRegistrosEstado WHERE fkEmpresa = 10005 GROUP BY idServidor) 
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
WHERE tipoMedida like '%%%'
AND dtHoraRegistro >= DATE_SUB(now(), INTERVAL 1 MONTH)
GROUP BY NomeEmpresa, Dia, Mes, TipoComponente, idServidor
ORDER BY NomeEmpresa, Dia, Mes, TipoComponente, idServidor;

SELECT SUM(ExcedeuLimites) picosDeUso, Dia, Mes FROM limitesExcedidos WHERE idEmpresa = 10000 GROUP BY Dia, Mes;
# SELECT SUM(ExcedeuLimites) picosDeUso, Dia, Mes FROM limitesExcedidos WHERE idEmpresa = ${fkEmpresa} GROUP BY Dia, Mes;
    
-- -------------------------------------------------------------------------------------------------------------------------------
SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor;

SELECT fabricante, nomeModelo,tipoComponente,limiteMin,limiteMax,idServidor,apelidoServidor FROM componente JOIN servidor 
ON fkServidor = idServidor WHERE fkEmpresa = 10001;

SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'REDE';

-- -------------------------------------------------------------------------------------------------------------------------------