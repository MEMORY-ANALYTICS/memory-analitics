var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/kpiController")

router.get("/MedTempIdeal", function(req,res ){
    kpiController.MedTempIdeal(req,res);
});

router.get("/MedTempAtual", function(req,res ){
    kpiController.MedTempAtual(req,res);
});

router.get("/CoreTempMax", function(req,res ){
    kpiController.CoreTempMax(req,res);
});
router.get("/CoreTempMin", function(req,res ){
    kpiController.CoreTempMin(req,res);
});

module.exports = router;