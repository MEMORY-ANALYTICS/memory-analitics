var database = require("../database/config");

function getServInstaveis(nomeEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT qtdServInstaveis FROM getServInstaveis WHERE nomeEmpresa = ${nomeEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getEstadoGeralServ(nomeEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT * FROM getEstadoGeralServ WHERE nomeEmpresa = ${nomeEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getCompProblematico(fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT c.tipoComponente AS nomeComponente, COUNT(*) AS total_registros_excedidos
FROM componente c
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN registro r ON c.idComponente = r.fkRecurso
WHERE e.idEmpresa = ${fkEmpresa} 
    AND (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
GROUP BY c.tipoComponente
ORDER BY total_registros_excedidos DESC limit 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function obterDadosGrafico(nomeEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT sum((ExcedeuLimites)) picosDeUso FROM limitesExcedidos WHERE NomeEmpresa = ${nomeEmpresa} GROUP BY MesAno;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

module.exports = {
    getServInstaveis,
    getEstadoGeralServ,
    getCompProblematico,
    obterDadosGrafico
};
