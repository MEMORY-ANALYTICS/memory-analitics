function entrar() {
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
    toastr.error("Preencha todos os campos corretamente!");
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
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
          sessionStorage.CARGO_USUARIO = json[0].fkCargo;

          window.location = "../dashboard/dashboard-bootstrap/index.html";

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
