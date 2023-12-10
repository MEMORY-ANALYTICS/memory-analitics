function chamarOcorrencias() {
    selectGraficoOcorrenciaComponente()
    selectGraficoOcorrenciaProcesso()
    selectGraficoOcorrenciaRede()
    selectGraficoOcorrenciaTemperatura()
}

function atualizarDadosOcorrencias() {
    createOcorrencias(ctx)
    graficoOcorrencias.data.datasets[0].data.push(qtdOcorrenciasComponente)
    graficoOcorrencias.data.datasets[1].data.push(qtdOcorrenciasTemperatura)
    graficoOcorrencias.data.datasets[2].data.push(qtdOcorrenciasRede)
    graficoOcorrencias.data.datasets[3].data.push(qtdOcorrenciasProcessos)
    graficoOcorrencias.update()
}

function persoLinha() {
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoLinha(ctx3)
    graficoPerso.data.datasets = [{
        label: 'Uso CPU',
        data: [100, 100, 20, 15, 30, 71, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'Temperatura CPU',
        data: [86, 89, 80, 75, 75, 85, 87],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'Uso Ram',
        data: [95, 89, 80, 51, 60, 80, 99],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoBarra() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoBarra(ctx3)
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoDispersao() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoDispersao(ctx3)
    graficoPerso.type = 'line'
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
function persoSetores() {
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoSetores(ctx3)
    graficoPerso.type = 'line'
    graficoPerso.data.datasets = [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    graficoPerso.update()
}
// function persoRegressao() {
//     createPersoRegressao(ctx3)
//     graficoPerso.data.datasets = [{
//         type: 'line',
//         label: 'Bar Dataset',
//         data: [10, 20, 30, 40]
//     }, {
//         type: 'line',
//         label: 'Line Dataset',
//         data: [50, 50, 50, 50],
//     }]
//     graficoPerso.update()
// }

// Criação dos gráficos

var ctx = document.getElementById('graficoOcorrencias');

function createOcorrencias(ctx) {

    graficoOcorrencias = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Registros'],
            datasets: [{
                label: 'Componente',
                data: [],
                borderWidth: 1
            }, {
                label: 'Temperatura',
                data: [],
                borderWidth: 1
            }, {
                label: 'Rede',
                data: [],
                borderWidth: 1
            }, {
                label: 'Processo',
                data: [],
                borderWidth: 1
            },
            ]
        },
        options: { 
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              }
        }
    });
}

var ctx2 = document.getElementById('graficoCorrelacao');
createlive(ctx2)

function createlive(ctx2) {

    graficoLiveTempCPU = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Registros'],
            datasets: [
            ]
        },
        options: { 
            title: {
            display: true,
            text: 'Gráfico Personalizado'
          },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Pode ser 'day', 'week', 'month', etc.
                        displayFormats: {
                            month: 'MMM YYYY' // Formato da data exibida no eixo x
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        }
    });
}

var ctx3 = document.getElementById('graficoPersonalizado');

function createPersoBarra(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: { 
            title: {
            display: true,
            text: 'Gráfico Personalizado'
          },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Pode ser 'day', 'week', 'month', etc.
                        displayFormats: {
                            month: 'MMM YYYY' // Formato da data exibida no eixo x
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        }
    });
}
function createPersoLinha(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: { 
            title: {
            display: true,
            text: 'Gráfico Personalizado'
          },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Pode ser 'day', 'week', 'month', etc.
                        displayFormats: {
                            month: 'MMM YYYY' // Formato da data exibida no eixo x
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        }
    });
}
function createPersoDispersao(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'scatter',
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: { 
            title: {
            display: true,
            text: 'Gráfico Personalizado'
          },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Pode ser 'day', 'week', 'month', etc.
                        displayFormats: {
                            month: 'MMM YYYY' // Formato da data exibida no eixo x
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        }
    });
}
function createPersoSetores(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: { 
            title: {
            display: true,
            text: 'Gráfico Personalizado'
          },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top'
              },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Pode ser 'day', 'week', 'month', etc.
                        displayFormats: {
                            month: 'MMM YYYY' // Formato da data exibida no eixo x
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor'
                    }
                }
            }
        }
    });
}
// function createPersoRegressao(ctx3) {

//     graficoPerso = new Chart(ctx3, {
//         data: {
//             labels: ['Registros'],
//             datasets: []
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }