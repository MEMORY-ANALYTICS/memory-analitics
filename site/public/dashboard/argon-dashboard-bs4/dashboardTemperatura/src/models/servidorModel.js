var database = require("../database/config")

      function getServidor() {
        email = 'anafonseca@email.com'
        instrucaoSql = `
        select apelidoServidor from registroEmpresa 
        where emailFunc = "${email}" group by apelidoServidor;`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

    module.exports = {
        getServidor
    }