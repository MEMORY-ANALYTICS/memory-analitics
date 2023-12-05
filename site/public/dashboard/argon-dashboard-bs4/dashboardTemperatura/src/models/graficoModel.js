var database = require("../database/config")

function graficoCpuHora(fkServidor) {

  fkServidor = 8

  instrucaoSql = `
  select valorRegistro, dtHoraRegistro,tipoComponente from 
  registro join componente on fkComponente = idComponente 
  where tipoMedida = '°C' and  fkServidor = ${fkServidor} order by dtHoraRegistro desc ;
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuSemana() {

  anoMes = '2023-12'
  fkServidor = 8;

  instrucaoSql = `select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia 
  from registro 
	where tipoMedida = '°C' and MONTH(dtHoraRegistro) like '${anoMes}%' 
  and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
  group by MONTH(dtHoraRegistro) order by MONTH(dtHoraRegistro) desc OFFSET 0 ROWS FETCH FIRST 7 ROW ONLY;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuMes() {

  anoMes = '2023-12'
  fkServidor = 8;
  
  instrucaoSql = `select round(avg(valorRegistro),2) as valorMedia, MONTH(dtHoraRegistro) as dia from registro 
	where tipoMedida = '°C' and MONTH(dtHoraRegistro) like '${anoMes}%'
   and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
    group by MONTH(dtHoraRegistro) order by MONTH(dtHoraRegistro) desc;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

function filtroData() {

  dataInicio = '2023-01-01'
  dataFim = '2023-12-31'
  fkServidor = 8

  
  instrucaoSql = `
  SELECT MONTH(dtHoraRegistro) AS dia, round(AVG(valorRegistro),2) AS valor FROM registro
  WHERE dtHoraRegistro BETWEEN '${dataInicio}' AND '${dataFim}' and tipoMedida = '°C' 
  and fkComponente = (select idComponente from componente where fkServidor = ${fkServidor})
  GROUP BY MONTH(dtHoraRegistro) order by dia;
`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  

function graficoIncidentes(apelidoServidor) {

  

  instrucaoSql = `
  select sum(idChamadoServidor) as quantidade, Month(dtHoraChamado) as mes from 
  chamadoServidor join componente on fkComponente = idComponente
  join servidor on fkServidor = idServidor where descricao like 'CPU' and apelidoServidor = '${apelidoServidor}'
  group by Month(dtHoraChamado) order by mes desc;
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
