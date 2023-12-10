nomeLogin.innerHTML = sessionStorage.NOME_USUARIO
getServidor()

var botaoSelecionado = 1
var listMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']  
var listKpi = ["qtdIncidentes", "MedTemp", "CpuTempMax", "CpuTempMin"]

var dataTemp = new Date();
var dia = dataTemp.getDate();
if (dia < 10) {
  dia = `0${dia}`
}
var mes = dataTemp.getMonth() + 1;
var ano = dataTemp.getFullYear();
var dataHojeFront = `${dia}/${mes}/${ano}`
var dataHoje = `${mes}-${dia}-${ano}`
var dataHojeBack = `${ano}-${mes}-${dia}`
var anoMes = `${ano}-${mes}`
var select;

createTemp()
createFiltroData()
horaDash(getOptionValue())
createIncidentes()
graficoIncidentesMes(getOptionValue())

for (i = 0; i < listKpi.length; i++) {
  getKpi(listKpi[i])
}

function getOptionValue(){
  select = document.getElementById(selecaoApelidoServidor)
  return select.options[select.selectIndex].value;
  
}

setInterval(() => atualizarDados(), 500000);


function atualizarDados() {
  if (botaoSelecionado == 1){
    horaDash(getOptionValue())
  } else if (botaoSelecionado == 2){
    semanaDash(getOptionValue(), anoMes)
  } else {
    mesDash(getOptionValue(), anoMes)
  }
  
  for (i = 0; i < listKpi.length; i++) {
    getKpi(listKpi[i])
  }
  
  graficoIncidentes.destroy()
  createIncidentes()
  graficoIncidentesMes('Servidor B')
}




function getServidor() {


  fetch(`/servidor/servidor`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email : sessionStorage.EMAIL_USUARIO
      })
  }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        
        var novaOpcao = document.createElement("option");
        var select = document.getElementById("selecaoApelidoServidor");
        
        novaOpcao.text = json[i].apelidoServidor
        novaOpcao.value = json[i].idServidor
        
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
    method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dataMomento: dataHojeBack,
        fkServidor: idServidor
      })
    }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        
        var dataMysql;
        var dataTratado;
        var diaTratado;
        var valorRegistro;
        
        if (metodoKpi == "qtdIncidentes") {

          valorRegistro = json[i].quantidade


          qtdIncidentes.innerHTML = valorRegistro

          if (valorRegistro > 5) {
            estadoIncidentes.innerHTML = 'Crítico'
            
          } else if (valorRegistro == 0) {
            estadoIncidentes.innerHTML = 'Excelente'
          } else {
            estadoIncidentes.innerHTML = 'Aceitável'
          }

          mesIncidentes.innerHTML = listMes[mes - 1]


        } else if (metodoKpi == "CpuTempMax") {

          cpuTempMax.innerHTML = json[i].valorRegistro;

          dataMysql = json[i].dtHoraRegistro
          dataTratado = new Date(dataMysql);

          diaTratado = dataTratado.getDay();
          if (diaTratado < 10) {
            diaTratado = `0${diaTratado}`
          }

          momentoRegistroMax.innerHTML = `${dataTratado.getHours()}h ${dataTratado.getMinutes()} min.`;
          dataRegistroMax.innerHTML = `${diaTratado}/${dataTratado.getMonth() + 1}/${dataTratado.getFullYear()}`;
        } else if (metodoKpi == "CpuTempMin") {

          cpuTempMin.innerHTML = json[i].valorRegistro;
          dataMysql = json[i].dtHoraRegistro
          dataTratado = new Date(dataMysql);
          diaTratado = dataTratado.getDay();

          if (diaTratado < 10) {
            diaTratado = `0${diaTratado}`
          }

          momentoRegistroMin.innerHTML = `${dataTratado.getHours()}h ${dataTratado.getMinutes()} min.`;
          dataRegistroMin.innerHTML = `${diaTratado}/${dataTratado.getMonth() + 1}/${dataTratado.getFullYear()}`;

        } else if (metodoKpi == "MedTemp") {

          if (json[i].mediaTemperatura > 70 || json[i].mediaTemperatura < 50) {
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



function graficoIncidentesMes(apelidoServidor) {

  fetch(`/grafico/graficoIncidentes/${apelidoServidor}`).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
  
        graficoIncidentes.data.datasets[0].data.push(json[i].quantidade)
        graficoIncidentes.data.labels.push(json[i].mes)
        graficoIncidentes.update()
      
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}

function createTemp() {

  var ctx = document.getElementById('graficoTemperatura');

  graficoTemperatura = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Temperatura',
        data: [],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createFiltroData() {

  
  var ctx1 = document.getElementById('graficoComparativo');

  graficoFiltroData = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'temperatura',
        data: [],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createIncidentes() {

  var ctx2 = document.getElementById('graficoIncidentesMes');

  graficoIncidentes = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        label: [],
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 99, 235)',
          'rgb(255, 99, 86)',
          'rgb(99, 255, 132)',
          'rgb(99, 255, 235)',
          'rgb(99, 255, 86)',
          'rgb(132, 99, 255)',
          'rgb(235, 99, 255)',
          'rgb(86, 99, 255)',
          'rgb(255, 132, 99)',
          'rgb(255, 235, 99)',
          'rgb(255, 86, 99)'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}