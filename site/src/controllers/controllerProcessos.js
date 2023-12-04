var processosModel = require("../models/modelProcessos");


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
        console.log("Houve um erro ao buscar os ultimos resgistros.", erro.sqlMessage);
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

module.exports = {
    buscarMedidasEmTempoReal,
    getAllProcessosBanidos
}