
function horaDash(idServidor, anoMes) {

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
  exibirGrafico("graficoCpuHora", idServidor, anoMes)
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

function mesDash(idServidor, anoMes) {

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

  graficoFiltroData.destroy()
  createFiltroData()

  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataFim").value;
  var idServidor = getOptionValue();
  
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

  fetch(`/grafico/${tipoGrafico}`
  , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idServidor : idServidor,
      data: anoMes
    })
  }
  ).then(res => {
    res.json().then(json => {
      for (var i = (json.length - 1); i >= 0; i--) {

        var dataBanco;
        var horaBanco;
        var minutosBanco;
        var diaBanco;


        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        if (tipoGrafico == "graficoCpuHora") {


          console.log(json[i].dtHoraRegistro)
          dataBanco = (json[i].dtHoraRegistro)

      

          horaBanco = dataBanco.substring(11,13)
          minutosBanco = dataBanco.substring(14,16)


          graficoTemperatura.data.datasets[0].data.push(json[i].valorRegistro)
          graficoTemperatura.data.labels.push(`${horaBanco}:${minutosBanco}`)
          graficoTemperatura.update()

        } else if (tipoGrafico == "graficoCpuSemana") {

          dataBanco = json[i].dia
          console.log(json[i].dia)


          anoBanco = dataBanco.substring(0,4)
          mesBanco = dataBanco.substring(5,7)
          diaBanco = dataBanco.substring(8,10)
         
        
          var data = new Date(anoBanco,mesBanco-1,diaBanco)
          console.log(data)

          var numeroDiaSemana = data.getDay()
          console.log(numeroDiaSemana)

          var nomeDiaSemana = diaSemana[numeroDiaSemana]
          console.log(nomeDiaSemana)
          graficoTemperatura.data.datasets[0].data.push(json[i].valorMedia)
          graficoTemperatura.data.labels.push(nomeDiaSemana)
          graficoTemperatura.update()

        } else if (tipoGrafico == "graficoCpuMes") {


    
          dataBanco = json[i].dia; 

          anoBanco = dataBanco.substring(0,4)
          mesBanco = dataBanco.substring(5,7)
          diaBanco = dataBanco.substring(8,10)
          horaBanco = dataBanco.substring(11,13)
          minutosBanco = dataBanco.substring(14,16)
          

          var dataDia = (`${diaBanco}/${mesBanco}`)

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