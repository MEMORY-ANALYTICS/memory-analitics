var express = require("express");
var router = express.Router();

var dashboardGController = require("../controllers/dashboardGController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getServInstaveis/:fkEmpresa", function (req, res){
    dashboardGController.getServInstaveis(req, res);
});

router.get("/getEstadoGeralServ/:fkEmpresa", function (req, res){
    dashboardGController.getEstadoGeralServ(req, res);
});
module.exports = router;

