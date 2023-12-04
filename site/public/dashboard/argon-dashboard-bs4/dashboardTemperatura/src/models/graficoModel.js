var database = require("../database/config")

function graficoCpuHora() {

  fkServidor = 8

  instrucaoSql = `
  select valorRegistro, dtHoraRegistro,tipoComponente from 
  registro join componente on fkComponente = idComponente 
  where tipoMedida = '°C' and  ${fkServidor} order by dtHoraRegistro desc ;
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuSemana() {

  anoMes = '2023-10'
  fkServidor = 8;

  instrucaoSql = `select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '${anoMes}%' 
  and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc limit 7;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuMes() {

  anoMes = '2023-10'
  fkServidor = 8;
  
  instrucaoSql = `select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '${anoMes}%'
   and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

function filtroData() {

  var dataInicio = '2023-01-01'
  var dataFim = '2023-12-31'
  fkServidor = 8;
  
  instrucaoSql = `
  SELECT DATE(dtHoraRegistro) AS dia, round(AVG(valorRegistro),2) AS valor FROM registro
  WHERE dtHoraRegistro BETWEEN '${dataInicio}' AND '${dataFim}' and tipoMedida = "°C" 
  and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
  GROUP BY DATE(dtHoraRegistro);
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

module.exports = {
  graficoCpuHora,
  graficoCpuSemana,
  graficoCpuMes,
  filtroData
}
