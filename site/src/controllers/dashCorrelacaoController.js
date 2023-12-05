var dashCorrelacaoModel = require("../models/dashCorrelacaoModel");

function selectServidores(req, res){	
    var fkEmpresa = req.body.fkEmpresa

    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    dashCorrelacaoModel.selectServidores(fkEmpresa)	
    .then(function (resultado) {	
        if (resultado.length > 0) {	
            res.status(200).json(resultado);	
            console.log("Resultado da Controller:"+ resultado);	
        } else {	
            res.status(204).send("Nenhum resultado encontrado!")	
        }	
    }).catch(function (erro) {	
        console.log(erro);	
        console.log("Houve um erro ao buscar os Servidores", erro.sqlMessage);	
        res.status(500).json(erro.sqlMessage);	
    });	
}

function selectGraficoOcorrencia(req, res){	
    var fkEmpresa = req.body.fkEmpresa

    console.log('Estou no Controller com o valor de:' + fkEmpresa)	

    dashCorrelacaoModel.selectGraficoOcorrencia(fkEmpresa)	
    .then(function (resultado) {	
        if (resultado.length > 0) {	
            res.status(200).json(resultado);	
            console.log("Resultado da Controller:"+ resultado);	
        } else {	
            res.status(204).send("Nenhum resultado encontrado!")	
        }	
    }).catch(function (erro) {	
        console.log(erro);	
        console.log("Houve um erro ao buscar as ocorrencias", erro.sqlMessage);	
        res.status(500).json(erro.sqlMessage);	
    });	
}

module.exports = {
    selectServidores,
    selectGraficoOcorrencia
} 