function selectServidores() {
    fetch("/dashCorrelacao/selectServidores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresa: sessionStorage.EMPRESA_USUARIO
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log("json comprimento")
                console.log(json.length)
                console.log("json colchetes")
                console.log(json[0])
                for (var i = 0; i < json.length; i++) {
                    apelidosServidores.push([json[i].apelidoServidor, json[i].idServidor]);
                }
                for (var i = 0; i < apelidosServidores.length - 1; i++) {
                    console.log(apelidosServidores[i][1], apelidosServidores[i][0])
                    var option = document.createElement('option');
                    option.value = apelidosServidores[i][1];
                    option.text = apelidosServidores[i][0];
                    listaServidores.appendChild(option);
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectCpu() {
    var fkServidorVar = listaServidores.value
    fetch("/dashCorrelacao/selectCpu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkServidor: fkServidorVar,
            filtroTempo: filtroTempo
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (typeof json === 'undefined') {
                    Swal.fire({
                        icon: "error",
                        title: "Sem dados!",
                        text: `Este servidor ainda não tem dados de CPU!`,
                        footer: 'Entre em contato com um Adminstrador para solucionar seu problema!'
                    });
                } else {
                    console.log("SelectCPU")
                    console.log(`JSON Completo: ${json} \n JSON Tamanho: ${json.length} \n JSON Index 0:`)
                    console.log(json[0])
                    for (var i = 0; i < json.length - 1; i++) {
                        if (json[i].tipoMedida == "% de Uso") {
                            dataHora.push(json[i].dataHora)
                            componentes.cpu.registrosCpu.percentUso.push(json[i].registrosCpu)
                        } else if (json[i].detalheRegistro == "Temperatura do processador") {
                            componentes.cpu.registrosCpu.temperatura.push(json[i].registrosCpu)
                        } else if (json[i].tipoMedida == "Megahertz") {
                            componentes.cpu.registrosCpu.frequencia.push(json[i].registrosCpu)
                        }
                    }
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectRam() {
    var fkServidorVar = listaServidores.value
    fetch("/dashCorrelacao/selectRam", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkServidor: fkServidorVar,
            filtroTempo: filtroTempo

        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (typeof json[0] === 'undefined') {
                    Swal.fire({
                        icon: "error",
                        title: "Sem dados!",
                        text: `Este servidor ainda não tem dados de Ram!`,
                        footer: 'Entre em contato com um Adminstrador para solucionar seu problema!'
                    });
                } else {
                    console.log("SelectRAM")
                    console.log(`JSON Completo: ${json} \n JSON Tamanho: ${json.length} \n JSON Index 0:`)
                    console.log(json[0])
                    for (var i = 0; i < json.length - 1; i++) {
                        componentes.ram.registrosRam.push(json[i].registrosRam)
                    }
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectDisco() {
    var fkServidorVar = listaServidores.value
    fetch("/dashCorrelacao/selectDisco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkServidor: fkServidorVar,
            filtroTempo: filtroTempo

        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (typeof json[0] === 'undefined') {
                    Swal.fire({
                        icon: "error",
                        title: "Sem dados!",
                        text: `Este servidor ainda não tem dados de Disco!`,
                        footer: 'Entre em contato com um Adminstrador para solucionar seu problema!'
                    });
                } else {
                    console.log("SelectDISCO")
                    console.log(`JSON Completo: ${json} \n JSON Tamanho: ${json.length} \n JSON Index 0:`)
                    console.log(json[0])
                    for (var i = 0; i < json.length - 1; i++) {
                        if (json[i].tipoMedida == "% de Uso") {
                            componentes.disco.registrosDisco.percentUso.push(json[i].registrosDisco)
                        } else if (json[i].tipoMedida == "Gigabyte") {
                            componentes.disco.registrosDisco.armazenamento.push(json[i].registrosDisco)
                        }
                    }
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectRede() {
    var fkServidorVar = listaServidores.value
    fetch("/dashCorrelacao/selectRede", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkServidor: fkServidorVar,
            filtroTempo: filtroTempo

        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (typeof json[0] === 'undefined') {
                    Swal.fire({
                        icon: "error",
                        title: "Sem dados!",
                        text: `Este servidor ainda não tem dados de Rede!`,
                        footer: 'Entre em contato com um Adminstrador para solucionar seu problema!'
                    });
                } else {                    
                    console.log("SelectREDE")
                    console.log(`JSON Completo: ${json} \n JSON Tamanho: ${json.length} \n JSON Index 0:`)
                    console.log(json[0])
                    for (var i = 0; i < json.length - 1; i++) {
                        if (json[i].detalheRegistro == "Recebidos Rede" && json[i].tipoMedida == "Pacotes") {
                            componentes.rede.registrosRede.pacotesRecebidos.push(json[i].registrosRede)
                        } else if (json[i].detalheRegistro == "Enviados Rede" && json[i].tipoMedida == "Pacotes") {
                            componentes.rede.registrosRede.pacotesEnviados.push(json[i].registrosRede)
                        }else if (json[i].detalheRegistro == "Recebidos Rede" && json[i].tipoMedida == "MB") {
                            componentes.rede.registrosRede.MbRecebidos.push(json[i].registrosRede)
                        }else if (json[i].detalheRegistro == "Enviados Rede" && json[i].tipoMedida == "MB") {
                            componentes.rede.registrosRede.MbEnviados.push(json[i].registrosRede)
                        }else if (json[i].tipoMedida == "MBps") {
                            componentes.rede.registrosRede.mbpsTransmissao.push(json[i].registrosRede)
                        }else if (json[i].tipoMedida == "ms") {
                            componentes.rede.registrosRede.msRede.push(json[i].registrosRede)
                        }
                    }
                }

            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}
function selectGraficoOcorrenciaComponente() {
    var requisitanteVar
    var fkServidorVar = listaServidores.value
    requisitanteVar = 'Componente'
    fetch("/dashCorrelacao/selectGraficoOcorrencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresa: sessionStorage.EMPRESA_USUARIO,
            fkServidor: fkServidorVar,
            requisitante: requisitanteVar
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json[0])
                if (requisitanteVar == 'Componente') {
                    qtdOcorrenciasComponente = json[0].TotalChamados;
                    ocorrenciasComponente = requisitanteVar
                    graficoOcorrencias.update()
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectGraficoOcorrenciaRede() {
    var requisitanteVar
    var fkServidorVar = listaServidores.value
    requisitanteVar = 'Rede'
    fetch("/dashCorrelacao/selectGraficoOcorrencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresa: sessionStorage.EMPRESA_USUARIO,
            fkServidor: fkServidorVar,
            requisitante: requisitanteVar
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (requisitanteVar == 'Rede') {
                    qtdOcorrenciasRede = json[0].TotalChamados
                    ocorrenciasRede = requisitanteVar
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectGraficoOcorrenciaTemperatura() {
    var requisitanteVar
    var fkServidorVar = listaServidores.value
    requisitanteVar = 'Temperatura'
    fetch("/dashCorrelacao/selectGraficoOcorrencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresa: sessionStorage.EMPRESA_USUARIO,
            fkServidor: fkServidorVar,
            requisitante: requisitanteVar
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (requisitanteVar == 'Temperatura') {
                    qtdOcorrenciasTemperatura = json[0].TotalChamados
                    ocorrenciasTemperatura = requisitanteVar
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function selectGraficoOcorrenciaProcesso() {
    var requisitanteVar
    var fkServidorVar = listaServidores.value
    requisitanteVar = 'Processo'
    fetch("/dashCorrelacao/selectGraficoOcorrencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresa: sessionStorage.EMPRESA_USUARIO,
            fkServidor: fkServidorVar,
            requisitante: requisitanteVar
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (requisitanteVar == 'Processo') {
                    qtdOcorrenciasProcessos = json[0].TotalChamados
                }
            });
        } else {
            resposta.text().then(textoErro => {
                console.error(textoErro);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}