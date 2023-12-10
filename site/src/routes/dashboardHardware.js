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

router.get('/ram', function(req, res){
    DashboardHardwareController.getRam(req,res);
})

router.get('/disco', function(req, res){
    DashboardHardwareController.getDisco(req,res);
})

module.exports = router;