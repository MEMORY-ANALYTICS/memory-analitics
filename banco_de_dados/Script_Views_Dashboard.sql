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
        

select * from funcionario;
select * from login;
select * from Empresa;
select * from servidor;
select * from downtimeServidor;
select * from componente;
select * from recurso;
select * from registro;
select * from medidacomponente;

#insert into registro values
#(null, 90, '2023-11-10 11:25:25', 6, 1);

#insert into registro values
#(null, 5, '2023-11-10 11:25:25', 25, 1);


insert into recurso (tipoRecurso, fkComponente) values
('CPU', 21),
('Core 1', 21),
('Core 2', 21),
('Core 3', 21),
('Core 4', 21),
('Leitura Ram 1', 22),
('Disco', 23),
('Leitura Rede', 24);


  
#### DOWNTIME ####

SELECT * FROM downtimeServidor;
  

#### COMPONENTE PROBLEMATICO ####
    
create or replace view getCompProblematico as select tipoComponente as nomeComponente, count(idRegistro), fkEmpresa from registro rg 
	left join recurso r on rg.fkRecurso = r.idRecurso 
	left join componente c on r.fkComponente = c.idComponente
	left join servidor s on c.fkServidor = s.idServidor
	left join medidaComponente on fkMedidaComponente = idMedidaComponente 
where 
	(rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin)
	and idMedidaComponente = 1
group by tipoComponente, fkEmpresa
order by count(idRegistro)
desc limit 1;

# SELECT nomeComponente FROM getCompProblematico WHERE fkEmpresa = ${fkEmpresa};
SELECT nomeComponente FROM getCompProblematico WHERE fkEmpresa = 10002;

  
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
			WHEN rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin THEN 3
			WHEN (rg.valorRegistro > c.limiteMax * 0.85 AND rg.valorRegistro < c.limiteMax) OR (rg.valorRegistro < c.limiteMin * 1.15 AND rg.valorRegistro > c.limiteMin) THEN 2
			WHEN  rg.valorRegistro < c.limiteMax * 0.85 OR rg.valorRegistro > c.limiteMin * 1.15 THEN 1
        END AS Estado, fkEmpresa
    FROM registro rg 
        LEFT JOIN recurso r ON rg.fkRecurso = r.idRecurso 
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
        LEFT JOIN medidaComponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
        WHERE idMedidaComponente = 1
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
    e.idEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%d-%m') AS DiaMes,
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
AND dtHoraRegistro >= DATE_SUB(now(), INTERVAL 1 MONTH)
GROUP BY NomeEmpresa, DiaMes, TipoComponente
ORDER BY NomeEmpresa, DiaMes, TipoComponente;

SELECT SUM(ExcedeuLimites) picosDeUso, DiaMes FROM limitesExcedidos WHERE idEmpresa = 10002 GROUP BY DiaMes;

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
    
    

-- Dash Gabriel Branco --
select * from servidor;
select * from registro;

-- kpi 1
select * from servidor where fkEmpresa = 10002;

-- kpi 2 
select round(avg(valorRegistro),2), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;

-- kpi 3
select max(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;

-- kpi 4
select min(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;