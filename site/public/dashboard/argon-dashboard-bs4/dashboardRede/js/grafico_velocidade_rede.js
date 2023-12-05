selectServidorVetor();

function selectServidorVetor() { //ATUALIZAR DATALIST DOS PONTOS
        // alert(sessionStorage.EMPRESA_USUARIO)
        var fkEmpresa = sessionStorage.EMPRESA_USUARIO;

        fetch(`/dashboardRede3/listar/${fkEmpresa}`,{
                cache: "no-store",
              }).then(function (resposta) {
                if (resposta.ok) {
                        if (resposta.status == 204) {
                                var feed = document.getElementById("selecionarServidor");
                                var mensagem = document.createElement("option");
                                feed.appendChild(mensagem);
                                throw "Nenhum resultado encontrado!!";
                        }

                        resposta.json().then(function (resposta) {
                                console.log("Dados recebidos: ", JSON.stringify(resposta));

                                var feed = document.getElementById("selecionarServidor");
                                feed.innerHTML = "";
                                for (var i = 0; i < resposta.length; i++) {
                                        var publicacao = resposta[i];

                                        var novaOpcao = document.createElement("option");
                                        novaOpcao.text = json[i].apelidoServidor
                                        novaOpcao.value = json[i].idServidor

                                        var select = document.getElementById("selecionarServidor");
                                        select.appendChild(novaOpcao);
                                }
                        });
                } else {
                        throw ("Houve um erro na API")
                }
        }).catch(function (resposta) {
                console.error(resposta);
        });
}

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