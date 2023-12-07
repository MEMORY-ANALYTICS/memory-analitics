function formatarData(opcao){
  dataTemp = new Date();
  
  var dia = dataTemp.getDate();
  var mes = dataTemp.getMonth()+1;
  var ano = dataTemp.getFullYear();
  
  if(dia<10){
    dia = `0${dia}`
  }
  if(opcao == 1){
    // Buscar no banco
   return dateNow = `${ano}-${mes}-${dia}`;
  }else{
    // usar direto com id.innerHTML na KPI
   return dateNow = `${dia}-${mes}-${ano}`;
  }
}

listar();
function listar() {
  // Tirar uma váriavel numérica idServidor com a fkEmpresa pega no sessionStorage
  // SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${10005} AND tipoComponente = 'REDE';
  var fkEmpresa = sessionStorage.EMPRESA_USUARIO;
  
  fetch(`/dashboardRedeRoute/listar/${fkEmpresa}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((servidor) => {
        empresas.forEach((servidor) => {
          for(var i = 0; i < servidor.length; i++)
          listarServidor.innerHTML += `<option value='${servidor[i].idServidor}'>${servidor[i].apelidoServidor}</option>`;
      });
    });
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  // retorno = valor selecionado no option ex: 4
}

function selectComponente(){
  // Tirar uma váriavel númérica idComponete no componente com o idServidor pego na função listar();
  // SELECT idComponente FROM componente WHERE fkServidor = ${4} AND tipoComponente = 'REDE';

  
  // retorno = 35
}

function kpiMaiorVelocidade(){
  var dataAtual = formatarData(1);
  // Pegar o menor valor junto com a dtHoraRegistro diário que foi registrado
  // SELECT min(valorRegistro), dtHoraRegistro FROM registro WHERE fkComponente = ${idComponente} AND tipoMedida = 'Mbps' 
  // AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro;
  


// Jogar Horário com innerHTML
// retorno = # min(valorRegistro), dtHoraRegistro => '1328.632464', '2023-10-09 10:30:00'

}

function selectGraficoVelocidadeRede(){
  var dataAtual = formatarData(1);
  // Pegar apenas o maior valor do dia
  // select max(valorRegistro) from registro where fkComponente = ${idComponente} AND tipoMedida = 'Mbps' 
  // AND  date(dtHoraRegistro) = '${dataAtual}' GROUP BY dtHoraRegistro;



  // retorno = 1333.079139
}