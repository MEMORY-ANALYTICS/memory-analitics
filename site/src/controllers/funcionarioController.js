var funcionarioModel = require("../models/funcionarioModel");	

function getAll(req, res){	
    var fkEmpresa = req.params.fkEmpresa;	
    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    funcionarioModel.getAll(fkEmpresa)	
    .then(function (resultado) {	
        if (resultado.length > 0) {	
            res.status(200).json(resultado);	
            console.log("Resultado da Controller:"+ resultado);	
        } else {	
            res.status(204).send("Nenhum resultado encontrado!")	
        }	
    }).catch(function (erro) {	
        console.log(erro);	
        console.log("Houve um erro ao buscar o usuário", erro.sqlMessage);	
        res.status(500).json(erro.sqlMessage);	
    });	
}	

function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeFunc = req.body.nomeFunc;
    var emailFunc = req.body.emailFunc;
    var telefoneFunc = req.body.telCelularFunc;
    var permissao = req.body.permissao;
    var fkEmpresa = req.body.fkEmpresa;
    var fkCargo = req.body.fkCargo;
    var fkSupervisor = req.body.fkSupervisor
    // Faça as validações dos valores
    if (nomeFunc == undefined) {
        res.status(400).send("nomeFunc está undefined!");
    } else if (emailFunc == undefined) {
        res.status(400).send("emailFunc está undefined!");
    } else if (telefoneFunc == undefined) {
        res.status(400).send("telefoneFunc está undefined!");
    } else if (permissao == undefined) {
        res.status(400).send("permissao está undefined!");
    }
    else if (fkEmpresa == undefined) {
        res.status(400).send("fkEmpresa está undefined!");
    }
    else if(fkCargo == undefined){
        res.status(400).send("fkCargo está undefined!");
    } 
    else if(fkSupervisor == undefined){
        res.status(400).send("fkSupervisor está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo FuncModel.js
        funcionarioModel.cadastrarFuncionario()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {	
    getAll,
    cadastrarFuncionario
};	
