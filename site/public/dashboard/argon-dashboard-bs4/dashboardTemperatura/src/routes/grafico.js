var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController")

router.get("/graficoCpuHora", function(req,res){
    graficoController.graficoCpuHora(req,res);
});

router.get("/graficoCpuSemana", function(req,res){
    graficoController.graficoCpuSemana(req,res);
});

router.get("/graficoCpuMes", function(req,res){
    graficoController.graficoCpuMes(req,res);
});

router.get("/filtroData", function(req,res){
    graficoController.filtroData(req,res);
});


module.exports = router;