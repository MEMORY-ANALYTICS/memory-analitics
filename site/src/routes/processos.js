var express = require("express");
var router = express.Router();

var processoController = require("../controllers/controllerProcessos");

router.get("/ultimas/:fkServer", function (req, res) {
    processoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkServer", function (req, res) {
    processoController.buscarMedidasEmTempoReal(req, res);
});
router.get("/getAllProcessosBanidos/:fkServer", function (req, res) {
    processoController.getAllProcessosBanidos(req, res);
});
router.get("/getQtdProcessosBanidos/:fkServer", function (req, res) {
    processoController.getQtdProcessosBanidos(req, res);
});
router.post("/adicionarProcesso", function (req, res) {
    processoController.adicionarProcesso(req, res);
});

module.exports = router;