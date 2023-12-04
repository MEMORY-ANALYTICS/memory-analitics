
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


function pesquisarIntevaloData(){

  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataFim").value;

  console.log(dataInicio,dataFim)

  if (dataFim < dataInicio) {
    alert("Data inválida!")
  } else {
    
    fetch('/grafico/filtroData').then(res=>{
      res.json().then(json => {
        for (let i=0; i < json.length; i++){
          console.log(json[i].valor)

          var data = new Date(json[i].dia)
          console.log(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);
        }
      })
    })

  }


}



function exibirGrafico(tipoGrafico){

  console.log(tipoGrafico)

  fetch(`/grafico/${tipoGrafico}`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = (json.length - 1); i >= 0; i--) {
        
        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        if(tipoGrafico == "graficoCpuHora"){
            console.log(json[i].valorRegistro)

        }  else if(tipoGrafico=="graficoCpuSemana"){
          json[i].valorRegistro          
          var data = new Date(json[i].dia)
          var nomeDiaSemana = diaSemana[data.getDay()]
          console.log(nomeDiaSemana);

        } else if(tipoGrafico == "graficoCpuMes"){
          
          console.log(json[i].valorMedia)
          
          var data = new Date(json[i].dia)
          console.log(`${data.getDate()}/${data.getMonth()+1}`);
        }
      }

    })

  })
    .catch(err => {
      console.log(err);
    })



    

}