sessionStorage.setItem(
  "emailFunc", "",
  "servidores", []
)

console.log(sessionStorage)


var functionKpi = ["MedTempAtual", "MedTempIdeal", "CoreTempMax", "CoreTempMIn"]


horaDash1()
//getServidor()
for (i = 0; i < functionKpi.length; i++) {
  getKpi(functionKpi[i])
}

function getServidor() {


  fetch(`/servidor/servidor`, {
    method: "GET"
  }).then(res => {
    res.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i])
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
        console.log(json[i])
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}

