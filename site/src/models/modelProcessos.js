var database = require("../database/config");

function buscarMedidasEmTempoReal(fkServer) {
    instrucaoSql = `select * from processos where fkServidor = ${fkServer}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function getAllProcessosBanidos(fkServer) {
    instrucaoSql = `select * from processosBanidos where fkServidor = ${fkServer}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarMedidasEmTempoReal,
    getAllProcessosBanidos
}
