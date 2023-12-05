var database = require("../database/config")

function qtdIncidentes() {
  apelidoServidor = 'Servidor B'

  instrucaoSql = `
  select count(idChamadoServidor) as quantidade from chamadoServidor join componente on 
  fkComponente = idComponente join servidor on fkServidor = idServidor 
  where descricao like 'CPU' and apelidoServidor = '${apelidoServidor}';

  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}        
      function MedTemp() {
        dataHora = '2023-12-05'
        fkServidor = 8

        instrucaoSql = `select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
        where tipoMedida = '°C' and CONVERT(DATE,dtHoraRegistro) = '${dataHora}%' and fkServidor = ${fkServidor} 
        order by mediaTemperatura desc OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;
      `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CpuTempMax() {
        dataHora = '2023-12-05'
        fkServidor = 8

        instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = ${fkServidor} 
        order by valorRegistro desc OFFSET 0 ROWS FETCH FIRST 1 ROWW ONLT;
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
      }  
      function CpuTempMin() {
        dataHora = '2023-12-05'
        fkServidor = 8

        instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = ${fkServidor} 
        order by valorRegistro OFFSET 0 ROWS FETCH FIRST 1 ROWW ONLT;
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