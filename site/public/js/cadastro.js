// -- Inicio da mascara para o CNPJ -- \\
function formatarCampo(campoTexto) {
  campoTexto.value = mascaraCnpj(campoTexto.value);
}

function retirarFormatacao(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

function mascaraCnpj(valor) {
  return valor.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
}
// -- Final da mascara do CNPJ -- \\

// -- Inicio da mascara para o Telefone -- \\
function formatarCampoTel(campoTexto) {
  campoTexto.value = mascaraTel(campoTexto.value);
}

function retirarFormatacaoTel(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

function mascaraTel(valor) {
  return valor.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
}
// -- Final da mascara do telefone -- \\

// -- Função para gerar senhas -- \\
function geradorDeSenhas() {
  var caracters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
  var senha = "";

  for (var i = 0; i < 16; i++) {
    var numeroSorteado = Math.floor(Math.random() * caracters.length);
    senha += caracters.substring(numeroSorteado, numeroSorteado + 1);
  }
  return senha;
}

function cadastrar() {
  var erro = false;
  var nomeEmpresa = nomeEmpresa_input.value;
  var nomeAdm = nomeAdm_input.value;
  var emailContato = emailContato_input.value;
  var telContato = telContato_input.value;
  var cnpj = cnpj_input.value;
  var userPassword = geradorDeSenhas();
  console.log(userPassword);

  // -- Validações de input -- \\
  if (
    nomeEmpresa == "" ||
    nomeAdm == "" ||
    emailContato == "" ||
    telContato == "" ||
    cnpj == ""
  ) {
    toastr.error("Preencha todos os campos corretamente!");
    erro = true;
  } else if (!emailContato.includes("@") || !emailContato.includes(".com")) {
    toastr.error("Email inválido!\nAdicione @ ou '.com' ");
    erro = true;
  }

  if (!erro) {
    console.log(userPassword);
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeEmpresaServer: nomeEmpresa,
        nomeAdmServer: nomeAdm,
        emailContatoServer: emailContato,
        telContatoServer: telContato,
        cnpjServer: cnpj,
        senhaCadastroServer: userPassword,
      }),
    })
      .then(function (resposta) {
        console.log("Entrando do then");
        console.log(resposta);

        if (resposta.ok) {
          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));
            ratangulo_formulario.innerHTML = `
            <div class="retangulo formulario retanguloModal">
              <img
                src="./assets/img/verificado.png"
                alt=""
                class="img_validado"
              />
              <a href="./login.html">
              <button" class="btn btn-success text-dark fs-1">
                Login
              </button>
              </a>
            </div>;        
            `;
          });
        } else {
          console.log("Houve um erro ao realizar o cadastro!");
          toastr.error(
            "Infelizmente, não conseguimos realizar o seu cadastro.\nTente denovo mais tarde!"
          );

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
    return false;
  }
}

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
