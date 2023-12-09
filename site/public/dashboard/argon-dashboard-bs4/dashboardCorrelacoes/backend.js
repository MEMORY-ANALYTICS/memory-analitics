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
    fetch("/dashCorrelacao/selectCpu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                // Testes
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














// function selectGraficoOcorrenciaComponente() {
//     var requisitanteVar
//     var fkServidorVar = listaServidores.value
//     requisitanteVar = 'Componente'
//     fetch("/dashCorrelacao/selectGraficoOcorrencia", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             fkEmpresa: sessionStorage.EMPRESA_USUARIO,
//             fkServidor: fkServidorVar,
//             requisitante: requisitanteVar
//         })
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 console.log(json[0])
//                 if (requisitanteVar == 'Componente') {
//                     qtdOcorrenciasComponente = json[0].TotalChamados;
//                     ocorrenciasComponente = requisitanteVar
//                     graficoOcorrencias.update()
//                 }
//             });
//         } else {
//             resposta.text().then(textoErro => {
//                 console.error(textoErro);
//             });
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//     });
// }

// function selectGraficoOcorrenciaRede() {
//     var requisitanteVar
//     var fkServidorVar = listaServidores.value
//     requisitanteVar = 'Rede'
//     fetch("/dashCorrelacao/selectGraficoOcorrencia", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             fkEmpresa: sessionStorage.EMPRESA_USUARIO,
//             fkServidor: fkServidorVar,
//             requisitante: requisitanteVar
//         })
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 if (requisitanteVar == 'Rede') {
//                     qtdOcorrenciasRede = json[0].TotalChamados
//                     ocorrenciasRede = requisitanteVar
//                 }
//             });
//         } else {
//             resposta.text().then(textoErro => {
//                 console.error(textoErro);
//             });
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//     });
// }

// function selectGraficoOcorrenciaTemperatura() {
//     var requisitanteVar
//     var fkServidorVar = listaServidores.value
//     requisitanteVar = 'Temperatura'
//     fetch("/dashCorrelacao/selectGraficoOcorrencia", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             fkEmpresa: sessionStorage.EMPRESA_USUARIO,
//             fkServidor: fkServidorVar,
//             requisitante: requisitanteVar
//         })
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 if (requisitanteVar == 'Temperatura') {
//                     qtdOcorrenciasTemperatura = json[0].TotalChamados
//                     ocorrenciasTemperatura = requisitanteVar
//                 }
//             });
//         } else {
//             resposta.text().then(textoErro => {
//                 console.error(textoErro);
//             });
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//     });
// } 

// function selectGraficoOcorrenciaProcesso() {
//     var requisitanteVar
//     var fkServidorVar = listaServidores.value
//     requisitanteVar = 'Processo'
//     fetch("/dashCorrelacao/selectGraficoOcorrencia", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             fkEmpresa: sessionStorage.EMPRESA_USUARIO,
//             fkServidor: fkServidorVar,
//             requisitante: requisitanteVar
//         })
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 if (requisitanteVar == 'Processo') {
//                     qtdOcorrenciasProcessos = json[0].TotalChamados
//                 }
//             });
//         } else {
//             resposta.text().then(textoErro => {
//                 console.error(textoErro);
//             });
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//     });
// }
