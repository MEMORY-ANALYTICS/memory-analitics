var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT idLogin, login, senha FROM login WHERE Login = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, nomeAdm, emailContato, telContato, cnpj) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nomeEmpresa,
    nomeAdm,
    emailContato,
    telContato,
    cnpj
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var cadastroEmpresa = `INSERT INTO Empresa VALEUS (null, '${nomeEmpresa}', ${cnpj});`;

  var idEmpresa = `SELECT idEmpresa FROM Empresa WHERE nomeEmpresa = '${nomeEmpresa}' AND cnpjEmpresa = ${cnpj}`;

  var cadastroFuncionario = `INSERT INTO Funcionario VALUES (null, '${nomeAdm}','${emailContato}', ${telContato}, 3, ${idEmpresa});`;

  console.log("Executando a instrução SQL: \n" + cadastroEmpresa);
  console.log("Executando a instrução SQL: \n" + cadastroFuncionario);
  return database.executar(cadastroFuncionario);
}

module.exports = {
  autenticar,
  cadastrar,
};
