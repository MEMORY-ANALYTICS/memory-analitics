filtroTempo = "ALLTIME"
function setFiltroDia() {
    togglePersoEspacoTempo.innerHTML = 'Dia'
    filtroTempo = "DAY"
}
function setFiltroSemana() {
    togglePersoEspacoTempo.innerHTML = 'Semana'
    filtroTempo = "WEEK"
}
function setFiltroMes() {
    togglePersoEspacoTempo.innerHTML = 'Mes'
    filtroTempo = "MONTH"
}
function setFiltroAno() {
    togglePersoEspacoTempo.innerHTML = 'Ano'
    filtroTempo = "YEAR"
}
function setFiltroCpuUso() {
    if (filtrosDashboard.cpuUso) {
        filtrosDashboard.cpuUso = false
    } else {
        filtrosDashboard.cpuUso = true
    }
}
function setFiltroRam() {
    if (filtrosDashboard.ram) {
        filtrosDashboard.ram = false
    } else {
        filtrosDashboard.ram = true
    }
}
function setFiltroDisco() {
    if (filtrosDashboard.disco) {
        filtrosDashboard.disco = false
    } else {
        filtrosDashboard.disco = true
    }
}
function setFiltroCpuFreq() {
    if (filtrosDashboard.cpuFreq) {
        filtrosDashboard.cpuFreq = false
    } else {
        filtrosDashboard.cpuFreq = true
    }
}
function setFiltroPacoteRecebido() {
    if (filtrosDashboard.pacoteRecebido) {
        filtrosDashboard.pacoteRecebido = false
    } else {
        filtrosDashboard.pacoteRecebido = true
    }
}
function setFiltroPacoteEnviado() {
    if (filtrosDashboard.pacoteEnviado) {
        filtrosDashboard.pacoteEnviado = false
    } else {
        filtrosDashboard.pacoteEnviado = true
    }
}
function setFiltroMbRecebido() {
    if (filtrosDashboard.mbRecebido) {
        filtrosDashboard.mbRecebido = false
    } else {
        filtrosDashboard.mbRecebido = true
    }
}
function setFiltroMbEnviado() {
    if (filtrosDashboard.mbEnviado) {
        filtrosDashboard.mbEnviado = false
    } else {
        filtrosDashboard.mbEnviado = true
    }
}
function setFiltroTransmissao() {
    if (filtrosDashboard.transmissao) {
        filtrosDashboard.transmissao = false
    } else {
        filtrosDashboard.transmissao = true
    }
}
function setFiltroLatencia() {
    if (filtrosDashboard.latencia) {
        filtrosDashboard.latencia = false
    } else {
        filtrosDashboard.latencia = true
    }
}
function setFiltroTemperatura() {
    if (filtrosDashboard.temperatura) {
        filtrosDashboard.temperatura = false
    } else {
        filtrosDashboard.temperatura = true
    }
}
function setFiltroProcessosQtd() {
    if (filtrosDashboard.processosQtd) {
        filtrosDashboard.processosQtd = false
    } else {
        filtrosDashboard.processosQtd = true
    }
}
function setFiltroProcessosRam() {
    if (filtrosDashboard.processosRam) {
        filtrosDashboard.processosRam = false
    } else {
        filtrosDashboard.processosRam = true
    }
}
function setFiltroProcessosCpu() {
    if (filtrosDashboard.processosCpu) {
        filtrosDashboard.processosCpu = false
    } else {
        filtrosDashboard.processosCpu = true
    }
}
function qtdDadosKPI() {
    let lengthDataHora = dataHora.length;
    let lengthUsoCpu = processos.usoCpu.length;
    let lengthUsoRam = processos.usoRam.length;
    let lengthQtdProcessos = processos.qtdProcessos.length;
    let lengthRegistrosCpuPercentUso = componentes.cpu.registrosCpu.percentUso.length;
    let lengthRegistrosCpuFrequencia = componentes.cpu.registrosCpu.frequencia.length;
    let lengthRegistrosCpuTemperatura = componentes.cpu.registrosCpu.temperatura.length;
    let lengthRegistrosRam = componentes.ram.registrosRam.length;
    let lengthRegistrosDiscoPercentUso = componentes.disco.registrosDisco.percentUso.length;
    let lengthRegistrosDiscoArmazenamento = componentes.disco.registrosDisco.armazenamento.length;
    let lengthRegistrosRedePacotesRecebidos = componentes.rede.registrosRede.pacotesRecebidos.length;
    let lengthRegistrosRedePacotesEnviados = componentes.rede.registrosRede.pacotesEnviados.length;
    let lengthRegistrosRedeMbRecebidos = componentes.rede.registrosRede.MbRecebidos.length;
    let lengthRegistrosRedeMbEnviados = componentes.rede.registrosRede.MbEnviados.length;
    let lengthRegistrosRedeMbpsTransmissao = componentes.rede.registrosRede.mbpsTransmissao.length;
    let lengthRegistrosRedeMsRede = componentes.rede.registrosRede.msRede.length;
    let qtdDados =
        lengthDataHora +
        lengthUsoCpu +
        lengthUsoRam +
        lengthQtdProcessos +
        lengthRegistrosCpuPercentUso +
        lengthRegistrosCpuFrequencia +
        lengthRegistrosCpuTemperatura +
        lengthRegistrosRam +
        lengthRegistrosDiscoPercentUso +
        lengthRegistrosDiscoArmazenamento +
        lengthRegistrosRedePacotesRecebidos +
        lengthRegistrosRedePacotesEnviados +
        lengthRegistrosRedeMbRecebidos +
        lengthRegistrosRedeMbEnviados +
        lengthRegistrosRedeMbpsTransmissao +
        lengthRegistrosRedeMsRede + qtdOcorrenciasTotal;
    quantidadeDados.innerHTML = qtdDados
}
function formatarDataParaString(dataString) {
    var data = new Date(dataString);
    var dia = adicionarZero(data.getUTCDate());
    var mes = adicionarZero(data.getUTCMonth() + 1); // Os meses em JavaScript são zero-based
    var ano = data.getUTCFullYear();
    var horas = adicionarZero(data.getUTCHours());
    var minutos = adicionarZero(data.getUTCMinutes());
    var segundos = adicionarZero(data.getUTCSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

function adicionarZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

function atualizarVariaveis() {
    console.log(`ATUALIZANDO VARIÁVEIS PARA O SERVIDOR: ${listaServidores.options[listaServidores.selectedIndex].text}`)
    selectCpu(filtroTempo)
    selectRam(filtroTempo)
    selectDisco(filtroTempo)
    selectRede(filtroTempo)
    setTimeout(() => {
        qtdDadosKPI()
        dataHora = dataHora.map(formatarDataParaString);
    }, 2000);
}

function chamarOcorrencias() {
    selectGraficoOcorrenciaComponente()
    selectGraficoOcorrenciaProcesso()
    selectGraficoOcorrenciaRede()
    selectGraficoOcorrenciaTemperatura()
}
var qtdOcorrenciasTotal
function atualizarDadosOcorrencias() {
    if (typeof graficoOcorrencias !== 'undefined') {
        graficoOcorrencias.destroy()
    }
    createOcorrencias(ctx)
    graficoOcorrencias.data.datasets[0].data.push(qtdOcorrenciasComponente, qtdOcorrenciasTemperatura, qtdOcorrenciasRede, qtdOcorrenciasProcessos)
    graficoOcorrencias.update()
    var variaveis = [
        { nome: 'Componentes', valor: qtdOcorrenciasComponente },
        { nome: 'Rede', valor: qtdOcorrenciasRede },
        { nome: 'Temperatura', valor: qtdOcorrenciasTemperatura },
        { nome: 'Processos', valor: qtdOcorrenciasProcessos }
    ];

    // Encontrar a variável com o maior valor
    var maiorVariavel;
    var maiorValor = -Infinity;

    for (var i = 0; i < variaveis.length; i++) {
        if (variaveis[i].valor > maiorValor) {
            maiorValor = variaveis[i].valor;
            maiorVariavel = variaveis[i].nome;
        }
    }
    qtdOcorrenciasTotal = qtdOcorrenciasComponente + qtdOcorrenciasTemperatura + qtdOcorrenciasRede + qtdOcorrenciasProcessos
    maiorAreaChamados.innerHTML = maiorVariavel
    qtdOcorrenciasKPI.innerHTML = qtdOcorrenciasTotal
}
function persoLinha() {
    mensagem = document.getElementById('mensagemPerso')
    grafico = document.getElementById('container4')
    togglePersoTipoGrafico.innerHTML = 'Atualizar'
    grafico.style.display = 'flex'
    mensagem.style.display = 'none'
    togglePersoTipoGrafico.onclick = function () {
        persoLinha()
    };
    if (typeof graficoPerso !== 'undefined') {
        graficoPerso.destroy()
    }
    createPersoLinha(ctx3)
    graficoPerso.data.labels = (dataHora)
    if (filtrosDashboard.cpuUso) {
        graficoPerso.data.datasets.push({
            label: 'Uso CPU',
            data: componentes.cpu.registrosCpu.percentUso,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.ram) {
        graficoPerso.data.datasets.push({
            label: 'Uso RAM',
            data: componentes.ram.registrosRam,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.disco) {
        graficoPerso.data.datasets.push({
            label: 'Uso Disco',
            data: componentes.disco.registrosDisco.percentUso,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    // COLOCAR ARMAZENAMENTO DO DISCO
    if (filtrosDashboard.temperatura) {
        graficoPerso.data.datasets.push({
            label: 'Temperatura CPU',
            data: componentes.cpu.registrosCpu.temperatura,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.cpuFreq) {
        graficoPerso.data.datasets.push({
            label: 'Frequencia CPU',
            data: componentes.cpu.registrosCpu.frequencia,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.latencia) {
        graficoPerso.data.datasets.push({
            label: 'Latência da Rede',
            data: componentes.rede.registrosRede.msRede,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.pacoteEnviado) {
        graficoPerso.data.datasets.push({
            label: 'Pacotes enviados',
            data: componentes.rede.registrosRede.pacotesEnviados,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.pacoteRecebido) {
        graficoPerso.data.datasets.push({
            label: 'Pacortes Recebidos',
            data: componentes.rede.registrosRede.pacotesRecebidos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.mbEnviado) {
        graficoPerso.data.datasets.push({
            label: 'Mega Bytes Enviados',
            data: componentes.rede.registrosRede.MbEnviados,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.mbRecebido) {
        graficoPerso.data.datasets.push({
            label: 'Mega Bytes Recebidos',
            data: componentes.rede.registrosRede.MbRecebidos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.transmissao) {
        graficoPerso.data.datasets.push({
            label: 'Taxa de transmissão (MBps))',
            data: componentes.rede.registrosRede.mbpsTransmissao,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosQtd) {
        graficoPerso.data.datasets.push({
            label: 'Quantidade de Processos',
            data: processos.qtdProcessos,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosRam) {
        graficoPerso.data.datasets.push({
            label: 'Uso de Ram pelos processos',
            data: processos.usoRam,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
    if (filtrosDashboard.processosCpu) {
        graficoPerso.data.datasets.push({
            label: 'Uso de CPU pelos Processos',
            data: processos.usoCpu,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        })
    }
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
        data: [],
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
            labels: ['Componente', 'Temperatura', 'Rede', 'Processo'],
            datasets: [{
                label: 'Registros',
                data: [],
                borderWidth: 1
            }
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
            labels: [],
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
        }
    });
}
function createPersoDispersao(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'scatter',
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
function createPersoSetores(ctx3) {

    graficoPerso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['cu', 'ca', 'ci', 'ce', 'co'],
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