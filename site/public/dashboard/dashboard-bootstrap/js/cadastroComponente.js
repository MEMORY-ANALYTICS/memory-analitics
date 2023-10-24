function cadastrarServidor() {
    var erro = false;
    var fabricante_componente = fabricante_componente.value;
    var nomeModelo_componente = nomeModelo_componente.value;
    var ipServidor = ip_server.value;
    var numeroSerieServidor = num_serie.value;
    var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");

    if(SistemaOperacionalServidor == ""){
        alert("Sistema operacional não pode ser nulo!")
    }else if(apelidoServidor == ""){
        alert("apelidoServidor não pode ser nulo!")
    }else if(ipServidor == ""){
        alert("ipServidor não pode ser nulo!")
    }
    else if(numeroSerieServidor == ""){
        alert("numeroSerieServidor não pode ser nulo!")
    }else if(fkEmpresa == "" || undefined){
        alert("fkEmpresa não pode ser nulo!")
    }
    if (!erro) {
      fetch(`/servidor/cadastrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            SistemaOperacionalServidor:SistemaOperacionalServidor,
            apelidoServidor:apelidoServidor,
            ipServidor:ipServidor,
            numeroSerieServidor:numeroSerieServidor,
            fkEmpresa:fkEmpresa,
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
            console.log("Cadastrado com sucesso!");
          } else {
            throw alert(
              "Houve um erro ao tentar realizar o cadastro do Servidor!"
            );
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
    }
  } 