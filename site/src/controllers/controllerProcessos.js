var processosModel = require("../models/modelProcessos");


function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var fkServer = req.params.fkServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    processosModel.buscarUltimasMedidas(fkServer, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var fkServer = req.params.fkServer;

    console.log(`Recuperando medidas em tempo real`);

    processosModel.buscarMedidasEmTempoReal(fkServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getAllProcessosBanidos(req, res) {

    var fkServer = req.params.fkServer;

    console.log(`Recuperando medidas em tempo real`);

    processosModel.getAllProcessosBanidos(fkServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os processos banidos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getQtdProcessosBanidos(req, res) {

    var fkServer = req.params.fkServer;

    console.log(`Recuperando medidas em tempo real`);

    processosModel.getQtdProcessosBanidos(fkServer).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os processos banidos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function adicionarProcesso(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeProcesso = req.body.nomeProcesso;
    var fkServidor = req.body.fkServidor;
    // Faça as validações dos valores
    if (nomeProcesso == undefined) {
        res.status(400).send("nomeProcesso está undefined!");
    }
    else if (fkServidor == undefined) {
        res.status(400).send("fkServidor está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        processosModel.adicionarProcesso(nomeProcesso,fkServidor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de processo! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    getAllProcessosBanidos,
    getQtdProcessosBanidos,
    adicionarProcesso
}