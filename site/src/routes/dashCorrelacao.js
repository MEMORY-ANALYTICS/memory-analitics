var express = require("express");
var router = express.Router();

var dashCorrelacaoController = require("../controllers/dashCorrelacaoController");

router.post("/selectGraficoOcorrencia", (req, res) => {
    dashCorrelacaoController.selectGraficoOcorrencia(req, res);
});

router.post("/selectServidores", (req, res) => {
    dashCorrelacaoController.selectServidores(req, res);
});

module.exports = router;