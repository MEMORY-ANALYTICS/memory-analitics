var database = require("../database/config");

function getAll(fkEmpresa) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT * FROM Funcionario where fkEmpresa = ${fkEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarFuncionario(nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor){
    var instrucao = `INSERT INTO Funcionario VALUES (null, ${nomeFunc},${emailFunc},${telefoneFunc},${permissao},${fkEmpresa},${fkCargo},${fkSupervisor});`
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

module.exports = {
    getAll
};