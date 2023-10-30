var database = require("../database/config");

function getDowntime(fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT tempoDowntime FROM getTempoDowntime WHERE fkEmpresa = ${fkEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

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
SELECT tipoComponente AS nomeComponente, count(tipoComponente) FROM registro rg 
	JOIN recurso r ON rg.fkRecurso = r.idRecurso 
	JOIN componente c ON r.fkComponente = c.idComponente
	JOIN servidor s ON c.fkServidor = s.idServidor
	JOIN medidacomponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
WHERE (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin) 
	AND fkMedidaComponente = 1 
	AND fkEmpresa = ${fkEmpresa} 
GROUP BY tipoComponente 
ORDER BY count(tipoComponente) 
DESC LIMIT 1;
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

function buscarMedidasEmTempoReal(nomeEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  // var instrucao = `
  // SELECT sum((ExcedeuLimites)) picosDeUso FROM limitesExcedidos WHERE NomeEmpresa = ${nomeEmpresa} GROUP BY MesAno;
  //   `;
  var instrucao = `
    SELECT GROUP_CONCAT(picosDeUso) AS Resultado
    FROM (
      SELECT SUM(ExcedeuLimites) AS picosDeUso
      FROM limitesExcedidos
      WHERE NomeEmpresa = ${nomeEmpresa}
      GROUP BY MesAno
      ORDER BY MesAno
      LIMIT 5
    ) subquery;
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

module.exports = {
  getDowntime,
  getServInstaveis,
  getEstadoGeralServ,
  getCompProblematico,
  obterDadosGrafico,
  buscarMedidasEmTempoReal
};
