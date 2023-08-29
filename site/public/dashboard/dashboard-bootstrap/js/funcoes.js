var loginUser = sessionStorage.LOGIN_USUARIO;
var senhaUser = sessionStorage.SENHA_USUARIO;
var nomeUser = sessionStorage.NOME_USUARIO;
var telUser = sessionStorage.TELEFONE_USUARIO;

function verificarSession(){
    if(loginUser == "" || senhaUser == ""){
        window.location("../login.html");
    }
}

function definirHeader(){
    navBarNome.innerHTML = nomeUser;
}