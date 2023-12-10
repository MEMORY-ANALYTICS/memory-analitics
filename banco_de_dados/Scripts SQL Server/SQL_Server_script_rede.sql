SELECT MAX(valorRegistro) AS valorLatenciaMax, CONVERT(TIME, dtHoraRegistro) AS horaRegistro FROM registro WHERE 
 fkComponente = 6 
 AND tipoMedida = 'ms' 
 AND CONVERT(DATE, dtHoraRegistro) = '2023-12-09'
GROUP BY CONVERT(TIME, dtHoraRegistro)
ORDER BY valorLatenciaMax DESC 
OFFSET 0 ROWS 
FETCH NEXT 1 ROWS ONLY;

SELECT MIN(valorRegistro) AS valorVelocidadeMin, CONVERT(TIME, dtHoraRegistro) AS horaRegistro 
FROM registro 
WHERE 
    fkComponente = 6 
    AND tipoMedida = 'MBps' 
    AND CONVERT(DATE, dtHoraRegistro) = '2023-12-09'
GROUP BY CONVERT(TIME, dtHoraRegistro)
ORDER BY valorVelocidadeMin ASC
OFFSET 0 ROWS 
FETCH NEXT 1 ROWS ONLY;

SELECT TOP 1 AVG(valorRegistro) AS mediaDodia
FROM registro
WHERE fkComponente = 6 
    AND CONVERT(DATE, dtHoraRegistro) = '2023-12-09' 
    AND tipoMedida = 'Pacotes';