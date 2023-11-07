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
                <td class="text-right">
                  <div class="dropdown">
                    <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a class="dropdown-item" data-toggle="modal" data-target="#exampleModalCenter" onclick="getInfosFuncionario(${resposta[i].idFuncionario})">
                            Editar     
                      </a>
                      <a class="dropdown-item" href="#">Deletar</a>
                    </div>
                  </div>
            </td>
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

function getInfosFuncionario(idServidor){
  console.log(idServidor);
  fetch(`/funcionario/getInfosFuncionario/${idServidor}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          nome_funcionario.value = resposta[0].nomeFunc;
          email_funcionario.value = resposta[0].emailFunc;
          telefone_funcionario.value = resposta[0].telefoneFunc;
          cargo_funcionario.value = resposta[0].fkCargo;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}