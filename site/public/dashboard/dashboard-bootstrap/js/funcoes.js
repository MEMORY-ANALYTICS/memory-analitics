var loginUser = sessionStorage.LOGIN_USUARIO;
var senhaUser = sessionStorage.SENHA_USUARIO;
var nomeUser = sessionStorage.NOME_USUARIO;
var telUser = sessionStorage.TELEFONE_USUARIO;
var cargoUser = sessionStorage.CARGO_USUARIO;

// function verificarSession() {
//   if (loginUser == null || senhaUser == null) {
//     window.location = "../../login.html";
//   }
// }

function definirHeader() {
  navBarNome.innerHTML = nomeUser;
  supCargo.innerHTML = cargoUser;
}
