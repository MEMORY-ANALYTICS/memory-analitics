var kpiModel = require("../models/kpiModel")

function MedTempIdeal(req,res){
     // var idServidor = req.body.idServidor;
    kpiModel.MedTempIdeal().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}

function MedTempAtual(req,res){
    // var idServidor = req.body.idServidor;
   kpiModel.MedTempAtual().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function CoreTempMax(req,res){
    // var idServidor = req.body.idServidor;
   kpiModel.CoreTempMax().then(function(resultado){
    res.status(200).json(resultado);
}).catch(function(erro){
    // res.status(500).json(erro.sqlMessage);
})
}

function CoreTempMin(req,res){
    // var idServidor = req.body.idServidor;
   kpiModel.CoreTempMin().then(function(resultado){
    res.status(200).json(resultado);
}).catch(function(erro){
    // res.status(500).json(erro.sqlMessage);
})
}



module.exports  = {
    MedTempIdeal,
    MedTempAtual,
    CoreTempMax,
    CoreTempMin
}