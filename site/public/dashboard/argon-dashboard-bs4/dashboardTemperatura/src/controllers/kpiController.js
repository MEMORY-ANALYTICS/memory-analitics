var kpiModel = require("../models/kpiModel")

function qtdIncidentes(req, res) {
    var idServidor = req.body.idServidor;

    kpiModel.qtdIncidentes(idServidor).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        // res.status(500).json(erro.sqlMessage);
    })
}

function MedTemp(req, res) {
    var idServidor = req.body.idServidor;
    var data = req.body.dataMomento;
    
    kpiModel.MedTemp(idServidor,data).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        // res.status(500).json(erro.sqlMessage);
    })
}

function CpuTempMax(req, res) {
    var idServidor = req.body.idServidor;
    var data = req.body.dataMomento;

    kpiModel.CpuTempMax(idServidor,data).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        // res.status(500).json(erro.sqlMessage);
    })
}

function CpuTempMin(req, res) {
    var idServidor = req.body.idServidor;
    var data = req.body.dataMomento;

    kpiModel.CpuTempMin(idServidor,data).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        // res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    qtdIncidentes,
    MedTemp,
    CpuTempMax,
    CpuTempMin
}