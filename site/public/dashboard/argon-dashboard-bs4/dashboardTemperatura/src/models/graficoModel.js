var database = require("../database/config")

    function graficoCoreHora() {
  
        instrucaoSql = `select * from registro limit 5;`
      
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }
    module.exports = {
        graficoCoreHora
    }
