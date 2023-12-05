
function horaDash1(apelidoServidor) {

  numeroBotao = 1

  idHoraDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoHora1.style = "color:  #FFFF"

  idSemanaDash1.style = "background-color:  #FFFF; cursor: pointer;"
  textoSemana1.style = "color: #5e72e4; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4;"
  ctx = document.getElementById('graficoTemperatura');
  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuHora", apelidoServidor)
}

function semanaDash1() {

  numeroBotao = 2

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4; "

  idSemanaDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoSemana1.style = "color: #FFFF; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4; "

  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuSemana")
}

function mesDash1() {

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4"

  idSemanaDash1.style = "background-color: #FFFF; cursor: pointer; "
  textoSemana1.style = "color: #5e72e4 "

  idMesDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoMes1.style = "color: #FFFF"

  graficoTemperatura.destroy()
  createTemp(ctx)
  exibirGrafico("graficoCpuMes")


}


function pesquisarIntevaloData() {

  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataFim").value;

  console.log(dataInicio, dataFim)

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
        fkServidor: 8
      })
    }).then(res => {
      res.json().then(json => {
        for (let i = 0; i < json.length; i++) {
          console.log(json[i].valor)

          graficoFiltroData.data.datasets[0].data.push(json[i].valor)
          
          var data = new Date(json[i].dia)
          var dataCompleta = (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
          
          graficoFiltroData.data.labels.push(dataCompleta)
          graficoFiltroData.update()

          
        }
      })
    })

  }


}



function exibirGrafico(tipoGrafico, apelidoServidor) {

  console.log(tipoGrafico)

  fetch(`/grafico/${tipoGrafico}/${apelidoServidor}`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = (json.length - 1); i >= 0; i--) {

        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        if (tipoGrafico == "graficoCpuHora") {
          graficoTemperatura.data.datasets[0].data.push(json[i].valorRegistro)
          var horario = new Date(json[i].dtHoraRegistro)

          graficoTemperatura.data.labels.push(`${horario.getHours()}:${horario.getMinutes()}`)
          graficoTemperatura.update()

        } else if (tipoGrafico == "graficoCpuSemana") {

          var data = new Date(json[i].dia)
          var nomeDiaSemana = diaSemana[data.getDay()]
          graficoTemperatura.data.datasets[0].data.push(json[i].valorMedia)
          graficoTemperatura.data.labels.push(nomeDiaSemana)
          graficoTemperatura.update()



        } else if (tipoGrafico == "graficoCpuMes") {

          console.log(json[i].valorMedia)

          var data = new Date(json[i].dia)
          var dataDia = (`${data.getDate()}/${data.getMonth() + 1}`);
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




