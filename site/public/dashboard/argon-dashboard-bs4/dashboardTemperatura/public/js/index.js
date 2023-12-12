
nomeLogin.innerHTML = sessionStorage.NOME_USUARIO
var emailLogado = sessionStorage.getItem("EMAIL_USUARIO")

getServidor(emailLogado)

var botaoSelecionado = 1
var listMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var listKpi = ["qtdIncidentes", "MedTemp", "CpuTempMax", "CpuTempMin"]

var dataTemp = new Date();
var dia = dataTemp.getDay();
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

  var idServidor = 12
 // idServidor = selecaoApelidoServidor.value

  
  console.log(idServidor)
  return idServidor;

}

setInterval(() => atualizarDados(getOptionValue), 40000);


setInterval(() => insertTemp(getOptionValue), 30000);

function insertTemp(idServidor) {

  var valorRegistro = Math.round(((Math.random()*2)+60),2)
  var datetime = new Date()
  var dtHoraRegistro = (datetime).toLocaleDateString() + ' ' + (datetime).toLocaleTimeString(); 


  fetch(`/insertTemp/inserirDados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idServidor: idServidor,
      valorRegistro: valorRegistro,
      dtHoraRegistro: dtHoraRegistro
    })
  }
  ).then(res => {
  })
    .catch(err => {
      console.log(err);
    })
}



function atualizarDados(idServidor) {

  console.log('atualizando o gráfico')

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
  graficoIncidentesMes(getOptionValue())
}




function getServidor(emailLogado) {


  fetch(`/servidor/servidor`
    , {
      method: "POST",
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

          dataBanco = json[i].dtHoraRegistro;
          
          anoBanco = dataBanco.substring(0,4)
          mesBanco = dataBanco.substring(5,7)
          diaBanco = dataBanco.substring(8,10)
          horaBanco = dataBanco.substring(11,13)
          minutosBanco = dataBanco.substring(14,16)
          
          if (diaBanco < 10) {
            diaBanco = `0${diaBanco}`
          }

          momentoRegistroMax.innerHTML = `${horaBanco}h ${minutosBanco} min.`;
          dataRegistroMax.innerHTML = `${diaBanco}/${mesBanco}/${anoBanco}`;
        } else if (metodoKpi == "CpuTempMin") {

          cpuTempMin.innerHTML = json[i].valorRegistro;
          dataBanco = json[i].dtHoraRegistro
          
          anoBanco = dataBanco.substring(0,4)
          mesBanco = dataBanco.substring(5,7)
          diaBanco = dataBanco.substring(8,10)
          horaBanco = dataBanco.substring(11,13)
          minutosBanco = dataBanco.substring(14,16)

          if (diaBanco < 10) {
            diaBanco = `0${diaBanco}`
          }

          momentoRegistroMin.innerHTML = `${horaBanco}h ${minutosBanco} min.`;
          dataRegistroMin.innerHTML = `${diaBanco}/${mesBanco}/${anoBanco}`;

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
            
          } else if(json[i].mediaTemperatura > 85 || json[i].mediaTemperatura < 55){
            estadoTempMedia.innerHTML = 'Alerta'
          } else {
            estadoTempMedia.innerHTML = 'Aceitável'
          }

          medTemp.innerHTML = json[i].mediaTemperatura;

          dataMedTemp.innerHTML = `12/12/2023`;

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
    method: "POST",
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
        graficoIncidentes.data.labels.push(listMes[json[i].mes-1])
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
        label: ['Incidentes'],
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
      plugins: {
        doughnutKey: {
            doughnut: {
                grid: {
                    display: false
                }
            }
        }
      }
    }
  });
}