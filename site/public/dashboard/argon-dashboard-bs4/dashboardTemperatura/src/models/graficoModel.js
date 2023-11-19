var database = require("../database/config")

function graficoCoreHora(){
    var instrucao = `SELECT * from registro'`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

    module.exports = {
        graficoCoreHora
    }
}