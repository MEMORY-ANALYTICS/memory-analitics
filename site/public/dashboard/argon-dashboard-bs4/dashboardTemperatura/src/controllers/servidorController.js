var servidorModel = require("../models/servidorModel");

function getServidor(req,res) {
    var email = req.body.email
    servidorModel.getServidor(email).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        // res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    getServidor
}