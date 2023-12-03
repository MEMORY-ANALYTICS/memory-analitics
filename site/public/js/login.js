
function entrar() {
  email_input.style ='border-color: black'
senha_input.style ='border-color: black'
  var email = document.getElementById("email_input").value;
  var senha = document.getElementById("senha_input").value;

  if (email == "") {
    email_input.style ='border-color: red'
  } 
  
  if(senha == ""){
    senha_input.style ='border-color: red'
  }

  console.log("FORM LOGIN: ", email);
  console.log("FORM SENHA: ", senha);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");
      console.log("Resposta do then: ");
      console.log(resposta);

      if (resposta.ok) {
        console.log(resposta);
        console.log("testando");

        resposta.json().then((json) => {

          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.LOGIN_USUARIO = json[0].login;
          sessionStorage.SENHA_USUARIO = json[0].senha;
          sessionStorage.NOME_USUARIO = json[0].nomeFunc;
          sessionStorage.EMAIL_USUARIO = json[0].emailFunc;
          sessionStorage.TELEFONE_USUARIO = json[0].telefoneFunc;
          // sessionStorage.CARGO_USUARIO = json[0].fkCargo == 1 ? "Gerente" : "Analista";
          sessionStorage.EMPRESA_USUARIO = json[0].fkEmpresa;
          sessionStorage.NOME_EMPRESA_USUARIO = json[0].nomeEmpresa;
          sessionStorage.IDSUPERVISOR = json[0].idFuncionario;

          // if(sessionStorage.CARGO_USUARIO == "Gerente"){
            window.location = "./dashboard/argon-dashboard-bs4/paginaGerente.html";
          // }else{
          //   window.location = "./dashboard/argon-dashboard-bs4/paginaAnalista.html";
          // }

        });
      } else {

       console.log("Houve um erro ao tentar realizar o login!");


       alert("Houve um erro ao tentar realizar o login!")
       
       

        resposta.text().then((texto) => {

          console.log("teste");
          console.error(texto);

        });
      }
    })
    .catch(function (erro) {

      console.log(erro);

    });
  // }

  return false;
}

