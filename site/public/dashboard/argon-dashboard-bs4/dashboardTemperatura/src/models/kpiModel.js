var database = require("../../../../../../src/database/config")

function qtdIncidentes(idServidor) {

  instrucaoSql = `
  select count(idChamadoServidor) as quantidade from chamadoServidor join componente on 
  fkComponente = idComponente join servidor on fkServidor = idServidor 
  where descricao like '%temperatura' and fkServidor = '${idServidor}';
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function MedTemp(idServidor,data) {

  instrucaoSql = `select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
        where tipoMedida = '°C' and CONVERT(DATE,dtHoraRegistro) = '${data}%' and fkServidor = ${idServidor} 
        order by mediaTemperatura desc OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;
      `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMax(idServidor,data) {

  instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${data}%' and fkServidor = ${idServidor} 
        order by valorRegistro desc OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;
        `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMin() {

  instrucaoSql = `
        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${data}%' and fkServidor = ${idServidor} 
        order by valorRegistro OFFSET 0 ROWS FETCH FIRST 1 ROW ONLY;
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