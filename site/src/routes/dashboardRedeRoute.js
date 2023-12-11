var express = require("express");
var router = express.Router();

var dashboardRedeController = require("../controllers/controllerRede");

router.get("/listar/:fkEmpresa", function (req, res) {
    dashboardRedeController.listar(req, res);
});
router.get("/pegarIdComponente/:fkServidor", function (req, res) {
    dashboardRedeController.pegarIdComponente(req, res);
});

router.get("/pegarKpiVelocidade/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarKpiVelocidade(req, res);
});

router.get("/pegarKpiLatencia/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarKpiLatencia(req, res);
});

router.get("/pegarKpiPacotes/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarKpiPacotes(req, res);
});
// -------------------------------------------- Fim Kpis - Retorno de variáveis ------------------------------------------------

router.get("/pegarLatenciaAtual/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarLatenciaAtual(req, res);
});

router.get("/pegarPacotesEnviados/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarPacotesEnviados(req, res);
});

router.get("/pegarPacotesRecebidos/:fkComponente/:dataAtual", function (req, res) {
    dashboardRedeController.pegarPacotesRecebidos(req, res);
});
module.exports = router; 