// routes/dashboardHardwareRouter.js

const express = require('express');
const router = express.Router();
const DashboardHardwareController = require('../controllers/dashboardHardwareController');

// Rota para obter dados de hardware
router.get('/', DashboardHardwareController.getHardwareData);

module.exports = router;