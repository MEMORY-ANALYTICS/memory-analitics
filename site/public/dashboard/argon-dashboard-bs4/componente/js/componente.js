var idServidorGlobal;

function atualizarComponente() {
  getIdByApelidoLike(apelido_servidor.value);
  let erro = false;
  let fabricanteComponente = fabricante_componente.value;
  let nomeModeloComponente = nomeModelo_componente.value;
  let tipoComponente = tipo_componente.value;
  let limiteMinComponente = limiteMin_componente.value;
  let limiteMaxComponente = limiteMax_componente.value;
  let fkServidor = localStorage.getItem("IDSERVIDOR");
  var idComponente = localStorage.getItem("IDCOMPONENTEATUAL");

  console.log(
    "Recebi os dados: " +
      fabricanteComponente +" "+
      nomeModeloComponente +" "+
      tipoComponente +" "+
      limiteMaxComponente +" "+
      limiteMinComponente +" "+
      fkServidor+" "+
      idComponente
  );
  if (fabricanteComponente == "") {
    document.getElementById("fabricante_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (nomeModeloComponente == "") {
    document.getElementById("nomeModelo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (tipoComponente == "") {
    document.getElementById("tipo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (limiteMinComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  } else if (limiteMaxComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  } else if (fkServidor == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/componente/alterar/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fabricante_componente: fabricanteComponente,
        nomeModelo_componente: nomeModeloComponente,
        tipo_componente: tipoComponente,
        limiteMin_componente: limiteMinComponente,
        limiteMax_componente: limiteMaxComponente,
        fkServidor: fkServidor,
        idComponente: idComponente,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert("Componente Alterado com sucesso!");
          console.log("Cadastrado com sucesso!");
          tableComponentes.innerHTML = "";
          getAllComponentes(sessionStorage.getItem("EMPRESA_USUARIO"));
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

function cadastrarComponente() {
  console.log("Acessei a funcao cadastrarComponente");
  getIdByApelidoLike(apelido_servidor_cadastrar.value);
  let erro = false;
  let fabricanteComponente = fabricante_componente_cadastrar.value;
  let nomeModeloComponente = nomeModelo_componente_cadastrar.value;
  let tipoComponente = tipo_componente_cadastrar.value;
  let limiteMinComponente = limiteMin_componente_cadastrar.value;
  let limiteMaxComponente = limiteMax_componente_cadastrar.value;
  let fkServidor = localStorage.getItem("IDSERVIDOR");

  console.log(
    "Recebi os dados: " +
      fabricanteComponente +
      nomeModeloComponente +
      tipoComponente +
      limiteMaxComponente +
      limiteMinComponente +
      fkServidor
  );
  if (fabricanteComponente == "") {
    document.getElementById("fabricante_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (nomeModeloComponente == "") {
    document.getElementById("nomeModelo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (tipoComponente == "") {
    document.getElementById("tipo_componente").style =
      "border-color: red !important";
    erro = true;
  } else if (limiteMinComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  } else if (limiteMaxComponente == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  } else if (fkServidor == "" || undefined) {
    alert("limiteMin_componente não pode ser nulo!");
  }
  if (!erro) {
    fetch(`/componente/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fabricante_componente: fabricanteComponente,
        nomeModelo_componente: nomeModeloComponente,
        tipo_componente: tipoComponente,
        limiteMin_componente: limiteMinComponente,
        limiteMax_componente: limiteMaxComponente,
        fkServidor: fkServidor,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert("Componente Cadastrado com sucesso!");
          console.log("Cadastrado com sucesso!");
          tableComponentes.innerHTML = "";
          getAllComponentes(sessionStorage.getItem("EMPRESA_USUARIO"));
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

var idServidor;
function getIdByApelidoLike(apelidoServidor) {
  fetch(`/servidor/getIdByApelidoLike/${apelidoServidor}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(resposta[0].idServidor);

          localStorage.IDSERVIDOR = resposta[0].idServidor;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados p/ Usuario: ${error.message}`
      );
    });
}


var arrayComponentes = [];
getAllComponentes(sessionStorage.getItem("EMPRESA_USUARIO"));

function getAllComponentes(fkEmpresa) {
  console.log(fkEmpresa);
  fetch(`/componente/getAll/${fkEmpresa}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          for (i = 0; i < resposta.length; i++) {
            tableComponentes.innerHTML += `
            
            <tr>
            <td>
              <span class="status">${resposta[i].nomeModelo}</span>
            </td>
            <td>
              <span class="status">${resposta[i].fabricante}</span>
            </td>
            <td>
              <span class="status">${resposta[i].tipoComponente}</span>
            </td>
            <td>
              <span class="status">${resposta[i].limiteMin}</span>
            </td>
            <td>
              <span class="status">${resposta[i].limiteMax}</span>
            </td>
            <td>
              <span class="status">${resposta[i].apelidoServidor}</span>
            </td>
            <td class="text-right">
              <div class="dropdown">
                <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCenter" onclick="getInfosComponente(${resposta[i].idComponente})">
                        Editar     
                  </a>
                  <a class="dropdown-item" onclick="deleteComponente(${resposta[i].idComponente})">Deletar</a>
                </div>
              </div>
            </td>
          </tr>
            `;
          }
        });
        arrayComponentes = response;
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}

function getInfosComponente(idComponente) {
  console.log(idComponente);
  fetch(`/componente/getInfosComponente/${idComponente}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta[0])}`);
          apelido_servidor.value = resposta[0].apelidoServidor;
          fabricante_componente.value = resposta[0].fabricante;
          nomeModelo_componente.value = resposta[0].nomeModelo;
          tipo_componente.value = resposta[0].tipoComponente;
          limiteMin_componente.value = resposta[0].limiteMin;
          limiteMax_componente.value = resposta[0].limiteMax;

          localStorage.IDCOMPONENTEATUAL = resposta[0].idComponente;
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ Usuario: ${error.message}`);
    });
}


function deleteComponente(idComponente) {
  Swal.fire({
    title: "Deseja realmente deletar este componente?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Deletar",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      let erro = false;

      if(idComponente == null || idComponente == undefined){
        erro = true;
      }
      if (!erro) {
        fetch(`/componente/deleteComponente/${idComponente}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
              Swal.fire("Componente Deletado com sucesso!", "", "success");
              tableComponentes.innerHTML = "";
              getAllComponentes(sessionStorage.getItem("EMPRESA_USUARIO"));
            } else {
              throw alert(
                "Houve um erro ao tentar realizar o delete do Componente!"
              );
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
      }

    } else if (result.isDenied) {
      Swal.fire("Mudanças não efetuadas!", "", "info");
    }
  });
}