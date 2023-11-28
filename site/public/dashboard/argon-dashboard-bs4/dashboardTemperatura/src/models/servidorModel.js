var database = require("../database/config")

      function getServidor() {
        instrucaoSql = `select apelidoServidor from registroEmpresa where emailFunc = "joao@email.com" group by apelidoServidor;`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

    module.exports = {
        getServidor
    }