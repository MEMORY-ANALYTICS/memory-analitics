var arrayFuncionarios = [];
getAllFuncionarios();

function getAllFuncionarios() {
  fetch(`/funcionario/getAll`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          arrayFuncionarios = resposta;
          adicionarFuncionarios();
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados p/ idEmpresa: ${error.message}`
      );
    });
  return false;
}

function adicionarFuncionarios() {
  arrayFuncionarios.forEach((x) => {
    tableFuncionarios.innerHTML += `
        <tr>
            <td>${x.nomeFunc}</td>
            <td>${x.emailFunc}</td>
            <td>${x.telefoneFunc}</td>
        </tr>
        `;
  });
}
