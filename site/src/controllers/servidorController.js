var servidorModel = require("../models/servidorModel");

function getInfosServidor(req, res){	
    var idServidor = req.params.idServidor;	
    console.log('Estou no Controller com o valor de:' + idServidor)	

    servidorModel.getInfosServidor(idServidor)	
    .then(function (resultado) {	
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

function getAll(req, res){	
    var fkEmpresa = req.params.fkEmpresa;	
    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    servidorModel.getAll(fkEmpresa)	
    .then(function (resultado) {	
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
function getIdByApelidoLike(req, res){
    var apelidoServidor = req.params.apelidoServidor;
    console.log('Estou no Controller com o valor de:' + apelidoServidor)

    servidorModel.getIdByApelidoLike(apelidoServidor)
    .then(function (resultado) {
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

function cadastrarServidor(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var SistemaOperacionalServidor = req.body.SistemaOperacionalServidor;
    var apelidoServidor = req.body.apelidoServidor;
    var ipServidor = req.body.ipServidor;
    var numeroSerieServidor = req.body.numeroSerieServidor;
    var fkEmpresa = req.body.fkEmpresa;
    // Faça as validações dos valores
    if (SistemaOperacionalServidor == undefined) {
        res.status(400).send("SistemaOperacionalServidor está undefined!");
    } else if (apelidoServidor == undefined) {
        res.status(400).send("apelidoServidor está undefined!");
    } else if (numeroSerieServidor == undefined) {
        res.status(400).send("numeroSerieServidor está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("ipServidor está undefined!");
    }
    else if (fkEmpresa == undefined) {
        res.status(400).send("fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        servidorModel.cadastrarServidor(SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor,fkEmpresa)
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

function atualizarServidor(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var SistemaOperacionalServidor = req.body.SistemaOperacionalServidor;
    var apelidoServidor = req.body.apelidoServidor;
    var ipServidor = req.body.ipServidor;
    var numeroSerieServidor = req.body.numeroSerieServidor;
    var fkEmpresa = req.body.fkEmpresa;
    // Faça as validações dos valores
    if (SistemaOperacionalServidor == undefined) {
        res.status(400).send("SistemaOperacionalServidor está undefined!");
    } else if (apelidoServidor == undefined) {
        res.status(400).send("apelidoServidor está undefined!");
    } else if (numeroSerieServidor == undefined) {
        res.status(400).send("numeroSerieServidor está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("ipServidor está undefined!");
    }
    else if (fkEmpresa == undefined) {
        res.status(400).send("fkEmpresa está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        servidorModel.atualizarServidor(SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor,fkEmpresa)
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
    cadastrarServidor,
    getAll,
    atualizarServidor,
    getIdByApelidoLike,
    getInfosServidor
} 