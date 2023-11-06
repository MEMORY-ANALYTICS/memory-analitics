var arrayServers = [];
getAllServers(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllServers(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/servidor/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          for (i = 0; i < resposta.length; i++) {
            document.getElementById("tableServers").innerHTML += `
           <tr>
            <td>
              <span class="status">${resposta[i].SistemaOperacionalServidor}</span>
            </td>
            <td>
              <span class="status">${resposta[i].apelidoServidor}</span>
            </td>
            <td>
              <span class="status">${resposta[i].ipServidor}</span>
            </td>
            <td>
              <span class="status">${resposta[i].numeroSerieServidor}</span>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCenter" onclick="getInfosServidor(${resposta[i].idServidor})">
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
        arrayServers = response;
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function atualizarServidor() {
  var erro = false;
  var SistemaOperacionalServidor = sistema_operacional.value;
  var apelidoServidor = apelido_servidor.value;
  var ipServidor = ip_server.value;
  var numeroSerieServidor = num_serie.value;
  var fkEmpresa = sessionStorage.getItem("EMPRESA_USUARIO");

  if (SistemaOperacionalServidor == "") {
    alert("Sistema operacional não pode ser nulo!");
  } else if (apelidoServidor == "") {
    alert("apelidoServidor não pode ser nulo!");
  } else if (ipServidor == "") {
    alert("ipServidor não pode ser nulo!");
  } else if (numeroSerieServidor == "") {
    alert("numeroSerieServidor não pode ser nulo!");
  } else if (fkEmpresa == "" || undefined) {
    alert("fkEmpresa não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/servidor/atualizar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SistemaOperacionalServidor: SistemaOperacionalServidor,
        apelidoServidor: apelidoServidor,
        ipServidor: ipServidor,
        numeroSerieServidor: numeroSerieServidor,
        fkEmpresa: fkEmpresa,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          console.log("Atualizado com sucesso!");
          document.getElementById("tableServers").innerHTML = "";
          getAllServers(sessionStorage.getItem("EMPRESA_USUARIO"));
        } else {
          throw alert(
            "Houve um erro ao tentar realizar a atualização do Servidor!"
          );
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}

function getInfosServidor(idServidor){
  console.log(idServidor);
  fetch(`/servidor/getInfosServidor/${idServidor}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          sistema_operacional.value = resposta[0].SistemaOperacionalServidor;
          apelido_servidor.value = resposta[0].apelidoServidor;
          ip_server.value = resposta[0].ipServidor;
          num_serie.value = resposta[0].numeroSerieServidor;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function cadastrarServidor() {
  var erro = false;
  var SistemaOperacionalServidor = sistema_operacional_adicionar.value;
  var apelidoServidor = apelido_servidor_adicionar.value;
  var ipServidor = ip_server_adicionar.value;
  var numeroSerieServidor = num_serie_adicionar.value;
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
          document.getElementById("tableServers").innerHTML = "";
          getAllServers(sessionStorage.getItem("EMPRESA_USUARIO"));
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