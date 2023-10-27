var idServidorGlobal;
async function cadastrarComponente() {
  var erro = false;
  var fabricanteComponente = fabricante_componente.value;
  var nomeModeloComponente = nomeModelo_componente.value;
  var tipoComponente = tipo_componente.value;
  var limiteMinComponente = limiteMin_componente.value;
  var limiteMaxComponente = limiteMax_componente.value;
  var fkServidor = localStorage.getItem('IDSERVIDOR');

  await console.log(fabricanteComponente, nomeModeloComponente, tipoComponente, limiteMaxComponente, limiteMinComponente, fkServidor);
   if (fabricanteComponente == "") {
    document.getElementById("fabricante_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (nomeModeloComponente == "") {
    document.getElementById("nomeModelo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (tipoComponente == "") {
    document.getElementById("tipo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (limiteMinComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  }
   else if (limiteMaxComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  }
   else if (fkServidor == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/componente/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fabricante_componente: fabricanteComponente,
        nomeModelo_componente: nomeModeloComponente,
        tipo_componente: tipoComponente,
        limiteMin_componente: limiteMinComponente,
        limiteMax_componente: limiteMaxComponente,
        fkServidor: fkServidor
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert('Componente Cadastrado com sucesso!');
          console.log("Cadastrado com sucesso!");
        } else {
          throw alert(
            "Houve um erro ao tentar realizar o cadastro do Servidor!"
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
  var idServidor;
  function getIdByApelidoLike(apelidoServidor) {
    fetch(`/servidor/getIdByApelidoLike/${apelidoServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(resposta[0].idServidor)
            
            localStorage.IDSERVIDOR = resposta[0].idServidor;
          })
        } else {
          console.error("Nenhum dado encontrado ou erro na API");
        }
      })
      .catch(function (error) {
        console.error(
          `Erro na obtenção dos dados p/ Usuario: ${error.message}`
        );
      });
  }
}
