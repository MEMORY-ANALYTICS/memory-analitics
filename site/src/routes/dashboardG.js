var express = require("express");
var router = express.Router();

var dashboardGController = require("../controllers/dashboardGController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getDowntime/:fkEmpresa", function (req, res) {
    dashboardGController.getDowntime(req, res);
})

router.get("/getServInstaveis/:nomeEmpresa", function (req, res) {
    dashboardGController.getServInstaveis(req, res);
});

router.get("/getEstadoGeralServ/:nomeEmpresa", function (req, res) {
    dashboardGController.getEstadoGeralServ(req, res);
});

router.get("/getCompProblematico/:fkEmpresa", function (req, res) {
    dashboardGController.getCompProblematico(req, res);
});

router.get("/obterDadosGrafico/:nomeEmpresa", function (req, res) {
    dashboardGController.obterDadosGrafico(req, res);
});

router.get("/tempo-real/:nomeEmpresa", function (req, res) {
    dashboardGController.buscarMedidasEmTempoReal(req, res);
})


module.exports = router;

