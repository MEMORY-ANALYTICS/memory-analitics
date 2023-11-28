var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController")

router.get("/graficoCoreHora", function(req,res){
    graficoController.graficoCoreHora(req,res);
});

router.get("/graficoCoreSemana", function(req,res){
    graficoController.graficoCoreSemana(req,res);
});

router.get("/graficoCoreMes", function(req,res){
    graficoController.graficoCoreMes(req,res);
});

router.get("/graficoCpuHora", function(req,res){
    graficoController.graficoCpuHora(req,res);
});

router.get("/graficoCpuSemana", function(req,res){
    graficoController.graficoCpuSemana(req,res);
});

router.get("/graficoCpuMes", function(req,res){
    graficoController.graficoCpuMes(req,res);
});

module.exports = router;