const emailModel = require("../models/emailModel");

function enviar(req, res){
    var nome = req.body.nomeUser;
    var email = req.body.emailUser;
    var senha = req.body.senhaUser;

    emailModel.enviar(nome, email, senha)
    .then((resultado) => {
        res.status(200).send(resultado);
    })
    .catch((erro) =>{
        console.log("Erro ao enviar email: " + erro);
    });
}

module.exports = {
    enviar
}