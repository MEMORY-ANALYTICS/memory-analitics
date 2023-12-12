// routes/dashboardHardwareRouter.js

const express = require('express');
const router = express.Router();
const DashboardHardwareController = require('../controllers/dashboardHardwareController');

// Rota para obter dados de hardware
router.get('/servidor', function(req, res){
    DashboardHardwareController.getServidor(req,res);
});

router.get('/cpu/:fkServidor', function(req, res){
    DashboardHardwareController.getCpu(req,res);
})

router.get('/ram/:fkServidor', function(req, res){
    DashboardHardwareController.getRam(req,res);
})

router.get('/disco/:fkServidor', function(req, res){
    DashboardHardwareController.getDisco(req,res);
})

router.get('/getUsoMes/:fkServidor', function(req,res){
    DashboardHardwareController.getUsoMes(req,res);
})

router.get('/getMaxCpu/:fkServidor', function(req,res){
    DashboardHardwareController.getMaxCpu(req,res);
})

router.get('/getMaxRam/:fkServidor', function(req,res){
    DashboardHardwareController.getMaxRam(req,res);
})

router.get('/getMaxDisco/:fkServidor', function(req,res){
    DashboardHardwareController.getMaxDisco(req,res);
})

router.get('/getUltimoCpu/:fkServidor', function(req,res){
    DashboardHardwareController.getUltimoCpu(req,res);
})

router.get('/getUltimoRam/:fkServidor', function(req,res){
    DashboardHardwareController.getUltimoRam(req,res);
})

router.get('/getUltimoDisco/:fkServidor', function(req,res){
    DashboardHardwareController.getUltimoDisco(req,res);
})



module.exports = router;