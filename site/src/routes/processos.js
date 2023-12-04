const express = require('express');
const router = express.Router();

const controllerProcessos = require('../controllers/controllerProcessos');

router.get("/buscarMedidas", (req, res) => {
    controllerProcessos.buscarMedidasEmTempoReal(req, res);
});

router.get("/getAllProcessosBanidos/:fkServer", (req, res) => {
    controllerProcessos.getAllProcessosBanidos(req, res);
});

module.exports = router;