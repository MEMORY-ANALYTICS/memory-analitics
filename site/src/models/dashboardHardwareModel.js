// const db = require('../config/db');
var database = require("../database/config");

function getServidor() {
var email = "anafonseca@email.com";
instrucaoSql = `select idServidor,apelidoServidor,macAdress,idEmpresa from servidor join empresa on fkEmpresa = idEmpresa 
    where idEmpresa = (select idEmpresa from empresa join  funcionario on fkEmpresa = idEmpresa where emailFunc = '${email}');`;
return database.executar(instrucaoSql);
}

function getCpu(fkServidor) {
var instrucaoSql = `SELECT TOP 10
c.fkServidor, 
r.idRegistro,
r.valorRegistro AS usoCpu,
r.tipoMedida,
FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
FROM registro r
JOIN componente c ON r.fkComponente = c.idComponente
WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso'
ORDER BY r.idRegistro DESC;`;
return database.executar(instrucaoSql);
}

function getRam(fkServidor) {
var instrucaoSql = `SELECT TOP 10
        c.fkServidor, 
        r.idRegistro,
        r.valorRegistro AS usoRam,
        r.tipoMedida,
        FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
        FROM registro r
        JOIN componente c ON r.fkComponente = c.idComponente
        WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM' AND r.tipoMedida = '% de Uso'
        ORDER BY r.idRegistro DESC;`;
return database.executar(instrucaoSql);
}

function getDisco(fkServidor) {
var instrucaoSql = `SELECT TOP 10 
        c.fkServidor,
        r.idRegistro, 
        r.valorRegistro AS usoDisco,
        r.tipoMedida,
        FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
        FROM registro r
        JOIN componente c ON r.fkComponente = c.idComponente
        WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'Disco' AND r.tipoMedida = '% de Uso'
        ORDER BY r.idRegistro DESC;`;
return database.executar(instrucaoSql);
}

function getMaxCpu(fkServidor) {
    var instrucaoSql = 
    `SELECT
    c.fkServidor,
    MAX(r.valorRegistro) AS maxUsoCpu,
    MAX(r.tipoMedida) AS tipoMedida,
    FORMAT(MAX(r.dtHoraRegistro), 'dd-MM-yyyy') AS dataHoraRegistro
FROM
    registro r
JOIN
    componente c ON r.fkComponente = c.idComponente
WHERE
    c.fkServidor = ${fkServidor}
    AND r.tipoMedida = '% de Uso'
    AND c.tipoComponente = 'CPU'
GROUP BY
    c.fkServidor,
    CONVERT(DATE, r.dtHoraRegistro);`;
    return database.executar(instrucaoSql);
    }

function getMaxRam(fkServidor) {
var instrucaoSql = 
`SELECT
c.fkServidor,
MAX(r.valorRegistro) AS maxUsoRam,
MAX(r.tipoMedida) AS tipoMedida,
FORMAT(MAX(r.dtHoraRegistro), 'dd-MM-yyyy') AS dataHoraRegistro
FROM
registro r
JOIN
componente c ON r.fkComponente = c.idComponente
WHERE
c.fkServidor = ${fkServidor}
AND r.tipoMedida = '% de Uso'
AND c.tipoComponente = 'RAM'
GROUP BY
c.fkServidor,
CONVERT(DATE, r.dtHoraRegistro);`;
return database.executar(instrucaoSql);
}

function getMaxDisco(fkServidor) {
    var instrucaoSql = 
    `SELECT
    c.fkServidor,
    MAX(r.valorRegistro) AS maxUsoDisco,
    MAX(r.tipoMedida) AS tipoMedida,
    FORMAT(MAX(r.dtHoraRegistro), 'dd-MM-yyyy') AS dataHoraRegistro
FROM
    registro r
JOIN
    componente c ON r.fkComponente = c.idComponente
WHERE
    c.fkServidor = ${fkServidor}
    AND r.tipoMedida = '% de Uso'
    AND c.tipoComponente = 'DISCO'
GROUP BY
    c.fkServidor,
    CONVERT(DATE, r.dtHoraRegistro);`;
    return database.executar(instrucaoSql);
    }

