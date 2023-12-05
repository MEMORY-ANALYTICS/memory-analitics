// const db = require('../config/db');
var database = require('../database/config')

function getServidor() {
    var email = 'anafonseca@email.com'
    instrucaoSql =
    `select apelidoServidor,macAdress,idEmpresa from servidor join empresa on fkEmpresa = idEmpresa 
    where idEmpresa = (select idEmpresa from empresa join  funcionario on fkEmpresa = idEmpresa where emailFunc = "${email}");`
    return database.executar(instrucaoSql);
}

function getCpu(fkServidor) {
    var intrucaoSql =
    `SELECT c.fkServidor, 
    r.valorRegistro AS usoCpu,
    r.tipoMedida,
    r.dtHoraRegistro
    FROM registro r
    JOIN componente c ON r.fkComponente = c.idComponente
    WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
    return database.executar(instrucaoSql);
}

module.exports = {
    getServidor,
    getCpu
}
