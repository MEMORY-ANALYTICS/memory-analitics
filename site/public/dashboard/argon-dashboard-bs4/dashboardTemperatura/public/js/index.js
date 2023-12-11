

nomeLogin.innerHTML = sessionStorage.NOME_USUARIO
var emailLogado = sessionStorage.getItem("EMAIL_USUARIO")

getServidor(emailLogado)

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
horaDash(getOptionValue(), anoMes)
createIncidentes()
graficoIncidentesMes(getOptionValue())

for (i = 0; i < listKpi.length; i++) {
  getKpi(listKpi[i], getOptionValue())
}

function getOptionValue() {

  select = document.getElementById("selecaoApelidoServidor")

  var selectedValue = select.value;

  return 12;

}

setInterval(() => atualizarDados(getOptionValue), 500000);


function atualizarDados(idServidor) {
  if (botaoSelecionado == 1) {
    horaDash(getOptionValue(), idServidor, anoMes)
  } else if (botaoSelecionado == 2) {
    semanaDash(getOptionValue(), idServidor, anoMes)
  } else {
    mesDash(getOptionValue(), idServidor, anoMes)
  }

  for (i = 0; i < listKpi.length; i++) {
    getKpi(listKpi[i], idServidor)
  }

  graficoIncidentes.destroy()
  createIncidentes()
  graficoIncidentesMes('Servidor B')
}




function getServidor(emailLogado) {


  fetch(`/servidor/servidor`
    , {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailLogado
      })
    }
  ).then(res => {
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


function getKpi(metodoKpi, idServidor) {

  fetch(`/kpi/${metodoKpi}`, {
    method: "post",
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
            
            Swal.fire({
              title: 'Alta quantidade de incidentes!',
              text: "Este servidor tem mais de 5 alertas reportados!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Estou ciente'
            }).then((result) => {
              if (result.isConfirmed) {
              }
            })
            

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

          if (json[i].mediaTemperatura > 100 || json[i].mediaTemperatura < 50) {
            estadoTempMedia.innerHTML = 'Crítico'
            Swal.fire({
              title: 'Alta média de temperatura!',
              text: "A média de temperatura está com valores preocupantes!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Estou ciente'
            }).then((result) => {
              if (result.isConfirmed) {
              }
            })
            
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



function graficoIncidentesMes(idServidor) {

  fetch(`/grafico/graficoIncidentes`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fkServidor: idServidor
    })
  }
  ).then(res => {
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