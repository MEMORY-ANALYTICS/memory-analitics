var database = require("../database/config")

function qtdIncidentes(idServidor) {

  idServidor = 12

  instrucaoSql = `
  select count(idChamadoServidor) as quantidade from chamadoServidor join servidor on fkServidor = idServidor 
  where requisitante = 'Temperatura' and MONTH(dtHoraChamado) = 12 and fkServidor ='${idServidor}';
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function MedTemp(idServidor,data) {

  idServidor = 12
  data = '2023-12-12'

  instrucaoSql = ` 
    select top 1 round(avg(valorRegistro),2) as mediaTemperatura from registroTemp join componente on fkComponente = idComponente 
    where tipoMedida = 'celsius' and convert(date, dtHoraRegistro) = '${data}' and fkComponente = '43'
    GROUP BY convert(date, dtHoraRegistro) 
    order by mediaTemperatura desc;
      `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMax(idServidor,data) {

  idServidor = 12
  data = '2023-12-12'

  instrucaoSql = `
    select top 1 valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registroTemp join componente on fkComponente = idComponente 
    where tipoMedida = 'celsius' and convert(date, dtHoraRegistro) like '${data}%' and fkComponente = '43'
    order by valorRegistro desc;
        `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function CpuTempMin() {
  idServidor = 12
  data = '2023-12-12'

  instrucaoSql = `
        
select top 1 valorRegistro, dtHoraRegistro, tipoComponente, fkComponente, fkServidor from registroTemp join componente on fkComponente = idComponente 
where tipoMedida = 'celsius' and convert(date,dtHoraRegistro) like '${data}' and fkComponente = 43
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