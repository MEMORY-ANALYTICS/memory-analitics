var express = require("express");
var router = express.Router();
var servidorController = require("../controllers/servidorController");

router.get("/getInfosServidor/:idServidor", function (req,res){
    servidorController.getInfosServidor(req,res);
});

module.exports = router; 