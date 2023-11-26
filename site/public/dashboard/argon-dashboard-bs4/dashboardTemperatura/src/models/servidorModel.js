var database = require("../database/config")

      function getServidor() {
        instrucaoSql = `select * from servidor limit 2;`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

    module.exports = {
        getServidor
    }