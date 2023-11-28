
var graficoCpu = false;
var graficoCore = true;




function horaDash1() {

  idHoraDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoHora1.style = "color:  #FFFF"

  idSemanaDash1.style = "background-color:  #FFFF; cursor: pointer;"
  textoSemana1.style = "color: #5e72e4; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4;"

  if (graficoCore) {
    exibirGrafico("graficoCoreHora")
  } else {
    exibirGrafico("graficoCpuHora")
  }
  
}

function semanaDash1() {

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4; "

  idSemanaDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoSemana1.style = "color: #FFFF; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4; "

  if (graficoCore) {
    exibirGrafico("graficoCoreSemana")
  } else {
    exibirGrafico("graficoCpuSemana")
  }

}

function mesDash1() {

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4"

  idSemanaDash1.style = "background-color: #FFFF; cursor: pointer; "
  textoSemana1.style = "color: #5e72e4 "

  idMesDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoMes1.style = "color: #FFFF"

  if (graficoCore) {
    exibirGrafico("graficoCoreMes")
  } else {
    exibirGrafico("graficoCpuMes")
  }

}

function dadosOhm() {

  idHoraDash2.style = "background-color: #5E72E4; cursor: pointer;"
  textoHora2.style = "color:  #FFFF"

  idSemanaDash2.style = "background-color:  #FFFF; cursor: pointer;"
  textoSemana2.style = "color: #5e72e4; "

  idMesDash2.style = "background-color: #FFFF; cursor: pointer;"
  textoMes2.style = "color: #5e72e4;"


}

function dadosSputil() {

  idHoraDash2.style = "background-color: #FFFF; cursor: pointer;"
  textoHora2.style = "color: #5e72e4; "

  idSemanaDash2.style = "background-color: #5E72E4; cursor: pointer;"
  textoSemana2.style = "color: #FFFF; "

  idMesDash2.style = "background-color: #FFFF; cursor: pointer;"
  textoMes2.style = "color: #5e72e4; "



}



function core() {
  coreBackground.style = "background-color:#5E72E4; cursor: pointer; "
  coreSpan.style = "color: #FFFF"

  cpuBackground.style = "background-color: #FFFF; cursor: pointer;"
  cpuSpan.style = "color: #5e72e4"

  graficoCore = true;
}

function cpu() {
  cpuBackground.style = "background-color:#5E72E4; cursor: pointer; "
  cpuSpan.style = "color: #FFFF"

  coreBackground.style = "background-color: #FFFF; cursor: pointer;"
  coreSpan.style = "color: #5e72e4"

  graficoCore = false;
  graficoCpu = true;
}

function celsius() {

  celsiusButton.style = "color: #fff; background-color: #3350b9; cursor: pointer;"
  fahrenheitButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  kelvinButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"

}

function fahrenheit() {
  celsiusButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  fahrenheitButton.style = "color: #fff; background-color: #3350b9; cursor: pointer;"
  kelvinButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
}

function kelvin() {
  celsiusButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  fahrenheitButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  kelvinButton.style = "color: #fff; background-color: #3350b9; cursor: pointer;"
}

function exibirGrafico(tipoGrafico){

  console.log(tipoGrafico)

  fetch(`/grafico/${tipoGrafico}`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i])

        // graficoAtividades.data.datasets[0].data.push(json[i].nAtividades)
        // graficoAtividades.data.labels.push(json[i].ano)
        // graficoAtividades.update()

        // graficoSocios.data.datasets[0].data.push(json[i].nSocio)
        // graficoSocios.data.labels.push(json[i].ano)
        // graficoSocios.update()

        // graficoSexos.data.datasets[0].data.push(json[i].nHomem)
        // graficoSexos.data.datasets[1].data.push(json[i].nMulher)
        // graficoSexos.data.labels.push(json[i].ano)
        // graficoSexos.update()

        // if (i == json.l gth - 1) {
        //     graficoIdades.data.datasets[0].data.push(json[i].nJuvenil)
        //     graficoIdades.data.datasets[0].data.push(json[i].nJovem)
        //     graficoIdades.data.datasets[0].data.push(json[i].nAdulto)
        //     graficoIdades.update()
        // }
      }

    })

  })
    .catch(err => {
      console.log(err);
    })

}