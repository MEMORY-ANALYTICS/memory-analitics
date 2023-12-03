var graficoModel = require("../models/graficoModel")

function graficoCoreHora(req,res){
     // var idServidor = req.body.idServidor;
    graficoModel.graficoCoreHora().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}

function graficoCoreSemana(req,res){
    // var idServidor = req.body.idServidor;
   graficoModel.graficoCoreSemana().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCoreMes(req,res){
    // var idServidor = req.body.idServidor;
   graficoModel.graficoCoreMes().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCpuHora(req,res){
    // var idServidor = req.body.idServidor;
   graficoModel.graficoCpuHora().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCpuSemana(req,res){
    // var idServidor = req.body.idServidor;
   graficoModel.graficoCpuSemana().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCpuMes(req,res){
    // var idServidor = req.body.idServidor;
   graficoModel.graficoCoreMes().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}


module.exports  = {
    graficoCoreHora,
    graficoCoreSemana,
    graficoCoreMes,
    graficoCpuHora,
    graficoCpuSemana,
    graficoCpuMes
}