var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getAll", function (req, res) {
    funcionarioController.getAll(req, res);
})

module.exports = router;