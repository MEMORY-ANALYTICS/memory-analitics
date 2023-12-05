var graficoModel = require("../models/graficoModel")


function graficoCpuHora(req,res){
    // var idServidor = req.body.idServidor;
    var apelido = req.params.apelidoServidor;
   graficoModel.graficoCpuHora(apelido).then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCpuSemana(req,res){
    // var idServidor = req.body.idServidor;
    var apelido = req.params.apelidoServidor;
   graficoModel.graficoCpuSemana(apelido).then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoCpuMes(req,res){
    // var idServidor = req.body.idServidor;
    var apelido = req.params.apelidoServidor;
   graficoModel.graficoCpuMes(apelido).then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function filtroData(req,res){

    var dataInicio = req.body.dataInicioServer
    var dataFim = req.body.dataFimServer
    var fkServidor = req.body.fkServidor
   
   graficoModel.filtroData(dataInicio,dataFim,fkServidor).then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

function graficoIncidentes(req,res){
    // var idServidor = req.body.idServidor;
    var apelido = req.params.apelidoServidor;
   graficoModel.graficoIncidentes(apelido).then(function(resultado){

       res.status(200).json(resultado);

   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}


module.exports  = {
    graficoCpuHora,
    graficoCpuSemana,
    graficoCpuMes,
    filtroData,
    graficoIncidentes
}