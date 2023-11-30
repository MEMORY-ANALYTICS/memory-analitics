var dashboardGModel = require("../models/dashboardGModels");

function getDowntime(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getDowntime(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function getChamados(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getChamados(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function getServCriticos(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getServCriticos(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + JSON.stringify(resultado));
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function getEstadoGeralServ(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getEstadoGeralServ(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function getCompProblematico(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.getCompProblematico(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de servidores instaveis", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosGrafico(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
    console.log('Estou no Controller com o valor de:' + fkEmpresa)

    dashboardGModel.obterDadosGrafico(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller:" + resultado);
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
    getDowntime,
    getChamados,
    getServCriticos,
    getEstadoGeralServ,
    getCompProblematico,
    obterDadosGrafico
};