var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController")

router.get("/graficoCoreHora", function(req,res){
    graficoController.graficoCoreHora(req,res);
});

router.get("/graficoCoreSemana", function(req,res){
    graficoController.graficoCoreSemana(req,res);
});

module.exports = router;