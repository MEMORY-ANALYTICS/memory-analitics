
listar();
function listar() {
  var fkEmpresa = sessionStorage.EMPRESA_USUARIO;

  fetch(`/dashboardRedeRoute/listar/${fkEmpresa}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((servidor) => {
        empresas.forEach((servidor) => {
          for(var i = 0; i < servidor.length; i++)
          listarServidor.innerHTML += `<option value='${servidor[i].idServidor}'>${servidor[i].apelidoServidor}</option>`;
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function sumirMensagem() {
  cardErro.style.display = "none";
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