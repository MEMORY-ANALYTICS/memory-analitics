var graficoModel = require("../models/graficoModel")


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
   graficoModel.graficoCpuMes().then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}


module.exports  = {
    graficoCpuHora,
    graficoCpuSemana,
    graficoCpuMes
}