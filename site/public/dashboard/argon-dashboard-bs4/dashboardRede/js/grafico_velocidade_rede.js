
var apelidosServidores = [];

function selectServidores() {

  fetch("/dashCorrelacao/selectServidores", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          fkEmpresa: sessionStorage.EMPRESA_USUARIO
      })
  }).then(function (resposta) {
      if (resposta.ok) {
          resposta.json().then(json => {
              console.log("json comprimento")
              console.log(json.length)
              console.log("json colchetes")
              console.log(json[0])
              for (var i = 0; i < json.length; i++) {
                  apelidosServidores.push([json[i].apelidoServidor, json[i].idServidor]);
              }
              for (var i = 0; i < apelidosServidores.length - 1; i++) {
                  console.log(apelidosServidores[i][1], apelidosServidores[i][0])
                  var option = document.createElement('option');
                  option.value = apelidosServidores[i][1];
                  option.text = apelidosServidores[i][0];
                  listaServidores.appendChild(option);
              }
          });
      } else {
          resposta.text().then(textoErro => {
              console.error(textoErro);
          });
      }
  }).catch(function (erro) {
      console.log(erro);
  });
}
selectServidores();
selectIdComponente(4);
function selectIdComponente(fkServidor) {
        var fkServidor = fkServidor;

        fetch(`/dashboardRede3/pegarIdComponente/${fkServidor}`, {
          cache: "no-store",
        }).then(function (resposta) {
          console.log("ESTOU NO THEN DO SELECT idComponente!")
    
            if (resposta.ok) {
              console.log(resposta);
    
              resposta.json().then((json) => {
                console.log(json);
                console.log(JSON.stringify(json));
    
                const idComponete = json.idComponete;
            });
          } else {
            console.log("Houve um erro ao tentar realizar o SELECT idComponente!");
    
              resposta.text().then((texto) => {
                console.error(texto);
              });
            }
          })
          .catch(function (erro) {
            console.log(erro);
          });
          alert(idComponete)
}

function formatarData(){
  dataTemp = new Date();

var dia = dataTemp.getDate();
var mes = dataTemp.getMonth()+1;
var ano = dataTemp.getFullYear();

if(dia<10){
  dia = `0${dia}`
}
  var selectBanco = `${ano}-${mes}-${dia}`;

  return selectBanco;
}

pegarKpiLatencia();

function pegarKpiLatencia() {
alert(formatarData())
}