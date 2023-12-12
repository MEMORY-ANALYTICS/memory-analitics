var express = require("express");
var router = express.Router();
var insertTempController = require("../controllers/insertTempController")

router.post("/inserirDados", function(req,res ){
    insertTempController.insertTemp(req,res);
});

module.exports = router;