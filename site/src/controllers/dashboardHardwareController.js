// controllers/dashboardHardwareController.js

var DashboardHardwareModel = require('../models/dashboardHardwareModel');



function getServidor(req,res){
    DashboardHardwareModel.getServidor().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getCpu(req,res){
    var fkServidor = req.params.fkServidor;
    console.log(fkServidor);
    DashboardHardwareModel.getCpu(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getRam(req,res){
    DashboardHardwareModel.getRam().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function getDisco(req,res){
    DashboardHardwareModel.getDisco().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    getServidor,
    getCpu,
    getRam,
    getDisco

}
