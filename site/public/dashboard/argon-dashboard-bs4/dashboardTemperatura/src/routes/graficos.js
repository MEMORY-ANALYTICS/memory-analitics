var express = require("express");
var router = express.router();

var graficoCoreHoraController = require("../controllers/graficoCoreHoraController")

router.get("/graficoCoreHora", function(req,res){
    graficoCoreHoraController.graficoCoreHora(req,res);
});

module.exports = router;