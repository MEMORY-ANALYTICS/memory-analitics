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
  var instrucao = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

  // Ram
function selectRam(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRam(): "
  );
  var instrucao = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

  // Disco
function selectDisco(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectDisco(): "
  );
  var instrucao = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

  // Rede
function selectRede(fkServidor) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRede(): "
  );
  var instrucao = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE';`
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

module.exports = {
  selectServidores,
  selectGraficoOcorrencia,
  selectCpu,
  selectRam,
  selectDisco,
  selectRede
};