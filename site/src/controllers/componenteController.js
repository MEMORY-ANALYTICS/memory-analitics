var componenteModel = require("../models/componenteModel");

function getAll(req, res){	
    var fkEmpresa = req.params.fkEmpresa;	
    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    componenteModel.getAll(fkEmpresa)	
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

function cadastrarComponente(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fabricante = req.body.fabricante_componente;
    var nomeModelo = req.body.nomeModelo_componente;
    var tipoComponente = req.body.tipo_componente;
    var limiteMin = req.body.limiteMin_componente;
    var limiteMax = req.body.limiteMax_componente;
    var fkServidor = req.body.fkServidor;
    // Faça as validações dos valores
     if (fabricante == undefined) {
        res.status(400).send("fabricante está undefined!");
    } else if (nomeModelo == undefined) {
        res.status(400).send("numeroSerieServidor está undefined!");
    } else if (tipoComponente == undefined) {
        res.status(400).send("ipServidor está undefined!");
    }
    else if (limiteMin == undefined) {
        res.status(400).send("fkEmpresa está undefined!");
    }
    else if (limiteMax == undefined) {
        res.status(400).send("limiteMax está undefined!");
    }
    else if (fkServidor == undefined) {
        res.status(400).send("fkServidor está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        componenteModel.cadastrarComponente(fabricante, nomeModelo, tipoComponente,limiteMin,limiteMax,fkServidor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de servidor! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrarComponente,
    getAll
} 