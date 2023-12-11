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

function formatarHora() {
  var dataAtual = new Date();

  // Obtendo a hora atual
  var horaAtual = dataAtual.getHours();
  if (horaAtual < 10) {
    horaAtual = `0${horaAtual}`
  }
  var minutosAtuais = dataAtual.getMinutes();
  if (minutosAtuais < 10) {
    minutosAtuais = `0${minutosAtuais}`
  }
  var segundosAtuais = dataAtual.getSeconds();
  if (segundosAtuais < 10) {
    segundosAtuais = `0${segundosAtuais}`
  }

  var hora = `${horaAtual}:${minutosAtuais}:${segundosAtuais}`
  return hora;
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
            setTimeout(() => {
              selectIdComponente()
            }, 1000);
            // setTimeout(selectIdComponente(), 1000);
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
        valorGrafico2(idComponente)
        valorGrafico2Recebidos(idComponente)
        valorGrafico3(idComponente)
        sessionStorage.ID_COMPONENTE = idComponente;

        setTimeout(() => {
          selectIdComponente()
        }, 1000);
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

        if (valorRegistroPego1 == null || valorRegistroPego1 == '') {
          menorValorTransmissao.innerHTML = '';
          momentoDaCaptura.innerHTML = '';
        } else {
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
        } else {
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

        if (valorMedia == null) {
          kpiMediaPacote.innerHTML = '';
          dataKpiMedia.innerHTML = '';
        } else {

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
  var horaAgora = formatarHora();
  fetch(`/dashboardRedeRouter/pegarLatenciaAtual/${fkComponente}/${dataAtual}`).then(function (response) {
    if (response.ok) {

      response.json().then(resposta => {
        console.log("Dados recebidos: ", JSON.stringify(resposta));
        // graficoLatenciaUm.data.datasets.data = []
        // graficoLatenciaUm.data.labels = []

        let latenciaAgora = resposta[0].valorLatenciaAtual;
        let horaRegistro = resposta[0].horaRegistro;

        graficoLatenciaUm.data.datasets[0].data.push(latenciaAgora.toFixed(2));
        graficoLatenciaUm.data.labels.push(horaAgora)

        // graficoLatenciaUm.data.labels.push(horaRegistro)

        const maxDataPoints = 8;
        if (graficoLatenciaUm.data.labels.length > maxDataPoints) {
          graficoLatenciaUm.data.labels.shift();
          graficoLatenciaUm.data.datasets[0].data.shift();
        }
      });
    } else {
      throw ("Houve um erro na API")
    }
  }).catch(function (erro) {
    console.error(erro);
  });
}

function valorGrafico2(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var horaAgora = formatarHora();
  fetch(`/dashboardRedeRouter/pegarPacotesEnviados/${fkComponente}/${dataAtual}`).then(function (response) {
    if (response.ok) {

      response.json().then(resposta => {
        console.log("Dados recebidos: ", JSON.stringify(resposta));
        // graficoLatenciaUm.data.datasets.data = []
        // graficoLatenciaUm.data.labels = []

        let pacotesEnviados = resposta[0].pacotesEnviados;

        graficoPacotesDois.data.datasets[1].data.push(pacotesEnviados);
        graficoPacotesDois.data.labels.push(horaAgora)

        const maxDataPoints = 15;
        if (graficoPacotesDois.data.labels.length > maxDataPoints) {
          graficoPacotesDois.data.labels.shift();
          graficoPacotesDois.data.datasets[1].data.shift();
        }
        // graficoLatenciaUm.update()
      });
    } else {
      throw ("Houve um erro na API")
    }
  }).catch(function (erro) {
    console.error(erro);
  });
}

function valorGrafico2Recebidos(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var horaAgora = formatarHora();
  fetch(`/dashboardRedeRouter/pegarPacotesRecebidos/${fkComponente}/${dataAtual}`).then(function (response) {
    if (response.ok) {

      response.json().then(resposta => {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        let pacotesRecebidos = resposta[0].pacotesRecebidos;

        graficoPacotesDois.data.datasets[0].data.push(pacotesRecebidos);

        const maxDataPoints = 15;
        if (graficoPacotesDois.data.labels.length > maxDataPoints) {
          graficoPacotesDois.data.labels.shift();
          graficoPacotesDois.data.datasets[0].data.shift();
        }
        // graficoLatenciaUm.update()
      });
    } else {
      throw ("Houve um erro na API")
    }
  }).catch(function (erro) {
    console.error(erro);
  });
}

function valorGrafico3(idComponente) {
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  
  fetch(`/dashboardRedeRouter/pegarVelocidadeAtual/${fkComponente}/${dataAtual}`).then(function (response) {
    if (response.ok) {

      response.json().then(resposta => {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        let velocidadeAtual = resposta[0].velocidadeAtual;

        // graficoVelocidade.series[0].data.push(velocidadeAtual);

        if (graficoVelocidade && !graficoVelocidade.renderer.forExport) {
          graficoVelocidade.series[0].points[0].update(Number(velocidadeAtual.toFixed(0)))
        }
          
        });
    } else {
      throw ("Houve um erro na API")
    }
  }).catch(function (erro) {
    console.error(erro);
  });
}