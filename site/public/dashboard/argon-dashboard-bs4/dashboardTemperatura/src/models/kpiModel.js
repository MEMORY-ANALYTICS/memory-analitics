var database = require("../database/config")

      function MedTempIdeal() {
        instrucaoSql = `select avg(valorRegistro), dtHoraRegistro, apelidoServidor, nomeFunc from registroEmpresa 
        where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor B" and nomeFunc = "Maria"  
        group by dtHoraRegistro;`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function MedTempAtual() {
        instrucaoSql = `select apelidoServidor from registroEmpresa where emailFunc = "joao@email.com" group by apelidoServidor;`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CoreTempMax() {
        instrucaoSql = ` select valorRegistro, dtHoraRegistro, tipoRecurso from registroEmpresa 
        where valorRegistro = (
            select max(valorRegistro) from registroEmpresa 
            where unidadeMedida = "%" and tipoComponente = "CPU" and apelidoServidor= "Servidor B" order by dtHoraRegistro) limit 1;
    `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CoreTempMin() {
        instrucaoSql = ` select valorRegistro, dtHoraRegistro, tipoRecurso from registroEmpresa 
        where valorRegistro = (
            select min(valorRegistro) from registroEmpresa 
            where unidadeMedida = "%" and tipoComponente = "CPU" and apelidoServidor= "Servidor B" order by dtHoraRegistro) limit 1;            
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
    module.exports = {
        MedTempAtual,
        MedTempIdeal,
        CoreTempMax,
        CoreTempMin
    }