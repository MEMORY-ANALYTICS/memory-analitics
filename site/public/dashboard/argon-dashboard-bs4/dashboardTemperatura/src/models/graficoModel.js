var database = require("../database/config")

    function graficoCoreHora() {
  
        instrucaoSql = `select * from registro limit 1;`
      
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }

      function graficoCoreSemana() {
  
        instrucaoSql = `select * from registro limit 2;`
      
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  

    module.exports = {
        graficoCoreHora,
        graficoCoreSemana
    }
