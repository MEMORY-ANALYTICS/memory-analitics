var database = require("../database/config");

function cadastrarServidor(
  SistemaOperacionalServidor,
  apelidoServidor,
  ipServidor,
  numeroSerieServidor,
  fkEmpresa
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO servidor (SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor, fkEmpresa)
         VALUES ('${SistemaOperacionalServidor}', '${apelidoServidor}', '${ipServidor}', '${numeroSerieServidor}', ${fkEmpresa});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getIdByApelidoLike(apelidoServidor) {
  var instrucao = `
  SELECT idServidor FROM servidor WHERE apelidoServidor like '${apelidoServidor}'
`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atualizarServidor(
  SistemaOperacionalServidor,
  apelidoServidor,
  ipServidor,
  numeroSerieServidor,
  fkEmpresa
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
  update servidor set SistemaOperacionalServidor = '${SistemaOperacionalServidor}', apelidoServidor = '${apelidoServidor}', ipServidor = ${ipServidor}, numeroSerieServidor = '${numeroSerieServidor}' where apelidoServidor like '%${apelidoServidor}%' and fkEmpresa = ${fkEmpresa};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getAll(fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
  );
  var instrucao = `
    SELECT * FROM servidor where fkEmpresa = ${fkEmpresa};
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getInfosServidor(idServidor) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): "
  );
  var instrucao = `
    SELECT * FROM servidor where idServidor = ${idServidor};
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = {
  cadastrarServidor,
  getAll,
  atualizarServidor,
  getIdByApelidoLike,
  getInfosServidor
};
