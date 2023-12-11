var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController")

router.post("/graficoCpuHora", function(req,res){
    graficoController.graficoCpuHora(req,res);
});

router.post("/graficoCpuSemana", function(req,res){
    graficoController.graficoCpuSemana(req,res);
});

router.post("/graficoCpuMes", function(req,res){
    graficoController.graficoCpuMes(req,res);
});

router.post("/filtroData", function(req,res){
    graficoController.filtroData(req,res);
});

router.post(`/graficoIncidentes`, function(req,res){
    graficoController.graficoIncidentes(req,res);
});


module.exports = router;