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
function getLastId(req, res){	
    var fkEmpresa = req.params.fkEmpresa;	
    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    funcionarioModel.getLastId(fkEmpresa)	
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

function getInfosFuncionario(req, res){	
    var idFuncionario = req.params.idFuncionario;	
    console.log('Estou no Controller com o valor de:' + idFuncionario)	

    funcionarioModel.getInfosFuncionario(idFuncionario)	
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
    var telefoneFunc = req.body.telefoneFunc;
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
        funcionarioModel.cadastrarFuncionario(nomeFunc,emailFunc,telefoneFunc,permissao,fkEmpresa,fkCargo,fkSupervisor)
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

function cadastrarLogin(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.email;
    var senha = req.body.senha;
    var fkFuncionario = req.body.fkFuncionario
    // Faça as validações dos valores
    if (email == undefined) {
        res.status(400).send("email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("senha está undefined!");
    } else if (fkFuncionario == undefined) {
        res.status(400).send("fkFuncionario está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo FuncModel.js
        funcionarioModel.cadastrarLogin(email,senha,fkFuncionario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de Login! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deleteFuncionario(req, res){	
    var idFuncionario = req.params.idFuncionario;	
    console.log('Estou no Controller com o valor de:' + idFuncionario)	

    funcionarioModel.deleteFuncionario(idFuncionario)	
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

function deleteLogin(req, res){	
    var fkFuncionario = req.params.fkFuncionario;	
    console.log('Estou no Controller com o valor de:' + fkFuncionario)	

    funcionarioModel.deleteLogin(fkFuncionario)	
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

module.exports = {	
    getAll,
    cadastrarFuncionario,
    getInfosFuncionario,
    getLastId,
    cadastrarLogin,
    deleteFuncionario,
    deleteLogin
};	
