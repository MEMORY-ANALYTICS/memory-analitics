var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/insertTempController")

router.post("/insertTemp", function(req,res ){
    insertTempController.insertTemp(req,res);
});


module.exports = router;