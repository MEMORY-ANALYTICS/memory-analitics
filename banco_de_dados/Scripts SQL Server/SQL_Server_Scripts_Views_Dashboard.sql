CREATE OR ALTER VIEW getTempoDowntime AS 
SELECT SUM(ds.tempoDowntime) AS tempoDowntime, s.fkEmpresa
FROM downtimeServidor ds
JOIN servidor s ON ds.fkServidor = s.idServidor
GROUP BY s.fkEmpresa;

CREATE OR ALTER VIEW getCompProblematico AS 
SELECT 
    tipoComponente as nomeComponente,
    COUNT(idRegistro) as TotalRegistros,
    fkEmpresa
FROM 
    registro r
LEFT JOIN 
    componente c ON r.fkComponente = c.idComponente
LEFT JOIN 
    servidor s ON c.fkServidor = s.idServidor
WHERE 
    (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
    AND tipoMedida like '%%%'
GROUP BY 
    tipoComponente, fkEmpresa
ORDER BY 
    TotalRegistros DESC
OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;

CREATE OR ALTER VIEW limitesExcedidos AS 
SELECT 
    e.idEmpresa, 
    idServidor,
    FORMAT(r.dtHoraRegistro, 'dd') AS Dia,
    FORMAT(r.dtHoraRegistro, 'MM') AS Mes,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM 
    registro r
JOIN 
    componente c ON r.fkComponente = c.idComponente
JOIN 
    servidor s ON c.fkServidor = s.idServidor
JOIN 
    empresa e ON s.fkEmpresa = e.idEmpresa
WHERE 
    tipoMedida like '%%%'
    AND dtHoraRegistro >= DATEADD(MONTH, -1, GETDATE())
GROUP BY 
    e.idEmpresa, idServidor, FORMAT(r.dtHoraRegistro, 'dd'), FORMAT(r.dtHoraRegistro, 'MM'), c.tipoComponente;

CREATE OR ALTER VIEW getServCriticos AS 
SELECT COUNT(*) AS qtdServCriticos, fkEmpresa
FROM (
    SELECT idServidor, fkEmpresa 
    FROM registro r
        LEFT JOIN componente c ON r.fkComponente = c.idComponente
        LEFT JOIN servidor s ON c.fkServidor = s.idServidor
    WHERE 
        (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
        AND tipoMedida like '%%%'
    GROUP BY idServidor, fkEmpresa
) AS subqueryAlias
GROUP BY fkEmpresa;

CREATE OR ALTER VIEW qtdRegistrosEstado AS 
SELECT 
    idServidor, 
    CASE
        WHEN r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin THEN 3
        WHEN (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax) OR (r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin) THEN 2
        WHEN r.valorRegistro < c.limiteMax * 0.85 OR r.valorRegistro > c.limiteMin * 1.15 THEN 1
    END AS Estado, 
    fkEmpresa
FROM 
    registro r
LEFT JOIN 
    componente c ON r.fkComponente = c.idComponente
LEFT JOIN 
    servidor s ON c.fkServidor = s.idServidor
GROUP BY 
    idServidor, fkEmpresa, 
    CASE
        WHEN r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin THEN 3
        WHEN (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax) OR (r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin) THEN 2
        WHEN r.valorRegistro < c.limiteMax * 0.85 OR r.valorRegistro > c.limiteMin * 1.15 THEN 1
    END;