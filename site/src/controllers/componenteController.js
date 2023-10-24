var componenteModel = require("../models/componenteModel");

function cadastrarComponente(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelidoServidor = req.body.apelidoServidor;
    var fabricante = req.body.fabricante;
    var nomeModelo = req.body.nomeModelo;
    var tipoComponente = req.body.tipoComponente;
    var limiteMin = req.body.limiteMin;
    var limiteMax = req.body.limiteMax;
    var fkServidor = req.body.fkServidor;
    // Faça as validações dos valores
    if (apelidoServidor == undefined) {
        res.status(400).send("apelidoServidor está undefined!");
    } else if (fabricante == undefined) {
        res.status(400).send("apelidoServidor está undefined!");
    } else if (nomeModelo == undefined) {
        res.status(400).send("numeroSerieServidor está undefined!");
    } else if (tipoComponente == undefined) {
        res.status(400).send("ipServidor está undefined!");
    }
    else if (limiteMin == undefined) {
        res.status(400).send("fkEmpresa está undefined!");
    }
    else if (limiteMax == undefined) {
        res.status(400).send("limiteMax está undefined!");
    }
    else if (fkServidor == undefined) {
        res.status(400).send("fkServidor está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        componenteModel.cadastrarComponente(apelidoServidor, fabricante, nomeModelo, tipoComponente,limiteMin,limiteMax,fkServidor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de servidor! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrarComponente,
} 