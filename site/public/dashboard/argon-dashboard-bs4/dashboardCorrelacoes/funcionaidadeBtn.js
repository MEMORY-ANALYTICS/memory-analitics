
function chamarOcorrencias() {
    selectGraficoOcorrenciaComponente()
    selectGraficoOcorrenciaProcesso()
    selectGraficoOcorrenciaRede()
    selectGraficoOcorrenciaTemperatura()

    var maior = 0

    var lista = [qtdOcorrenciasComponente, qtdOcorrenciasProcessos, qtdOcorrenciasRede, qtdOcorrenciasTemperatura]
    var listanomes = [ocorrenciasComponente, ocorrenciasProcessos, ocorrenciasRede, ocorrenciasTemperatura]
    var pos
    var diff = 0
    var i = 0
    while (i < lista.length) {
        if (lista[i] > maior) {
            maior = lista[i]
            pos = i
        }
        i++
    }

    maiorOcorrencia.innerHTML = `Processos`
}
function atualizarDadosOcorrencias() {
    graficoOcorrencias.data.datasets[0].data.push(qtdOcorrenciasComponente)
    graficoOcorrencias.data.datasets[1].data.push(qtdOcorrenciasTemperatura)
    graficoOcorrencias.data.datasets[2].data.push(qtdOcorrenciasRede)
    graficoOcorrencias.data.datasets[3].data.push(qtdOcorrenciasProcessos)
    graficoOcorrencias.update()
}