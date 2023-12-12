var express = require("express");
var router = express.Router();

var dashCorrelacaoController = require("../controllers/dashCorrelacaoController");

// Dados de ocorrencias
router.post("/selectGraficoOcorrencia", (req, res) => {
    dashCorrelacaoController.selectGraficoOcorrencia(req, res);
});

// Dados dos servidores
router.post("/selectServidores", (req, res) => {
    dashCorrelacaoController.selectServidores(req, res);
});

// Dados de componentes
    // CPU
router.post("/selectCpu", (req, res) => {
    dashCorrelacaoController.selectCpu(req, res);
});

    // Ram
router.post("/selectRam", (req, res) => {
    dashCorrelacaoController.selectRam(req, res);
});

    // Disco
router.post("/selectDisco", (req, res) => {
    dashCorrelacaoController.selectDisco(req, res);
});

    // Rede
router.post("/selectRede", (req, res) => {
    dashCorrelacaoController.selectRede(req, res);
});

// Dados de processos 
    // Processos comuns
router.post("/selectProcesso", (req, res) => {
    dashCorrelacaoController.selectProcesso(req, res);
});
    // Processos banidos
router.post("/selectTempoRealCpu", (req, res) => {
    dashCorrelacaoController.selectTempoRealCpu(req, res);
});
router.post("/selectTempoRealRam", (req, res) => {
    dashCorrelacaoController.selectTempoRealRam(req, res);
});
router.post("/selectTempoRealProc", (req, res) => {
    dashCorrelacaoController.selectTempoRealProc(req, res);
});

module.exports = router;