var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/kpiController")

router.get("/qtdIncidentes", function(req,res ){
    kpiController.qtdIncidentes(req,res);
});

router.get("/MedTemp", function(req,res ){
    kpiController.MedTemp(req,res);
});

router.get("/CpuTempMax", function(req,res ){
    kpiController.CpuTempMax(req,res);
});
router.get("/CpuTempMin", function(req,res ){
    kpiController.CpuTempMin(req,res);
});

module.exports = router;