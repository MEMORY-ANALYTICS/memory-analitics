sessionStorage.setItem(
  "emailFunc", "",
)  


dataTemp = new Date();

var dia = dataTemp.getDate();
var mes = dataTemp.getMonth()+1;
var ano = dataTemp.getFullYear();

if(dia<10){
  dia = `0${dia}`
}

var dataHojeFront = `${dia}/${mes}/${ano}` 
var dataHoje = `${mes}-${dia}-${ano}`

console.log(sessionStorage.emailFunc)


var functionKpi = ["MedTempAtual", "MedTemp", "CpuTempMax", "CpuTempMin"]



function getServidor() {


  fetch(`/servidor/servidor`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i])

        var novaOpcao = document.createElement("option");
        novaOpcao.text = json[i].apelidoServidor
        novaOpcao.value = json[i].macAdress

        var select = document.getElementById("selecaoApelidoServidor");
        select.appendChild(novaOpcao);

      
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}




function getKpi(metodoKpi) {

  fetch(`/kpi/${metodoKpi}`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        var dataMysql;
        var dataTratado;
        var diaTratado;
        var valorRegistro;


        if (metodoKpi == "CpuTempMax") {
          if(tempCelsius){
            valorRegistro = converterParaCelsius(json[i].valorRegistro) 
          } else if (tempFahrenheit){
            valorRegistro = converterParaFahrenheit(json[i].valorRegistro)   
          } else{
            valorRegistro = json[i].valorRegistro
          }
          

          cpuTempMax.innerHTML = valorRegistro;

           dataMysql = json[i].dtHoraRegistro
           dataTratado = new Date(dataMysql);

           diaTratado = dataTratado.getDay();
          if(diaTratado<10){
            diaTratado = `0${diaTratado}`
          }
          
          momentoRegistroMax.innerHTML = `${dataTratado.getHours()}h ${dataTratado.getMinutes()} min.`;
          dataRegistroMax.innerHTML = `${diaTratado}/${dataTratado.getMonth()+1}/${dataTratado.getFullYear()}`;
        } else if(metodoKpi == "CpuTempMin"){

          cpuTempMin.innerHTML = json[i].valorRegistro;
          dataMysql = json[i].dtHoraRegistro
          dataTratado = new Date(dataMysql);

          diaTratado = dataTratado.getDay();
          if(diaTratado<10){
            diaTratado = `0${diaTratado}`
          }
          
          momentoRegistroMin.innerHTML = `${dataTratado.getHours()}h ${dataTratado.getMinutes()} min.`;
          dataRegistroMin.innerHTML = `${diaTratado}/${dataTratado.getMonth()+1}/${dataTratado.getFullYear()}`;
       
        } else if (metodoKpi == "MedTemp"){

          if(json[i].mediaTemperatura > 70 || json[i].mediaTemperatura < 50){
            estadoTempMedia.innerHTML = 'Crítico'
          } else {
            estadoTempMedia.innerHTML = 'Aceitável'
          }
          medTemp.innerHTML = json[i].mediaTemperatura;

          dataMedTemp.innerHTML = dataHojeFront;

          
        }
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}

