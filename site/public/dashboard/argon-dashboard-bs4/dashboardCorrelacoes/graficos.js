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
        type: 'line',
        data: {
            labels: ['Registros'],
            datasets: [{
                label: 'Temperatura',
                data: [],
                borderWidth: 1
            }, {
                label: 'CpuUso',
                data: [],
                borderWidth: 1
            }
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

var ctx3 = document.getElementById('graficoCorrelacao2');
createlive(ctx3)

function createlive(ctx3) {

    graficoLiveTempCPU = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Registros'],
            datasets: [{
                label: 'Temperatura',
                data: [],
                borderWidth: 1
            }, {
                label: 'CpuUso',
                data: [],
                borderWidth: 1
            }
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