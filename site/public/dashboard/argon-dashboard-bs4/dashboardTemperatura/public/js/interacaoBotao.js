
function horaDash1() {

  idHoraDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoHora1.style = "color:  #FFFF"

  idSemanaDash1.style = "background-color:  #FFFF; cursor: pointer;"
  textoSemana1.style = "color: #5e72e4; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4;"

    exibirGrafico("graficoCpuHora")
}

function semanaDash1() {

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4; "

  idSemanaDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoSemana1.style = "color: #FFFF; "

  idMesDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoMes1.style = "color: #5e72e4; "

  
    exibirGrafico("graficoCpuSemana")
}

function mesDash1() {

  idHoraDash1.style = "background-color: #FFFF; cursor: pointer;"
  textoHora1.style = "color: #5e72e4"

  idSemanaDash1.style = "background-color: #FFFF; cursor: pointer; "
  textoSemana1.style = "color: #5e72e4 "

  idMesDash1.style = "background-color: #5E72E4; cursor: pointer;"
  textoMes1.style = "color: #FFFF"

  
    exibirGrafico("graficoCpuMes")
}


function celsius() {

  celsiusButton.style = "color: #fff; background-color: #3350b9; cursor: pointer;"
  fahrenheitButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  
  tempCelsius = true;
  tempFahrenheit = false;
  iniciar()

}

function fahrenheit() {
  celsiusButton.style = " color: #525f7f background-color: #fff; cursor: pointer;"
  fahrenheitButton.style = "color: #fff; background-color: #3350b9; cursor: pointer;"
 
  tempCelsius = false;
  tempFahrenheit = true;

}

function exibirGrafico(tipoGrafico){

  console.log(tipoGrafico)

  fetch(`/grafico/${tipoGrafico}`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = (json.length - 1); i >= 0; i--) {
        
        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        var valorRegistro;
        if(tipoGrafico == "graficoCpuHora"){

          if(tempCelsius){
            valorRegistro = converterParaCelsius(json[i].valorRegistro) 
          } else if (tempFahrenheit){
            valorRegistro = converterParaFahrenheit(json[i].valorRegistro)   
          } else{
            valorRegistro = json[i].valorRegistro
          }

        } else if(tipoGrafico=="graficoCpuSemana"){

          if(tempCelsius){
            valorRegistro = converterParaCelsius(json[i].valorMedia) 
          } else if (tempFahrenheit){
            valorRegistro = converterParaFahrenheit(json[i].valorMedia)   
          } else{
            valorRegistro = json[i].valorRegistro
          }

          var data = new Date(json[i].dia)
          var nomeDiaSemana = diaSemana[data.getDay()]
          console.log(nomeDiaSemana);
        } else if(tipoGrafico == "graficoCpuMes"){
          if(tempCelsius){
            valorRegistro = converterParaCelsius(json[i].valorMedia) 
          } else if (tempFahrenheit){
            valorRegistro = converterParaFahrenheit(json[i].valorMedia)   
          } else{
            valorRegistro = json[i].valorMedia
          }
          var data = new Date(json[i].dia)
          console.log(`${data.getDate()}/${data.getMonth()+1}`);
        }

        //ctx.data.datasets.data.push(json[i].valorRegistro)
        //ctx.data.labels.push(json[i].dtHoraRegistro)
        //ctx.update()
        //ctx.data.labels.push(json[i].dtHoraRegistro)

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