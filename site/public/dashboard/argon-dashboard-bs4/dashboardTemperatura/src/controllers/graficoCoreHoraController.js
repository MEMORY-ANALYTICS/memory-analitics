var graficoModel = require("../models/graficoModel")

function graficoCoreHora(req,res){
     // var idServidor = req.body.idServidor;
    graficoModel.graficoCoreHora().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}


module.exports  = {
    graficoCoreHora
}