var database = require("../database/config")

      function MedTempIdeal() {
        dataHora = '2023-10-09'

        instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = 8 order by valorRegistro desc limit 1;
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function MedTemp() {
        dataHora = '2023-10-09'
        fkServidor = 8

        instrucaoSql = `select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
        where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = ${fkServidor} order by valorRegistro desc  limit 1;
      `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CpuTempMax() {
        dataHora = '2023-10-09'
        fkServidor = 8

        instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and ${fkServidor} order by valorRegistro desc limit 1;
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CpuTempMin() {
        dataHora = '2023-10-09'
        fkServidor = 8

        instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and ${fkServidor} order by valorRegistro limit 1;
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
    module.exports = {
        MedTemp,
        MedTempIdeal,
        CpuTempMax,
        CpuTempMin
    }