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
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getRam(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function getDisco(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getDisco(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getUsoMes(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getUsoMes(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getMaxCpu(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getMaxCpu(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getMaxRam(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getMaxRam(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getMaxDisco(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getMaxDisco(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getUltimoCpu(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getUltimoCpu(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getUltimoRam(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getUltimoRam(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function getUltimoDisco(req,res){
    var fkServidor = req.params.fkServidor;
    DashboardHardwareModel.getUltimoDisco(fkServidor).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    getServidor,
    getCpu,
    getRam,
    getDisco,
    getUsoMes,
    getMaxCpu,
    getMaxRam,
    getMaxDisco,
    getUltimoCpu,
    getUltimoRam,
    getUltimoDisco

}
