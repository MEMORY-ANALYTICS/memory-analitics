var database = require("../database/config")

function qtdIncidentes(idServidor) {

  idServidor = 12

  instrucaoSql = `
  select count(idChamadoServidor) as quantidade from chamadoServidor join servidor on fkServidor = idServidor 
  where requisitante = 'Temperatura' and fkServidor ='${idServidor}';
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function MedTemp(idServidor,data) {

  idServidor = 12
  data = '2023-12-10'

  instrucaoSql = ` 
    select top 1 round(avg(valorRegistro),2) as mediaTemperatura from registroTemp join componente on fkComponente = idComponente 
    where tipoMedida = 'celsius' and convert(date, dtHoraRegistro) = '${data}' and fkServidor = '${idServidor}'
    GROUP BY convert(date, dtHoraRegistro) 
    order by mediaTemperatura desc;
      `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMax(idServidor,data) {

  idServidor = 12
  data = '2023-12-10'

  instrucaoSql = `
    select top 1 valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registroTemp join componente on fkComponente = idComponente 
    join servidor on fkServidor = idServidor
    where tipoMedida = 'celsius' and convert(date, dtHoraRegistro) = '${data}' and fkServidor = '${idServidor}'
    order by valorRegistro desc;
        `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMin() {
  idServidor = 12
  data = '2023-12-10'

  instrucaoSql = `
        select top 1 valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registroTemp join componente on fkComponente = idComponente 
        join servidor on fkServidor = idServidor
	      where tipoMedida = 'celsius' and convert(date, dtHoraRegistro) = '${data}' and fkServidor = '${idServidor}'
        order by valorRegistro;
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