function getUsoMes(fkServidor) {
var instrucaoSql = `WITH UsoMensal AS (
        SELECT
            c.fkServidor,
            r.tipoMedida,
            DATEPART(MONTH, r.dtHoraRegistro) AS Mes,
            MAX(r.valorRegistro) AS MaxUso
        FROM
            registro r
        JOIN
            componente c ON r.fkComponente = c.idComponente
        WHERE
            c.fkServidor = ${fkServidor}
            AND c.tipoComponente IN ('CPU', 'RAM', 'Disco')
            AND r.tipoMedida = '% de Uso'
        GROUP BY
            c.fkServidor, r.tipoMedida, DATEPART(MONTH, r.dtHoraRegistro)
    )
    SELECT
        fkServidor,
        Mes,
        MAX(CASE WHEN tipoMedida = 'CPU' THEN MaxUso END) AS MaxUsoCpu,
        MAX(CASE WHEN tipoMedida = 'RAM' THEN MaxUso END) AS MaxUsoRam,
        MAX(CASE WHEN tipoMedida = 'Disco' THEN MaxUso END) AS MaxUsoDisco
    FROM
        UsoMensal
    GROUP BY
        fkServidor, Mes;
    `;
return database.executar(instrucaoSql);
}

function getUsoMes(fkServidor) {
    var instrucaoSql = `WITH UsoMensal AS (
            SELECT
                c.fkServidor,
                r.tipoMedida,
                DATEPART(MONTH, r.dtHoraRegistro) AS Mes,
                MAX(r.valorRegistro) AS MaxUso
            FROM
                registro r
            JOIN
                componente c ON r.fkComponente = c.idComponente
            WHERE
                c.fkServidor = ${fkServidor}
                AND c.tipoComponente IN ('CPU', 'RAM', 'Disco')
                AND r.tipoMedida = '% de Uso'
            GROUP BY
                c.fkServidor, r.tipoMedida, DATEPART(MONTH, r.dtHoraRegistro)
        )
        SELECT
            fkServidor,
            Mes,
            MAX(CASE WHEN tipoMedida = 'CPU' THEN MaxUso END) AS MaxUsoCpu,
            MAX(CASE WHEN tipoMedida = 'RAM' THEN MaxUso END) AS MaxUsoRam,
            MAX(CASE WHEN tipoMedida = 'Disco' THEN MaxUso END) AS MaxUsoDisco
        FROM
            UsoMensal
        GROUP BY
            fkServidor, Mes;
        `;
    return database.executar(instrucaoSql);
    }

function getUltimoCpu(fkEmpresa) {
    var instrucaoSql = `
    SELECT TOP 1
    c.fkServidor, 
    r.idRegistro,
    r.valorRegistro AS usoCpu,
    r.tipoMedida,
    FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
    FROM registro r
    JOIN componente c ON r.fkComponente = c.idComponente
    WHERE c.fkServidor = ${fkEmpresa} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso' 
    ORDER BY r.idRegistro DESC;`;
    return database.executar(instrucaoSql);
}

function getUltimoRam(fkEmpresa) {
    var instrucaoSql = `
    SELECT TOP 1
    c.fkServidor, 
    r.idRegistro,
    r.valorRegistro AS usoRam,
    r.tipoMedida,
    FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
    FROM registro r
    JOIN componente c ON r.fkComponente = c.idComponente
    WHERE c.fkServidor = ${fkEmpresa} AND c.tipoComponente = 'RAM' AND r.tipoMedida = '% de Uso' 
    ORDER BY r.idRegistro DESC;`;
    return database.executar(instrucaoSql);
}

function getUltimoDisco(fkEmpresa) {
    var instrucaoSql = `
    SELECT TOP 1
    c.fkServidor, 
    r.idRegistro,
    r.valorRegistro AS usoDisco,
    r.tipoMedida,
    FORMAT(r.dtHoraRegistro , 'dd-MM-yyyy HH:mm') as dtHoraRegistro
    FROM registro r
    JOIN componente c ON r.fkComponente = c.idComponente
    WHERE c.fkServidor = ${fkEmpresa} AND c.tipoComponente = 'DISCO' AND r.tipoMedida = '% de Uso' 
    ORDER BY r.idRegistro DESC;`;
    return database.executar(instrucaoSql);
}
    

module.exports = {
getServidor,
getCpu,
getRam,
getDisco,
getUsoMes,
getMaxCpu,
getMaxRam,
getMaxDisco,
getUltimoCpu,
getUltimoRam,
getUltimoDisco
};
