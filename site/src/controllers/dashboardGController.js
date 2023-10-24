var dashboardGModel = require("../models/dashboardGModels");

function getServInstaveis(req, res){
    var nomeEmpresa = req.params.nomeEmpresa;
    console.log('Estou no Controller com o valor de:' + nomeEmpresa)

    dashboardGModel.getServInstaveis(nomeEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log("Resultado da Controller:"+ resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getEstadoGeralServ(req, res){
    var nomeEmpresa = req.params.nomeEmpresa;
    console.log('Estou no Controller com o valor de:' + nomeEmpresa)

    dashboardGModel.getEstadoGeralServ(nomeEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log("Resultado da Controller:"+ resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getCompProblematico(req, res){
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getCompProblematico(fkEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log("Resultado da Controller:"+ resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDadosGrafico(req, res){
    var nomeEmpresa = req.params.nomeEmpresa;
    console.log('Estou no Controller com o valor de:' + nomeEmpresa)

    dashboardGModel.obterDadosGrafico(nomeEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log("Resultado da Controller:"+ resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    getServInstaveis,
    getEstadoGeralServ,
    getCompProblematico,
    obterDadosGrafico
};