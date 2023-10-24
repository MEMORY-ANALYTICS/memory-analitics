function cadastrarComponente() {
  var erro = false;
  var fabricante_componente = fabricante_componente.value;
  var nomeModelo_componente = nomeModelo_componente.value;
  var ipServidor = ip_server.value;
  var numeroSerieServidor = num_serie.value;
  var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");

  if (SistemaOperacionalServidor == "") {
    document.getElementById("fabricante_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (apelidoServidor == "") {
    document.getElementById("nomeModelo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (ipServidor == "") {
    ip_server.style = "border-color: red !important";
    erro = true;
  } else if (numeroSerieServidor == "") {
    num_serie.style = "border-color: red !important";
  } else if (fkEmpresa == "" || undefined) {
    alert("fkEmpresa não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/servidor/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SistemaOperacionalServidor: SistemaOperacionalServidor,
        apelidoServidor: apelidoServidor,
        ipServidor: ipServidor,
        numeroSerieServidor: numeroSerieServidor,
        fkEmpresa: fkEmpresa,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
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
}

function getIdByApelidoLike() {
  var apelidoServidor = apelidoServidor.value;
  if (apelidoServidor == "") {
    alert("Apelido do servidor não pode ser nulo");
  } else {
    fetch(`/servidor/getIdByApelidoLike/${apelidoServidor}`)
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          resposta.json().then(function (response) {
            return response[0].idServidor;
          });
        } else {
          return null;
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}
