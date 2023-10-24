var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res){
    servidorController.cadastrarServidor(req, res);
});
router.get("/getAll/:fkEmpresa", function (req, res){
    servidorController.getAll(req, res);
});
module.exports = router; 