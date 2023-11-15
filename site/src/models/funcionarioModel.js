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

function getInfosFuncionario(idFuncionario) {
  console.log(
    "ACESSEI O FUNC MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
  );
  var instrucao = `
  SELECT * FROM Funcionario where idFuncionario = ${idFuncionario};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarFuncionario(nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor){
    var instrucao = `INSERT INTO Funcionario VALUES (null, '${nomeFunc}','${emailFunc}',${telefoneFunc},'${permissao}','${fkEmpresa}','${fkCargo}','${fkSupervisor}');`
    return database.executar(instrucao);
}

function getLastId(fkEmpresa){
  var instrucao = `SELECT idFuncionario FROM funcionario WHERE fkEmpresa = ${fkEmpresa} ORDER BY idFuncionario DESC LIMIT 1`;
  return database.executar(instrucao);
}

function cadastrarLogin(email, senha, fkFuncionario){
  var instrucao = `INSERT INTO login VALUES(null, '${email}','${senha}',${fkFuncionario});`;
  return database.executar(instrucao);
}

function deleteFuncionario(idFuncionario){
  var instrucao = `DELETE FROM funcionario WHERE idFuncionario = ${idFuncionario};`;
  return database.executar(instrucao);
}

function deleteLogin(fkFuncionario){
  var instrucao = `DELETE FROM login WHERE fkFuncionario = ${fkFuncionario};`;
  return database.executar(instrucao);
}

module.exports = {
    getAll,
    cadastrarFuncionario,
    getInfosFuncionario,
    getLastId,
    cadastrarLogin,
    deleteFuncionario,
    deleteLogin
};