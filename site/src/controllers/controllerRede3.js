var database = require("../database/config");

function listar(req, res){

    var fkEmpresa = req.params.fkEmpresa;	
    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    modelRede3.listar(fkEmpresa).then(function (resultado) {	
      if (resultado.length > 0) {	
          res.status(200).json(resultado);	
          console.log("Resultado da Controller:"+ resultado);	
      } else {	
          res.status(204).send("Nenhum resultado encontrado!")	
      }	
  }).catch(function (erro) {	
      console.log(erro);	
      console.log("Houve um erro ao buscar o usuário", erro.sqlMessage);	
      res.status(500).json(erro.sqlMessage);	
  });	
}	

function pegarIdComponente(){
  var fkServidor = req.params.fkServidor;

  modelRede3
    .pegarIdComponente(fkServidor)
    .then(function (resultado) {

      if (resultado.length == 1) {
        console.log(resultado);
        res.json(resultado[0]);
      } else if (resultado.length == 0) {
        res.status(403).send("fkServidor Invalida");
      } else {
        res.status(403).send("Mais de uma fkServidor");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao selecionar o idComponente! ERRO: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  pegarIdComponente
};