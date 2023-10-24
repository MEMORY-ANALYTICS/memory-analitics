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
            tableServers.innerHTML += `
            <tr>
                <td>${resposta[i].SistemaOperacionalServidor}</td>
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
