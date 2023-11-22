var express = require("express");
var router = express.Router();

var graficoCoreHoraController = require("../controllers/graficoCoreHoraController")

router.get("/graficoCoreHora", function(req,res){
    graficoCoreHoraController.graficoCoreHora(req,res);
});

module.exports = router;