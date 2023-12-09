function chamarOcorrencias() {
    selectGraficoOcorrenciaComponente()
    selectGraficoOcorrenciaProcesso()
    selectGraficoOcorrenciaRede()
    selectGraficoOcorrenciaTemperatura()
}

function atualizarDadosOcorrencias() {
    graficoOcorrencias.data.datasets[0].data.push(qtdOcorrenciasComponente)
    graficoOcorrencias.data.datasets[1].data.push(qtdOcorrenciasTemperatura)
    graficoOcorrencias.data.datasets[2].data.push(qtdOcorrenciasRede)
    graficoOcorrencias.data.datasets[3].data.push(qtdOcorrenciasProcessos)
    graficoOcorrencias.update()
}

function persoLinha() {
    createPersoLinha()
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
function persoBarra() {

}
function persoDispersao() {

}
function persoSetores() {

}
function persoRegressao() {
    createPersoRegressao()
    graficoPerso.data.datasets = [{
        type: 'line',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40]
    }, {
        type: 'line',
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
    }]
    graficoPerso.update()
}

// Criação dos gráficos

var ctx = document.getElementById('graficoOcorrencias');
createOcorrencias(ctx)

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
            scales: {
                y: {
                    beginAtZero: true
                }
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
            scales: {
                y: {
                    beginAtZero: true
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function createPersoLinha(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
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
            scales: {
                y: {
                    beginAtZero: true
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function createPersoRegressao(ctx3) {

    graficoPerso = new Chart(ctx3, {
        data: {
            labels: ['Registros'],
            datasets: []
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}