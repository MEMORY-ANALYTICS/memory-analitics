var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);
          res.status(200).send(resultadoAutenticar[0]);
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
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
}

function cadastrar(req, res) {
  var nomeEmpresa = req.body.nomeEmpresaServer;
  var nomeAdm = req.body.nomeAdmServer;
  var emailContato = req.body.emailContatoServer;
  var telContato = req.body.telContatoServer;
  var cnpj = req.body.cnpjServer;
  var senhaCadastro = req.body.senhaCadastroServer;

  // Faça as validações dos valores
  if (nomeEmpresa == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (nomeAdm == undefined) {
    res.status(400).send("Seu nome de adm está undefined!");
  } else if (emailContato == undefined) {
    res.status(400).send("Seu email de contato está undefined!");
  } else if (cnpj == undefined) {
    res.status(400).send("Seu CNPJ está undefined!");
  } else if (telContato == undefined) {
    res.status(400).send("Seu telefone de contato está undefined!");
  } else if (senhaCadastro == undefined) {
    res.status(400).send("Sua senha cadastro está undefined!");
  } else {
    usuarioModel
      .cadastrar(
        nomeEmpresa,
        nomeAdm,
        emailContato,
        telContato,
        cnpj,
        senhaCadastro
      )
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar,
};
