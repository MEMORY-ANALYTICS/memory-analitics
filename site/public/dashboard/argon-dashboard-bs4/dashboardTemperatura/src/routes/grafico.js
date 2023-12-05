var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController")

router.get("/graficoCpuHora/:apelidoServidor", function(req,res){
    graficoController.graficoCpuHora(req,res);
});

router.get("/graficoCpuSemana/:apelidoServidor", function(req,res){
    graficoController.graficoCpuSemana(req,res);
});

router.get("/graficoCpuMes/:apelidoServidor", function(req,res){
    graficoController.graficoCpuMes(req,res);
});

router.post("/filtroData", function(req,res){
    graficoController.filtroData(req,res);
});

router.get(`/graficoIncidentes/:apelidoServidor`, function(req,res){
    graficoController.graficoIncidentes(req,res);
});


module.exports = router;