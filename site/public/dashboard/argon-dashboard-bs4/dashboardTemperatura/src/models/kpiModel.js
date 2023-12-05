var database = require("../database/config")

      function qtdIncidentes() {
        apelidoServidor = 'Servidor B'

        instrucaoSql = `
        select count(idChamadoServidor) as quantidade from chamadoServidor join componente on 
        fkComponente = idComponente join servidor on fkServidor = idServidor 
        where descricao like "CPU" and apelidoServidor = "${apelidoServidor}";

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
        qtdIncidentes,
        MedTemp,
        CpuTempMax,
        CpuTempMin
    }