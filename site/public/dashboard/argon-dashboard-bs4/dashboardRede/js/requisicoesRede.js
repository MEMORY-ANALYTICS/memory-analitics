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
            // kpiMenorVelocidade()
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
        return idComponente;

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
  // alert(fkComponente)
  // alert(dataAtual)
  // Pegar o menor valor junto com a dtHoraRegistro diário que foi registrado
  var valorRegistroPego = 0;
  var momentoRegistro = "";
  fetch(`/dashboardRedeRouter/pegarKpiVelocidade/${fkComponente}/${dataAtual}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((registro) => {
       
          valorRegistroPego = registro[0].valorRegistro;
          momentoRegistro = registro[0].horaRegistro

          if(valorRegistroPego == null || valorRegistroPego == ''){
            menorValorTransmissao.innerHTML = '';
            momentoDaCaptura.innerHTML = '';
          }else{
          const valorRegistroPegoFormatado = valorRegistroPego.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          });
          menorValorTransmissao.innerHTML = valorRegistroPegoFormatado;
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
          valorRegistroPego = registro[0].valorRegistro;
          momentoRegistro = registro[0].horaRegistro

          if (valorRegistroPego == null) {
            latenciaMax.innerHTML = '';
            dataKpiLatencia.innerHTML = '';
          }else{
          const valorRegistroPegoFormatado = valorRegistroPego.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          });
          latenciaMax.innerHTML = valorRegistroPegoFormatado;
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
function selectGraficoVelocidadeRede(idComponente) {
  // Pegar apenas o maior valor do dia
  // select max(valorRegistro) from registro where fkComponente = ${idComponente} AND tipoMedida = 'Mbps' 
  // AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro;
  var fkComponente = idComponente;
  var dataAtual = formatarData(1);
  var valorRegistroPego = 0;
  fetch(`/dashboardRedeRouter/pegarVelocidadeMax/${fkComponente}/${dataAtual}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((registro) => {
          valorRegistroPego = registro[0].valorMaxRegistro;
          alert(valorRegistroPego)
          return valorRegistroPego

      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}