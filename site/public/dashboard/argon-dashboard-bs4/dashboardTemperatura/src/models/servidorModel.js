var database = require("../database/config")

      function getServidor() {
        email = 'anafonseca@email.com'
        instrucaoSql = `
        select apelidoServidor,macAdress from servidor join empresa on fkEmpresa = idEmpresa 
        where idEmpresa = (select idEmpresa from empresa join funcionario on fkEmpresa = idEmpresa 
          where emailFunc = '${email}' and SistemaOperacionalServidor = 'Linux');
       `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

  
    module.exports = {
        getServidor
    }