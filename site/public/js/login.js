function entrar() {
  var email = document.getElementById("email_input").value;
  var senha = document.getElementById("senha_input").value;

  if (email == "" || senha == "") {
    alert("Preencha todos os campos corretamente!");
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
          sessionStorage.CARGO_USUARIO = json[0].fkCargo == 1 ? "Gerente" : "Analista";
          sessionStorage.EMPRESA_USUARIO = json[0].fkEmpresa;

          if(sessionStorage.CARGO_USUARIO == "Gerente"){
            window.location = "../dashboard/dashboard-bootstrap/paginaGerente.html";
          }else{
            window.location = "../dashboard/dashboard-bootstrap/paginaAnalista.html";
          }

        });
      } else {

        console.log("Houve um erro ao tentar realizar o login!");

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

// function sumirMensagem() {
//   cardErro.style.display = "none";
// }

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
