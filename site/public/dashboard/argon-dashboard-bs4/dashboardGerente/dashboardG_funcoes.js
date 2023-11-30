
// Alterando nome do Login
nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;


// Pegando estado geral dos servidores

function getEstadoGeralServ() {
    fetch(`/dashboardG/getEstadoGeralServ/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                servSeguros = 0
                servAlertas = 0
                servCriticos = 0


                for (var i = 0; i < json.length; i++) {
                    idEstado = json[i].Estado
                    qtdServidores = json[i].qtdServers

                    if (idEstado === 1) {
                        servSeguros = qtdServidores
                    } else if (idEstado === 2) {
                        servAlertas = qtdServidores
                    } else if (idEstado === 3) {
                        servCriticos = qtdServidores
                    }
                }

                Highcharts.chart('chart_Geral', {
                    chart: {
                        type: 'pie',
                        height: 345
                    },
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        series: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                distance: -50,
                                format: '{point.percentage:.1f}%',
                                style: {
                                    fontSize: '1.2em',
                                    textOutline: 'none',
                                    opacity: 0.7
                                },
                                filter: {
                                    operator: '>',
                                    property: 'percentage',
                                    value: 0
                                }
                            },
                            showInLegend: true
                        }
                    },
                    series: [
                        {
                            name: 'Servidores',
                            colorByPoint: true,
                            data: [
                                {
                                    name: 'Seguro',
                                    y: servSeguros,
                                    color: '#50BEFF'
                                },
                                {
                                    name: 'Alerta',
                                    y: servAlertas,
                                    color: '#FFFB4F'
                                },
                                {
                                    name: 'Crítico',
                                    y: servCriticos,
                                    color: '#FF4F56'
                                }
                            ]
                        }
                    ]
                });


                // const ctx1 = document.getElementById('chart-bars');

                // new Chart(ctx1, {
                //     type: 'pie',
                //     data: {
                //         labels: ['Seguro', 'Alerta', 'Crítico'],
                //         datasets: [{
                //             label: '# of Votes',
                //             data: [servSeguros, servAlertas, servCriticos],
                //             borderWidth: 1
                //         }]
                //     },
                //     options: {
                //         scales: {
                //             y: {
                //                 beginAtZero: true
                //             }
                //         }
                //     }
                // });

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}


// Pegando picos de uso
var mesPicoDeUso = 0;
var vt_teste = [1, 3, 4, 6, 8, 4]

function obterDadosGrafico() {
    fetch(`/dashboardG/obterDadosGrafico/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                var vt_dadosPicoDeUso = [];
                var vt_diaPicoDeUso = [];

                for (i = 0; i < json.length; i++) {
                    var registro = json[i];
                    vt_dadosPicoDeUso.push(registro.picosDeUso)
                    vt_diaPicoDeUso.push(registro.Dia)
                }

                mesPicoDeUso = json[0].Mes

                switch (mesPicoDeUso) {
                    case '1':
                        nomeDoMes = 'Janeiro';
                        break;
                    case '2':
                        nomeDoMes = 'Fevereiro';
                        break;
                    case '3':
                        nomeDoMes = 'Março';
                        break;
                    case '4':
                        nomeDoMes = 'Abril';
                        break;
                    case '5':
                        nomeDoMes = 'Maio';
                        break;
                    case '6':
                        nomeDoMes = 'Junho';
                        break;
                    case '7':
                        nomeDoMes = 'Julho';
                        break;
                    case '8':
                        nomeDoMes = 'Agosto';
                        break;
                    case '9':
                        nomeDoMes = 'Setembro';
                        break;
                    case '10':
                        nomeDoMes = 'Outubro';
                        break;
                    case '11':
                        nomeDoMes = 'Novembro';
                        break;
                    case '12':
                        nomeDoMes = 'Dezembro';
                        break;
                }

                var valoresNumericos = vt_dadosPicoDeUso.map(function (valor) {
                    return parseInt(valor, 10); // O segundo argumento 10 indica a base numérica (decimal)
                });

                // Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
                Highcharts.chart('chartTeste', {
                    chart: {
                        type: 'spline',
                        backgroundColor: 'white',
                        height: '360px',
                        scrollablePlotArea: {
                            minWidth: 2,
                            scrollPositionX: 1
                        }
                    },
                    title: {
                        text: `${nomeDoMes} (${mesPicoDeUso})`,
                        style: {
                            color: 'black'
                        }
                    },
                    xAxis: {
                        categories: vt_diaPicoDeUso,
                        title: {
                            text: 'Dias',
                            style: {
                                color: 'black'
                            }
                        },
                        labels: {
                            style: {
                                color: 'black'
                            }
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Quantidade registros',
                            style: {
                                color: 'black'
                            }
                        }
                    },
                    plotOptions: {
                        spline: {
                            lineWidth: 4,
                            states: {
                                hover: {
                                    lineWidth: 5
                                }
                            },
                            marker: {
                                enabled: false
                            },
                        }
                    },
                    series: [{
                        name: 'Registro Críticos',
                        data: valoresNumericos
                    }]
                });



            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

var segundos;
var porcentagem;
function getDowntime() {
    fetch(`/dashboardG/getDowntime/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                segundos = json[0].tempoDowntime

                if (segundos <= 60) {
                    downtime.innerHTML = `${segundos}s`
                } else if (segundos <= 3600) {
                    const minutos = Math.floor(segundos / 60);
                    const segundosRestantes = segundos % 60;
                    downtime.innerHTML = `${minutos}m ${segundosRestantes}s `
                } else if (segundos <= 86400) {
                    const horas = Math.floor(segundos / 3600); // 3600 segundos em uma hora
                    const minutos = Math.floor((segundos % 3600) / 60);
                    const segundosRestantes = segundos % 60;
                    downtime.innerHTML = `${horas}h ${minutos}m ${segundosRestantes}s `
                } else {
                    const dias = Math.floor(segundos / 86400); // 86400 segundos em um dia
                    const horas = Math.floor((segundos % 86400) / 3600);
                    const minutos = Math.floor(((segundos % 86400) % 3600) / 60);
                    const segundosRestantes = segundos % 60;
                    downtime.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundosRestantes}s `
                }

                if (segundos > 600) {
                    porcentagem = (100 * segundos) / 600 - 100
                    downtimePorcen.innerHTML = `+${porcentagem.toFixed(2)}%`
                    downtime.style = "color: #f5365c;"
                    downtimePorcen.style = "color: #f5365c;"
                    icon_downtime.classList.remove("bg-gradient-info")
                    icon_downtime.classList.add("bg-gradient-danger")
                } else {
                    porcentagem = (100 * segundos) / 600
                    downtimePorcen.innerHTML = `${porcentagem.toFixed(2)}%`
                    downtime.style = "color: #32325d;"
                    downtimePorcen.style = "color: #32325d;"
                    icon_downtime.classList.remove("bg-gradient-danger")
                    icon_downtime.classList.add("bg-gradient-info")
                }
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                // downtime.innerHTML = segundos
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function getCompProblematico() {
    fetch(`/dashboardG/getCompProblematico/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {
                var numcompProblematico = json[0].nomeComponente
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                compProblematico.innerHTML = numcompProblematico
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function getChamados() {
    fetch(`/dashboardG/getChamados/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {
                var qtdPicos = json[0].getChamados
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                qtdChamados.innerHTML = qtdPicos
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function getServCriticos() {
    fetch(`/dashboardG/getServCriticos/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var numServCriticos = json[0].qtdServCriticos
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                if (numServCriticos == 0) {
                    icon_servInstaveis.classList.remove("bg-gradient-danger")
                    icon_servInstaveis.classList.add("bg-gradient-info")
                } else {
                    icon_servInstaveis.classList.remove("bg-gradient-blue")
                    icon_servInstaveis.classList.add("bg-gradient-danger")
                    servCriticosKPI.style = "color: #f5365c;"

                }

                servCriticosKPI.innerHTML = numServCriticos
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

getDowntime(); setInterval(getDowntime, 2000);
getCompProblematico();
getChamados(); setInterval(getChamados, 2000);
getServCriticos();
getEstadoGeralServ(); setInterval(getEstadoGeralServ, 10000);
obterDadosGrafico(); setInterval(obterDadosGrafico, 10000);


// const ctx = document.getElementById('chartPicosDeUso');

//                 new Chart(ctx, {
//                     type: 'line',
//                     data: {
//                         labels: vt_diaMesPicoDeUso,
//                         datasets: [{
//                             label: '# of Votes',
//                             data: vt_dadosPicoDeUso,
//                             borderWidth: 1
//                         }]
//                     },
//                     options: {
//                         scales: {
//                             y: {
//                                 beginAtZero: true
//                             }
//                         }
//                     }
//                 });
//                 console.log = (json)