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
  var instrucaoSql = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Ram
function selectRam(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRam(): "
  );
  var instrucaoSql = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Disco
function selectDisco(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectDisco(): "
  );
  var instrucaoSql = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

// Temperatura
// function selectTemperatura(fkServidor) {
//   console.log(
//     "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectTemperatura(): "
//   );
//   var instrucaoSql = `SELECT r.valorRegistro AS usoCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM';`
//   console.log("Executando a instrução SQL: \n" + instrucaoSql);

//   return database.executar(instrucaoSql);
// }

// Rede
function selectRede(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRede(): "
  );
  var instrucaoSql = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucaoSql);
}

module.exports = {
  selectServidores,
  selectGraficoOcorrencia,
  selectCpu,
  selectRam,
  selectDisco,
  // selectTemperatura,
  selectRede
};