var express = require("express");
var router = express.Router();
var servidorController = require("../controllers/servidorController")

router.get("/servidor", function(req,res ){
    servidorController.getServidor(req,res);
});

router.get("/getLocal", function(req,res ){
    servidorController.getLocal(req,res);
});

module.exports = router;