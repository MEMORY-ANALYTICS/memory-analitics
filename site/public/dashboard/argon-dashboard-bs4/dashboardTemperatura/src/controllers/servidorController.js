var servidorModel = require("../models/servidorModel");

function getServidor(req,res) {
    servidorModel.getServidor().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}

function getLocal(req,res) {
    servidorModel.getLocal().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    getServidor,
    getLocal
}