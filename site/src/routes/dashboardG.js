var express = require("express");
var router = express.Router();

var dashboardGController = require("../controllers/dashboardGController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getServIntaveis/:fkEmpresa", function (req, res){
    dashboardGController.getServIntaveis(req, res);
});
module.exports = router;

