var arrayComponentes = [];
getAllComponentes(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllComponentes(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/componente/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          for(i= 0; i < resposta.length; i++){
            tableComponentes.innerHTML += `
            <tr>
                <td>${resposta[i].nomeModelo}</td>
                <td>${resposta[i].fabricante}</td>
                <td>${resposta[i].tipoComponente}</td>
                <td>${resposta[i].limiteMin}</td>
                <td>${resposta[i].limiteMax}</td>
                <td>${resposta[i].apelidoServidor}</td>
            </tr>
            `
          }
        });
          arrayComponentes = response;
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

