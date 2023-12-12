var database = require("../database/config")

function graficoCpuHora(idServidor) {

  idServidor = 12

  

  instrucaoSql = `
  select top 20 valorRegistro, dtHoraRegistro,tipoComponente from 
  registroTemp join componente on fkComponente = idComponente 
  where tipoMedida = 'celsius' and convert(date,dtHoraRegistro) = '2023-12-12' and  fkServidor = ${idServidor} order by dtHoraRegistro desc ;
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuSemana(idServidor,data) {

  idServidor = 12
  data = '2023-12%'

  instrucaoSql = `select top 7 round(avg(valorRegistro),2) as valorMedia, convert(date, dtHoraRegistro) as dia 
  from registroTemp
	where tipoMedida = 'celsius' and convert(date,dtHoraRegistro)  like '${data}' 
  and fkComponente = (select idComponente from componente where fkServidor = ${idServidor})
  group by convert(date,dtHoraRegistro) order by convert(date,dtHoraRegistro) desc;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuMes(idServidor) {

  idServidor = 12

  instrucaoSql = `
  select top 20 round(avg(valorRegistro),2) as valorMedia, convert(date,dtHoraRegistro) as dia from registroTemp 
    where tipoMedida = 'celsius'
  and fkComponente = 43 and convert(date,dtHoraRegistro) like '2023-12%'
   group by convert(date,dtHoraRegistro)
   order by convert(date,dtHoraRegistro) desc;
  
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

function filtroData(dataInicio,dataFim,idServidor) {

  //dataInicio = '2023-01-01'
  //dataFim = '2023-12-31'
  idServidor = '12'

  instrucaoSql = `
  SELECT convert(date,dtHoraRegistro) AS dia, round(AVG(valorRegistro),2) AS valor FROM registroTemp
  WHERE dtHoraRegistro BETWEEN '${dataInicio}' AND '${dataFim}' and tipoMedida = 'celsius' 
  and fkComponente = 43
  GROUP BY convert(date,dtHoraRegistro) order by dia;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

function graficoIncidentes(idServidor) {

  idServidor = 12

  instrucaoSql = `
  select count(idChamadoServidor) as quantidade, Month(dtHoraChamado) as mes from 
  chamadoServidor join servidor on chamadoServidor.fkServidor = servidor.idServidor where requisitante = 'Temperatura' 
  and chamadoServidor.fkServidor = '${idServidor}'
  group by Month(dtHoraChamado);
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  


module.exports = {
  graficoCpuHora,
  graficoCpuSemana,
  graficoCpuMes,
  filtroData,
  graficoIncidentes
}
