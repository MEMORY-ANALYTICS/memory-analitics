var express = require("express");
var router = express.Router();

var dashboardRedeController = require("../controllers/controllerRede");

router.get("/listar/:fkEmpresa", function (req, res) {
    dashboardRedeController.listar(req, res);
});

module.exports = router; 