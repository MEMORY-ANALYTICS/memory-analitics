var arrayFuncionarios = [];
getAllFuncionarios(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllFuncionarios(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/funcionario/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          for(i= 0; i < resposta.length; i++){
            tableFuncionarios.innerHTML += `
            <tr>
                <td>${resposta[i].nomeFunc}</td>
                <td>${resposta[i].emailFunc}</td>
                <td>${resposta[i].telefoneFunc}</td>
            </tr>
            `
          }
        });
          arrayFuncionarios = response;
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

