var database = require("../database/config");

function cadastrarEmpresa(empresaData) {
return new Promise((resolve, reject) => {
    var instrucao = `
    INSERT INTO EMPRESA VALUES (null,'${empresaData.nome}','${empresaData.cnpj}', '${empresaData.emailEmpresa}', '${empresaData.telEmpresa}')`;
    
    var parametros = [
    empresaData.nome,
    empresaData.cnpj,
    empresaData.emailEmpresa,
    empresaData.telEmpresa
    ];

    database
    .executar(instrucao, parametros)
    .then((result) => {
        // Recupere o ID gerado pelo banco de dados
        const idEmpresa = result.insertId;
        resolve(idEmpresa);
    })
    .catch(reject);
});
}

function cadastrarEndereco(enderecoData) {
  // Note que estamos chamando a função cadastrarEmpresa para obter o ID da empresa
return cadastrarEmpresa(enderecoData).then((idEmpresa) => {
    // Associe o idEmpresa ao objeto enderecoData
    enderecoData.fkEmpresa = idEmpresa;

    var instrucao = `
    INSERT INTO ENDERECO VALUES (null,'${enderecoData.cep}', '${enderecoData.logradouro}', '${enderecoData.numero}', '${enderecoData.cidade}', '${enderecoData.estado}', '${enderecoData.fkEmpresa}')`;

    var parametros = [
    enderecoData.cep,
    enderecoData.logradouro,
    enderecoData.numero,
    enderecoData.cidade,
    enderecoData.estado,
    enderecoData.fkEmpresa
    ];

    return database.executar(instrucao, parametros).then(() => {
      return idEmpresa; // Retorne o ID da empresa após cadastrar o endereço
    });
});
}

function cadastrarFuncionario(funcionarioData, idEmpresa) {
var instrucao = `
    INSERT INTO FUNCIONARIO VALUES (null,'${funcionarioData.nomeFuncionario}', '${funcionarioData.emailFuncionario}', '${funcionarioData.telFuncionario}', "1",'${idEmpresa}','${funcionarioData.cargo}',null)`;

var parametros = [
    funcionarioData.nomeFuncionario,
    funcionarioData.emailFuncionario,
    funcionarioData.telFuncionario,
    idEmpresa,
    funcionarioData.cargo,
    funcionarioData.senha
];

return database.executar(instrucao, parametros)
    .then((result) => {
      // Recupere o ID do funcionário recém-cadastrado
    const idFuncionario = result.insertId;

      // Agora, crie um registro de login para o funcionário
    return cadastrarLogin(funcionarioData.emailFuncionario, funcionarioData.senha, idFuncionario);
    });
}

function cadastrarLogin(email, senha, fkFuncionario) {
var instrucao = `
    INSERT INTO LOGIN VALUES (null,'${email}', '${senha}', '${fkFuncionario}')`;

var parametros = [
    email,
    senha,
    fkFuncionario
];

return database.executar(instrucao, parametros);
}

module.exports = {
cadastrarEmpresa,
cadastrarEndereco,
cadastrarFuncionario,
cadastrarLogin
}