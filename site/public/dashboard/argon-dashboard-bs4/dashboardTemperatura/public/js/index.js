sessionStorage.setItem(
  "emailFunc", "",
)  

console.log(sessionStorage.emailFunc)


var functionKpi = ["MedTempAtual", "MedTempIdeal", "CoreTempMax", "CoreTempMIn"]


horaDash1()
getServidor()
//for (i = 0; i < functionKpi.length; i++) {
//  getKpi(functionKpi[i])
//}

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
        console.log(json[i])
        console.log(json[i][0])
      }
    })
  })
    .catch(err => {
      console.log(err);
    })
}

