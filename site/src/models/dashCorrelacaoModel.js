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

function selectGraficoOcorrencia(fkServidor, requisitante, fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectGraficoOcorrencia(): "
  );
  if (fkServidor != 0) {
    var instrucao = `SELECT count(idChamadoServidor) as totalChamados FROM chamadoServidor WHERE fkServidor = ${fkServidor} AND requisitante = '${requisitante}';`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  } else {
    var instrucao = `SELECT COUNT(cs.idChamadoServidor) AS TotalChamados
    FROM chamadoServidor cs
    JOIN servidor s ON cs.fkServidor = s.idServidor
    JOIN empresa e ON s.fkEmpresa = e.idEmpresa
    WHERE e.idEmpresa = ${fkEmpresa}
    AND cs.requisitante = '${requisitante}';`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
}

module.exports = {
  selectServidores,
  selectGraficoOcorrencia
};