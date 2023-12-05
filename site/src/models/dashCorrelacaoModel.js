var database = require("../database/config");

function selectServidores(fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  var instrucao = `
    SELECT * FROM servidor where fkEmpresa = ${fkEmpresa};
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function selectGraficoOcorrencia(servidorVisualizado) {
    console.log(
      "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
    );
    var instrucao = `SELECT count(idChamadoServidor) FROM chamadoServidor where fkServidor = ${servidorVisualizado};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    selectServidores,
    selectGraficoOcorrencia
};