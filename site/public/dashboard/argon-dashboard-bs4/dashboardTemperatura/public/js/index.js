getServidor()
horaDash1()

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


var listKpi = ["qtdIncidentes", "MedTemp", "CpuTempMax", "CpuTempMin"]

  for (i = 0; i < listKpi.length; i++) {
    getKpi(listKpi[i])
  }    
  

function getServidor() {


  fetch(`/servidor/servidor`).then(res => {
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
        var listMes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto', 'Setembro','Outubro','Novembro','Dezembro']
        var valorRegistro;
        if (metodoKpi == "qtdIncidentes"){

          valorRegistro = json[i].quantidade
          

          qtdIncidentes.innerHTML = valorRegistro

          if (valorRegistro > 5) {
            estadoIncidentes.innerHTML = 'Crítico'
          } else if (valorRegistro == 0){
            estadoIncidentes.innerHTML = 'Excelente'
          } else {
            estadoIncidentes.innerHTML = 'Aceitável'
          }

          mesIncidentes.innerHTML = listMes[mes-1]


        } else if (metodoKpi == "CpuTempMax"){

          cpuTempMax.innerHTML = json[i].valorRegistro;

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

