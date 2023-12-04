var database = require("../database/config")

      function getServidor() {
        email = 'anafonseca@email.com'
        instrucaoSql = `
        select apelidoServidor,macAdress from servidor join empresa on fkEmpresa = idEmpresa 
        where idEmpresa = (select idEmpresa from empresa join  funcionario on fkEmpresa = idEmpresa where emailFunc = "${email}");
       `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

      function getLocal() {
        apelidoServidor = 'Servidor B'
        instrucaoSql = `
        select localServidor as local from servidor where apelidoServidor = "${apelidoServidor}";

        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

    module.exports = {
        getServidor,
        getLocal
    }