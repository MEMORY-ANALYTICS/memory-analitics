// controllers/dashboardHardwareController.js

const DashboardHardwareModel = require('../models/dashboardHardwareModel');

const DashboardHardwareController = {
getHardwareData: async (req, res) => {
    try {
    const ramData = await DashboardHardwareModel.getRamUsage();
    const cpuData = await DashboardHardwareModel.getCpuUsage();
    const diskData = await DashboardHardwareModel.getDiskUsage();

    res.json({
        ramUsage: ramData,
        cpuUsage: cpuData,
        diskUsage: diskData,
    });
    } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados de hardware.');
    }
},
};

module.exports = DashboardHardwareController;
