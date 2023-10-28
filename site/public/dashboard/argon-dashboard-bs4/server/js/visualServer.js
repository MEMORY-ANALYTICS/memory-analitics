var arrayServers = [];
getAllServers(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllServers(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/servidor/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          for (i = 0; i < resposta.length; i++) {
            document.getElementById('tableServers').innerHTML += `
            <tr>
                <td class="budget">${resposta[i].SistemaOperacionalServidor}</td>
                <td>${resposta[i].apelidoServidor}</td>
                <td>${resposta[i].ipServidor}</td>
                <td>${resposta[i].numeroSerieServidor}</td>
            </tr>
            `;
          }
        });
        arrayServers = response;
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function atualizarServidor() {
  var erro = false;
  var SistemaOperacionalServidor = sistema_operacional.value;
  var apelidoServidor = apelido_servidor.value;
  var ipServidor = ip_server.value;
  var numeroSerieServidor = num_serie.value;
  var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");

  if(SistemaOperacionalServidor == ""){
      alert("Sistema operacional não pode ser nulo!")
  }else if(apelidoServidor == ""){
      alert("apelidoServidor não pode ser nulo!")
  }else if(ipServidor == ""){
      alert("ipServidor não pode ser nulo!")
  }
  else if(numeroSerieServidor == ""){
      alert("numeroSerieServidor não pode ser nulo!")
  }else if(fkEmpresa == "" || undefined){
      alert("fkEmpresa não pode ser nulo!")
  }
  if (!erro) {
    fetch(`/servidor/atualizar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          SistemaOperacionalServidor:SistemaOperacionalServidor,
          apelidoServidor:apelidoServidor,
          ipServidor:ipServidor,
          numeroSerieServidor:numeroSerieServidor,
          fkEmpresa:fkEmpresa,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          console.log("Atualizado com sucesso!");
          getAllServers(sessionStorage.getItem("EMPRESA_USUARIO"));
        } else {
          throw alert(
            "Houve um erro ao tentar realizar a atualização do Servidor!"
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
} 
