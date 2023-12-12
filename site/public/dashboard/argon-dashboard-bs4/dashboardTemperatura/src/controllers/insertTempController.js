var graficoModel = require("../models/insertTempModel")


function insertTemp(req,res){
    var idServidor = req.body.idServidor;
    var valorRegistro = req.body.valorRegistro;
    var dtHoraRegistro = req.body.dtHoraRegistro;
    graficoModel.insertTemp(idServidor,valorRegistro, dtHoraRegistro).then(function(resultado){
       res.status(200).json(resultado);
   }).catch(function(erro){
       // res.status(500).json(erro.sqlMessage);
   })
}

module.exports  = {
    insertTemp
}