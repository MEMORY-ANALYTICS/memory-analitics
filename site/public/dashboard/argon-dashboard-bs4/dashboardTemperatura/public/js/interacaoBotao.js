
function horaDash(idServidor) {

  botaoSelecionado = 1 // index.js

  idHoraDash.style = "background-color: #5E72E4; cursor: pointer;"
  textoHora.style = "color:  #FFFF"

  idSemanaDash.style = "background-color:  #FFFF; cursor: pointer;"
  textoSemana.style = "color: #5e72e4; "

  idMesDash.style = "background-color: #FFFF; cursor: pointer;"
  textoMes.style = "color: #5e72e4;"
  ctx = document.getElementById('graficoTemperatura');
  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuHora", idServidor)
}

function semanaDash(idServidor, anoMes) {

  botaoSelecionado = 2

  idHoraDash.style = "background-color: #FFFF; cursor: pointer;"
  textoHora.style = "color: #5e72e4; "

  idSemanaDash.style = "background-color: #5E72E4; cursor: pointer;"
  textoSemana.style = "color: #FFFF; "

  idMesDash.style = "background-color: #FFFF; cursor: pointer;"
  textoMes.style = "color: #5e72e4; "

  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuSemana",idServidor, anoMes)
}

function mesDash() {

  idHoraDash.style = "background-color: #FFFF; cursor: pointer;"
  textoHora.style = "color: #5e72e4"

  idSemanaDash.style = "background-color: #FFFF; cursor: pointer; "
  textoSemana.style = "color: #5e72e4 "

  idMesDash.style = "background-color: #5E72E4; cursor: pointer;"
  textoMes.style = "color: #FFFF"

  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuMes",idServidor, anoMes)

}

function pesquisarIntevaloData() {

  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataFim").value;
  var idServidor = select.options[select.selectIndex].value;
  
  console.log(dataInicio, dataFim, idServidor)

  if (dataFim < dataInicio) {
    alert("Data inválida!")
  } else {

    fetch('/grafico/filtroData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dataInicioServer: dataInicio,
        dataFimServer: dataFim,
        idServidorServer: idServidor
      })
    }).then(res => {
      res.json().then(json => {
        for (let i = 0; i < json.length; i++) {

          var data = new Date(json[i].dia)
          var dataCompleta = (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);

          graficoFiltroData.data.datasets[0].data.push(json[i].valor) 
          graficoFiltroData.data.labels.push(dataCompleta)
          graficoFiltroData.update()
    
        }
      })
    })
  }
}

function exibirGrafico(tipoGrafico, idServidor, anoMes) {

  console.log(tipoGrafico)

  fetch(`/grafico/${tipoGrafico}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idServidor : idServidor,
      data: anoMes
    })
  }).then(res => {
    res.json().then(json => {
      for (var i = (json.length - 1); i >= 0; i--) {

        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        if (tipoGrafico == "graficoCpuHora") {

          var horario = new Date(json[i].dtHoraRegistro)

          graficoTemperatura.data.datasets[0].data.push(json[i].valorRegistro)
          graficoTemperatura.data.labels.push(`${horario.getHours()}:${horario.getMinutes()}`)
          graficoTemperatura.update()

        } else if (tipoGrafico == "graficoCpuSemana") {

          var data = new Date(json[i].dia)
          var nomeDiaSemana = diaSemana[data.getDay()]

          graficoTemperatura.data.datasets[0].data.push(json[i].valorMedia)
          graficoTemperatura.data.labels.push(nomeDiaSemana)
          graficoTemperatura.update()

        } else if (tipoGrafico == "graficoCpuMes") {
    
          var data = new Date(json[i].dia)
          var dataDia = (`${data.getDate()}/${data.getMonth() + 1}`)

          graficoTemperatura.data.datasets[0].data.push(json[i].valorMedia)
          graficoTemperatura.data.labels.push(dataDia)
          graficoTemperatura.update()

        }
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}