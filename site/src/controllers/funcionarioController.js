var funcionarioModel = require("../models/funcionarioModels");

function getAll(req, res) {
    funcionarioModel
    .getAll()
    .then(function (resultadoAutenticar) {
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

      if (resultadoAutenticar.length > 0) {
        console.log(resultadoAutenticar);
        res.json(resultadoAutenticar);
      } else if (resultadoAutenticar.length == 0) {
        res.status(403).send("Não possui funcionarios cadastrados");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o login! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    getAll
};
