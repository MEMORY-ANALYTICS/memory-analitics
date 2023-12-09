var database = require("../database/config");

// Dados de ocorrencias
function selectGraficoOcorrencia(fkServidor, requisitante) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectGraficoOcorrencia(): "
  );

  if (fkServidor != 0) {

    var instrucao = `SELECT count(idChamadoServidor) as TotalChamados FROM chamadoServidor WHERE requisitante = '${requisitante}' AND fkServidor = ${fkServidor}`;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

  } else {

    var instrucao = `SELECT count(idChamadoServidor) as TotalChamados FROM chamadoServidor WHERE requisitante = '${requisitante}' `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
  }
}

// Dados de servidores
function selectServidores(fkEmpresa) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  var instrucao = `SELECT * FROM servidor where fkEmpresa = ${fkEmpresa};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  
  return database.executar(instrucao);
}

// Dados de Componentes
  // CPU
function selectCpu(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
  );
  var instrucaoSql = `SELECT c.fkServidor, r.valorRegistro AS usoCpu, r.tipoMedida, r.dtHoraRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Ram
function selectRam(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRam(): "
  );
  var instrucaoSql = `SELECT c.fkServidor, r.valorRegistro AS usoCpu, r.tipoMedida, r.dtHoraRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Disco
function selectCpu(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectDisco(): "
  );
  var instrucaoSql = `SELECT c.fkServidor, r.valorRegistro AS usoCpu, r.tipoMedida, r.dtHoraRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Temperatura
function selectTemperatura(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectTemperatura(): "
  );
  var instrucaoSql = `SELECT valorRegistro, dtHoraRegistro,tipoComponente FROM REGISTRO JOIN componente ON fkComponente = idComponente WHERE tipoMedida = '°C' AND  ${fkServidor} ORDER BY dtHoraRegistro DESC;`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql);
}

// Rede
function selectRede(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRede(): "
  );
  var instrucaoSql = `SELECT c.fkServidor, r.valorRegistro AS usoCpu, r.tipoMedida, r.dtHoraRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

module.exports = {
  selectServidores,
  selectGraficoOcorrencia,
  selectCpu,
  selectRam,
  selectDisco,
  selectTemperatura,
  selectRede
};