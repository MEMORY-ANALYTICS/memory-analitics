function formatarData(opcao) {
  dataTemp = new Date();

  var dia = dataTemp.getDate();
  var mes = dataTemp.getMonth() + 1;
  var ano = dataTemp.getFullYear();

  if (dia < 10) {
    dia = `0${dia}`
  }
  if (opcao == 1) {
    // Buscar no banco
    return dateNow = `${ano}-${mes}-${dia}`;
  } else {
    // usar direto com id.innerHTML na KPI
    return dateNow = `${dia}-${mes}-${ano}`;
  }
}

listar();
function listar() {
  // Tirar uma váriavel numérica idServidor com a fkEmpresa pega no sessionStorage
  // SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${10005} AND tipoComponente = 'REDE';
  var fkEmpresa = sessionStorage.EMPRESA_USUARIO;

  fetch(`/dashboardRedeRouter/listar/${fkEmpresa}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((servidor) => {

        for (var i = 0; i < servidor.length; i++) {
          if (i == 0) {
            listarServidor.innerHTML += `<option value="${servidor[i].idServidor}">${servidor[i].apelidoServidor}</option>`;
            selectIdComponente()
          } else {
            listarServidor.innerHTML += `<option value="${servidor[i].idServidor}">${servidor[i].apelidoServidor}</option>`;
          }
        }
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  // retorno = valor selecionado no option ex: 4
}

function selectIdComponente() {
  // alert("chamou")
  // Tirar uma váriavel númérica idComponete no componente com o idServidor pego na função listar();
  // SELECT idComponente FROM componente WHERE fkServidor = ${4} AND tipoComponente = 'REDE';
  var fkServidor = listarServidor.value;
  // alert(fkServidor)
  var idComponente = 0;
  return fetch(`/dashboardRedeRouter/pegarIdComponente/${fkServidor}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((componente) => {
        
        for (var i = 0; i < componente.length; i++) {
          idComponente = componente[i].idComponente;
        }
        // alert(idComponente)
        kpiMenorVelocidade(idComponente)
        kpiMaiorLatencia(idComponente)
        kpiMediaPacotes(idComponente)
        valorGrafico1(idComponente)
        sessionStorage.ID_COMPONENTE = idComponente;

        // Chama a função novamente após 1 segundo
       setTimeout(selectIdComponente(), 100000);

      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
// var velocidadeMax = selectGraficoVelocidadeRede(selectIdComponente())
// alert(velocidadeMax)
// selectIdComponente()
function kpiMenorVelocidade(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var valorRegistroPego1 = 0;
  var momentoRegistro = "";
  fetch(`/dashboardRedeRouter/pegarKpiVelocidade/${fkComponente}/${dataAtual}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((registro) => {
       
          valorRegistroPego1 = registro[0].valorVelocidadeMin;
          momentoRegistro = registro[0].horaRegistro

          if(valorRegistroPego1 == null || valorRegistroPego1 == ''){
            menorValorTransmissao.innerHTML = '';
            momentoDaCaptura.innerHTML = '';
          }else{
            const numeroFormatado = valorRegistroPego1.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
            });
          menorValorTransmissao.innerHTML = numeroFormatado;
          momentoDaCaptura.innerHTML = `${formatarData(2)} ${momentoRegistro}`

        }
        
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  // Jogar Horário com innerHTML
  // retorno = # min(valorRegistro), dtHoraRegistro => '1328.632464', '2023-10-09 10:30:00'

}

function kpiMaiorLatencia(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var valorRegistroPego = 0;
  var momentoRegistro = "";
  fetch(`/dashboardRedeRouter/pegarKpiLatencia/${fkComponente}/${dataAtual}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((registro) => {
          valorRegistroPego = registro[0].valorLatenciaMax;
          momentoRegistro = registro[0].horaRegistro

          if (valorRegistroPego == null) {
            latenciaMax.innerHTML = '';
            dataKpiLatencia.innerHTML = '';
          }else{
            const numeroFormatado2 = valorRegistroPego.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
            });
          latenciaMax.innerHTML = numeroFormatado2;
          dataKpiLatencia.innerHTML = `${formatarData(2)} ${momentoRegistro}`
        }
        
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  // Jogar Horário com innerHTML
  // retorno = # min(valorRegistro), dtHoraRegistro => '1328.632464', '2023-10-09 10:30:00'

}

function kpiMediaPacotes(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var valorMedia = 0;
  // var momentoRegistro = "";
  fetch(`/dashboardRedeRouter/pegarKpiPacotes/${fkComponente}/${dataAtual}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((registro) => {
        
          valorMedia = registro[0].mediaDodia;
          // momentoRegistro = registro[0].horaRegistro
          
          if(valorMedia == null){
            kpiMediaPacote.innerHTML =  '';
            dataKpiMedia.innerHTML = '';
          }else{

          const valorRegistroPegoFormatado = valorMedia.toLocaleString('pt-BR', {
            maximumFractionDigits: 0,
          });
          sessionStorage.MEDIA_PACOTES = valorRegistroPegoFormatado;
          kpiMediaPacote.innerHTML = valorRegistroPegoFormatado;
          dataKpiMedia.innerHTML = `${formatarData(2)}`
        }
          });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

}
// -------------------------------------------- Fim Kpis - Retorno de variáveis ------------------------------------------------

function valorGrafico1(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  fetch(`/dashboardRedeRouter/pegarLatenciaAtual/${fkComponente}/${dataAtual}`).then(function (response) {
    if (response.ok) {
        // alert(response.status);
        if (response.status == 204) {

            // var feed = document.getElementById("registrando");
            // var mensagem = document.createElement("scroll-page");

            mensagem.innerHTML = "0." //SE NÂO APARECER NADA, MUDAR AQUI
            feed.appendChild(mensagem);

            throw "Nenhum resultado encontrado!!";
        }

        response.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));

            // var feed = document.getElementById("registrando");
            // feed.innerHTML = "";
            var graficoLatencia = graficoLatencia
            graficoLatencia.data.datasets[0].data = [];
            
            for (let i = 0; i < resposta.length; i++) {
                let latenciaAgora = resposta[i].valorLatenciaAtual;
                graficoLatencia.data.datasets[0].data.push(latenciaAgora.toFixed(2));
                alert("a")
            }
            graficoLatencia.update();
            // setTimeout(valorGrafico1(),10000)
        });
    } else {
        throw ("Houve um erro na API")
    }
}).catch(function (erro) {
    console.error(erro);
});
}