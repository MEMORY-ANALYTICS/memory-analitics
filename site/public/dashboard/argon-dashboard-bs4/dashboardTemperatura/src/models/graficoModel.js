var database = require("../database/config")

function graficoCoreHora() {

  instrucaoSql = `
  select valorRegistro, dtHoraRegistro, tipoComponente from registroEmpresa 
  where tipoComponente like 'Core %' and detalheRegistro = "Celsius" and apelidoServidor = "Servidor A" order by dtHoraRegistro;
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
