var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/insertTempController")

router.get("/qtdIncidentes", function(req,res ){
    kpiController.qtdIncidentes(req,res);
});


module.exports = router;