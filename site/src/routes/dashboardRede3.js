var express = require("express");
var router = express.Router();
var servidorController = require("../controllers/servidorController");


router.get("/listar/:fkEmpresa", function (req, res){
    controllerRede3.listar(req, res);
});

router.get("/pegarIdComponente/:fkServidor", function(req, res) {
    controllerRede3.pegarIdComponente(req, res);
});


module.exports = router; 