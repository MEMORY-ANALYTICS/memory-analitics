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

function selectGraficoOcorrencia(fkServidor, requisitante, fkEmpresa, metodo) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectGraficoOcorrencia(): "
  );
  if (fkServidor != 0) {
      var instrucao = `SELECT count(idChamadoServidor) as TotalChamados
    FROM chamadoServidor
    WHERE requisitante = '${requisitante}'
      AND fkServidor = ${fkServidor}
    `;
      console.log("Executando a instrução SQL: \n" + instrucao);
      return database.executar(instrucao);

    }else {
      var instrucao = `SELECT count(idChamadoServidor) as TotalChamados
    FROM chamadoServidor
    WHERE requisitante = '${requisitante}'
    `;
      console.log("Executando a instrução SQL: \n" + instrucao);
      return database.executar(instrucao);

    } 
  }

  function selectCpu(fkServidor) {
    var instrucaoSql =
    `SELECT c.fkServidor, 
    r.valorRegistro AS usoCpu,
    r.tipoMedida,
    r.dtHoraRegistro
    FROM registro r
    JOIN componente c ON r.fkComponente = c.idComponente
    WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de Uso';`
    return database.executar(instrucaoSql);
}

  function selectTemperatura(fkServidor) {
  
    instrucaoSql = `
    select valorRegistro, dtHoraRegistro,tipoComponente from 
    registro join componente on fkComponente = idComponente 
    where tipoMedida = '°C' and  ${fkServidor} order by dtHoraRegistro desc ;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
  selectServidores,
  selectGraficoOcorrencia,
  selectTemperatura,
  selectCpu
};