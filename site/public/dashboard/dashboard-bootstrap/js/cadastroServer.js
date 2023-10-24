function cadastrarServidor() {
    var erro = false;
    var SistemaOperacionalServidor = sistema_operacional.value;
    var apelidoServidor = apelido_servidor.value;
    var ipServidor = ip_server.value;
    var numeroSerieServidor = num_serie.value;
    var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");

    if(SistemaOperacionalServidor == ""){
        
        sistema_operacional.style ='border-color: red !important'
        erro=true
    }
    if(apelidoServidor == ""){
       
        apelido_servidor.style ='border-color: red !important'
        erro=true
    }
    if(ipServidor == ""){
        
        ip_server.style ='border-color: red !important'
        erro=true
    }
    
    if(numeroSerieServidor == ""){
        
        num_serie.style='border-color: red !important'
        erro=true
    } 
    if(fkEmpresa == "" || undefined){ 
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
    }else {
      alert("Houve um erro ao tentar realizar o cadastro do Servidor!")
    }
  } 