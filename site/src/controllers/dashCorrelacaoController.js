var dashCorrelacaoModel = require("../models/dashCorrelacaoModel");

// Dados ocorrencias
function selectGraficoOcorrencia(req, res) {
    var fkServidor = req.body.fkServidor;
    var requisitante = req.body.requisitante;
    var fkEmpresa = req.body.fkEmpresa;

    console.log('Estou no Controller selectGraficoOcorrencia com o valor de: fkServidor, tipoComponente -> ' + fkServidor, requisitante)

    dashCorrelacaoModel.selectGraficoOcorrencia(fkServidor, requisitante, fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectGraficoOcorrencia:" + resultado);
            } else {
                res.status(204).send("selectGraficoOcorrencia: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ocorrencias", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// Dados Servidores
function selectServidores(req, res) {
    var fkEmpresa = req.body.fkEmpresa

    console.log('Estou no Controller selectServidores com o valor de:' + fkEmpresa)

    dashCorrelacaoModel.selectServidores(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectServidores:" + resultado);
            } else {
                res.status(204).send("selectServidores: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os servidores", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


// Dados de componentes
    // CPU
function selectCpu(req, res) {
    var fkServidor = req.body.fkServidor;
    var filtroTempo = req.body.filtroTempo;
    var booleanRegressao = req.body.booleanRegressao

    console.log('Estou no Controller selectCpu com o valor de: fkServidor -> ' + fkServidor)

    dashCorrelacaoModel.selectCpu(fkServidor,filtroTempo,booleanRegressao)
        .then(function (resultado) {
            if (resultado.length >= 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectCpu:" + resultado);
            } else {
                res.status(204).send("selectCpu: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("selectCpu: Houve um erro ao buscar", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

    // Ram
function selectRam(req, res) {
    var fkServidor = req.body.fkServidor;
    var filtroTempo = req.body.filtroTempo;
    var booleanRegressao = req.body.booleanRegressao
    console.log('Estou no Controller selectRam com o valor de: fkServidor -> ' + fkServidor)

    dashCorrelacaoModel.selectRam(fkServidor,filtroTempo,booleanRegressao)
        .then(function (resultado) {
            if (resultado.length >= 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectRam:" + resultado);
            } else {
                res.status(204).send("selectRam: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("selectRam: Houve um erro ao buscar", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

    // Disco
function selectDisco(req, res) {
    var fkServidor = req.body.fkServidor;
    var filtroTempo = req.body.filtroTempo;
    var booleanRegressao = req.body.booleanRegressao
    console.log('Estou no Controller selectDisco com o valor de: fkServidor -> ' + fkServidor)

    dashCorrelacaoModel.selectDisco(fkServidor,filtroTempo,booleanRegressao)
        .then(function (resultado) {
            if (resultado.length >= 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectDisco:" + resultado);
            } else {
                res.status(204).send("selectDisco: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("selectDisco: Houve um erro ao buscar a temperatura", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
    // Rede
function selectRede(req, res) {
    var fkServidor = req.body.fkServidor;
    var filtroTempo = req.body.filtroTempo;
    var booleanRegressao = req.body.booleanRegressao
    console.log('Estou no Controller selectRede com o valor de: fkServidor -> ' + fkServidor)

    dashCorrelacaoModel.selectRede(fkServidor,filtroTempo,booleanRegressao)
        .then(function (resultado) {
            if (resultado.length >= 0) {
                res.status(200).json(resultado);
                console.log("Resultado da Controller selectRede:" + resultado);
            } else {
                res.status(204).send("selectRede: Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("selectRede: Houve um erro ao buscar a temperatura", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// Dados de processos 
    // Processos comuns
    function selectProcesso(req, res) {
        var fkServidor = req.body.fkServidor;
        var filtroTempo = req.body.filtroTempo;
        var booleanRegressao = req.body.booleanRegressao
        console.log('Estou no Controller selectProcesso com o valor de: fkServidor -> ' + fkServidor)
    
        dashCorrelacaoModel.selectProcesso(fkServidor,filtroTempo,booleanRegressao)
            .then(function (resultado) {
                if (resultado.length >= 0) {
                    res.status(200).json(resultado);
                    console.log("Resultado da Controller selectProcesso:" + resultado);
                } else {
                    res.status(204).send("selectProcesso: Nenhum resultado encontrado!")
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("selectProcesso: Houve um erro ao buscar a temperatura", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
    // Processos banidos







module.exports = {
    selectServidores,
    selectGraficoOcorrencia,
    selectCpu,
    selectRam,
    selectDisco,
    selectRede,
    selectProcesso
} 