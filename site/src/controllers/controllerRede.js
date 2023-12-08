var redeModel = require("../models/modelRede");

function listar(req, res) {
  var fkEmpresa = req.params.fkEmpresa;

  redeModel.listar(fkEmpresa)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os Servidores: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarIdComponente(req, res) {
    var fkServidor = req.params.fkServidor;
  
    redeModel.pegarIdComponente(fkServidor)
          .then(
              function (resultado) {
                  if (resultado.length > 0) {
                      res.status(200).json(resultado);
                  } else {
                      res.status(204).send("Nenhum resultado encontrado!");
                  }
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "Houve um erro ao buscar os Servidores: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

  function pegarKpiVelocidade(req, res) {
    var fkComponente = req.params.fkComponente;
    var dataAtual = req.params.dataAtual;
    console.log(fkComponente);
    console.log(dataAtual);
  
    redeModel.pegarKpiVelocidade(fkComponente,dataAtual)
          .then(
              function (resultado) {
                  if (resultado.length > 0) {
                      res.status(200).json(resultado);
                  } else {
                      res.status(204).send("Nenhum resultado encontrado!");
                  }
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "Houve um erro ao buscar os Servidores: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

  function pegarKpiLatencia(req, res) {
    var fkComponente = req.params.fkComponente;
    var dataAtual = req.params.dataAtual;
    console.log(fkComponente);
    console.log(dataAtual);
  
    redeModel.pegarKpiLatencia(fkComponente,dataAtual)
          .then(
              function (resultado) {
                  if (resultado.length > 0) {
                      res.status(200).json(resultado);
                  } else {
                      res.status(204).send("Nenhum resultado encontrado!");
                  }
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "Houve um erro ao buscar os Servidores: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

  function pegarKpiPacotes(req, res) {
    var fkComponente = req.params.fkComponente;
    var dataAtual = req.params.dataAtual;
    console.log(fkComponente);
    console.log(dataAtual);
  
    redeModel.pegarKpiPacotes(fkComponente,dataAtual)
          .then(
              function (resultado) {
                  if (resultado.length > 0) {
                      res.status(200).json(resultado);
                  } else {
                      res.status(204).send("Nenhum resultado encontrado!");
                  }
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "Houve um erro ao buscar os Servidores: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
// -------------------------------------------- Fim Kpis - Retorno de variáveis ------------------------------------------------
  function pegarVelocidadeMax(req, res) {
    var fkComponente = req.params.fkComponente;
    var dataAtual = req.params.dataAtual;
    console.log(fkComponente);
    console.log(dataAtual);
  
    redeModel.pegarVelocidadeMax(fkComponente,dataAtual)
          .then(
              function (resultado) {
                  if (resultado.length > 0) {
                      res.status(200).json(resultado);
                  } else {
                      res.status(204).send("Nenhum resultado encontrado!");
                  }
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "Houve um erro ao buscar os Servidores: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }

module.exports = {
  listar,
  pegarIdComponente,
  pegarKpiVelocidade,
  pegarKpiLatencia,
  pegarKpiPacotes,

  pegarVelocidadeMax
};