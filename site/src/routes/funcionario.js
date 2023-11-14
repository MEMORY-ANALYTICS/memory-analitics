var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/getAll/:fkEmpresa", function (req, res){
    funcionarioController.getAll(req, res);
});
router.post("/cadastrarFuncionario", function (req, res){
    funcionarioController.cadastrarFuncionario(req, res);
});
router.get("/getInfosFuncionario/:idFuncionario", function (req, res){
    funcionarioController.getInfosFuncionario(req, res);
});
router.get("/getLastId/:fkEmpresa", function (req, res){
    funcionarioController.getLastId(req, res);
});
module.exports = router;