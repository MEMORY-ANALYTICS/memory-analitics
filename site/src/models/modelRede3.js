var database = require("../database/config");

function listar(fkEmpresa) {
    console.log(
        "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
      );
      console.log(fkEmpresa);
      var instrucao = `
      SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${fkEmpresa} AND tipoComponente = 'REDE';
          `;
      console.log("Executando a instrução SQL: \n" + instrucao);
      return database.executar(instrucao);
  }

  function pegarIdComponente(fkServidor){
    console.log("ACESSEI O LINHA MODEL \n", nomeLinha)
  var instrucao = 
  `SELECT * FROM vwLinha WHERE codLinha = '${nomeLinha}'`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = {
    listar,
}