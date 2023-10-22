var empresaModel = require("../models/empresaModel");

function cadastrarEmpresa(req, res) {
  var empresaData = req.body;

  empresaModel
    .cadastrarEndereco(empresaData)
    .then((idEmpresa) => {
      // O cadastro da empresa e do endereço foi bem-sucedido e você tem o idEmpresa agora
      // Agora, chame a função para cadastrar o funcionário
      return empresaModel.cadastrarFuncionario(empresaData, idEmpresa);
    })
    .then((idFuncionario) => {
      // O funcionário foi cadastrado com sucesso e você tem o idFuncionario agora
      // Agora, chame a função para cadastrar o login do funcionário
      return empresaModel.cadastrarLogin(empresaData, idFuncionario);
    })
    .then(() => {
      // O login do funcionário foi cadastrado com sucesso
      res.status(201).json({ mensagem: "Empresa, endereço, funcionário e login cadastrados com sucesso!" });
    })
    .catch((erro) => {
      console.error("Erro ao cadastrar empresa, endereço, funcionário ou login:", erro);
      res.status(500).json({ erro: "Ocorreu um erro ao cadastrar a empresa, endereço, funcionário ou login." });
    });
}

module.exports = {
  cadastrarEmpresa,
};