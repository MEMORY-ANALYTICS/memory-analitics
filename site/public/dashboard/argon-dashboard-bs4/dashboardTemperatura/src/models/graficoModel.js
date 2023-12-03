var database = require("../database/config")

function graficoCoreHora() {

  dataHora = '2023-10-09'

  instrucaoSql = `
  select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = 8 order by valorRegistro desc limit 1;
  `

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCoreSemana() {

  instrucaoSql = `select * from registro limit 2;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCoreMes() {
  
  instrucaoSql = `select * from registro limit 2;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  


function graficoCpuHora() {

  instrucaoSql = `select * from registro limit 1;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuSemana() {

  instrucaoSql = `select * from registro limit 2;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function graficoCpuMes() {
  
  instrucaoSql = `select * from registro limit 2;`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}  


module.exports = {
  graficoCoreHora,
  graficoCoreSemana,
  graficoCoreMes,
  graficoCpuHora,
  graficoCpuSemana,
  graficoCpuMes
}
