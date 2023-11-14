var arrayFuncionarios = [];
getAllFuncionarios(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllFuncionarios(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/funcionario/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          for (i = 0; i < resposta.length; i++) {
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
            `;
          }
        });
        arrayFuncionarios = response;
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function getInfosFuncionario(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/funcionario/getInfosFuncionario/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          nome_funcionario.value = resposta[0].nomeFunc;
          email_funcionario.value = resposta[0].emailFunc;
          telefone_funcionario.value = resposta[0].telefoneFunc;
          cargo_funcionario.value = resposta[0].fkCargo;
          permissao_funcionario.value = resposta[0].permissao;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function cadastrarFuncionario() {
  var erro = false;
  var nomeFuncionario = nome_funcionario_adicionar.value;
  var emailFuncionario = email_funcionario_adicionar.value;
  var telefoneFuncionario = telefone_funcionario_adicionar.value;
  var permissaoFuncionario = permissao_funcionario_adicionar.value;
  var cargoFuncionario = cargo_funcionario_adicionar.value;
  var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");
  var fkSupervisor = sessionStorage.getItem("IDSUPERVISOR");

  if (nomeFuncionario == "") {
    nome_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (emailFuncionario == "") {
    email_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (telefoneFuncionario == "") {
    telefone_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (permissaoFuncionario == "") {
    permissao_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (cargoFuncionario == "") {
    cargo_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (fkEmpresa == "" || undefined) {
    alert("fkEmpresa não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/funcionario/cadastrarFuncionario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeFunc: nomeFuncionario,
        emailFunc: emailFuncionario,
        telefoneFunc: telefoneFuncionario,
        permissao: permissaoFuncionario,
        fkEmpresa: fkEmpresa,
        fkCargo: cargoFuncionario,
        fkSupervisor: fkSupervisor,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          console.log("Cadastrado com sucesso!");
          document.getElementById("tableFuncionarios").innerHTML = "";
          getAllFuncionarios(sessionStorage.getItem("EMPRESA_USUARIO"));
          getLastId(fkEmpresa);
        } else {
          throw alert(
            "Houve um erro ao tentar realizar o cadastro do Funcionario! 1"
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  } else {
    alert("Houve um erro ao tentar realizar o cadastro do Funcioario! 2");
  }
  
  console.log(getLastId(fkEmpresa));
}

function getLastId(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/funcionario/getLastId/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          localStorage.LASTID = resposta[0].idFuncionario;
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function cadastrarLogin() {
  var erro = false;
  var email = email_funcionario_adicionar.value;
  var senha = senha_funcionario_adicionar.value;
  var fkFuncionario = localStorage.getItem("LASTID");

  if (email == "") {
    email_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (senha == "") {
    senha_funcionario_adicionar.style = "border-color: red !important";
    erro = true;
  }
  if (fkFuncionario == "" || undefined) {
    erro = true;
    alert("fkFuncionario não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/funcionario/cadastrarLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
        fkFuncionario: fkFuncionario,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          console.log("Login cadsatrado com sucesso!");
        } else {
          throw alert(
            "Houve um erro ao tentar realizar o cadastro do Login! 1"
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  } else {
    alert("Houve um erro ao tentar realizar o cadastro do Login! 2");
  }
}

async function realizarCadastroCompleto() {
  await cadastrarFuncionario();
  cadastrarLogin();
}
