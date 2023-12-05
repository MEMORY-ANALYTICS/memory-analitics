// dashboard.js
mudarServidor()

  // Alterando nome do Login
  nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;


function preencherDropdownServidores(servidores) {
  const selectServidor = document.getElementById('selectServidor');

  servidores.forEach((servidor) => {
    const option = document.createElement('option');
    option.value = servidor.idServidor; // Aqui, assumo que o servidor tem um atributo idServidor, ajuste conforme sua estrutura
    option.text = servidor.nomeServidor; // Substitua pelo atributo que contém o nome do servidor
    selectServidor.appendChild(option);
  });
}



function mudarServidor() {
  const selectServidor = document.getElementById('selectServidor');
  // Chame a função para buscar e renderizar os dados com base no servidor selecionado
  
  fetch("/dashboardHardware/servidor").then(res=>{
    res.json().then(json=>{
      for (var i = 0; i < json.length; i++){
        console.log(json[i])
        var novaOpcao = document.createElement('option');
        novaOpcao.text = json[i].apelidoServidor;
        novaOpcao.value = json[i].idServidor;
        var select = document.getElementById('selectServidor');
        select.appendChild(novaOpcao);
      }
    })
    const fkServidor = selectServidor.value; // Obtém o valor selecionado no dropdown
  })
  }

  function getCpu(fkServidor){
    fetch("/dashCorrelacao/selectGraficoOcorrencia", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          fkServidor: selectServidor.value,
      })
  }).then(function (resposta) {
      if (resposta.ok) {
        
          resposta.json().then(json => {
              var valorRegistro = json[0].usoCpu
              var dataRegistro = json[0].dtHoraRegistro
              var fkServidor = json[0].fkServidor
          });
      } else {
          resposta.text().then(textoErro => {
              console.error(textoErro);
          });
      }
  }).catch(function (erro) {
      console.log(erro);
  });
}

async function buscarEAtualizarDados(fkServidor) {
  // Adapte conforme necessário para buscar os dados do servidor selecionado
  const cpuData = await buscarDadosCPU(fkServidor);
  renderizarGraficoCPU(cpuData);
}

  function mudarGrafico(tipo) {
    // Oculta todos os gráficos
    document.getElementById('containerCPU').style.display = 'none';
    document.getElementById('containerRAM').style.display = 'none';
    document.getElementById('containerDISCO').style.display = 'none';
    // Exibe o gráfico relevante
    if (tipo === 'CPU') {
      document.getElementById('containerCPU').style.display = 'block';
      const selectServidor = document.getElementById('selectServidor');
      const fkServidor = selectServidor.value;
      buscarEAtualizarDados(fkServidor);
    } else if (tipo === 'RAM') {
      document.getElementById('containerRAM').style.display = 'block';
      renderizarGraficoRAM(); // Chame a função específica para renderizar o gráfico de RAM
    } else if (tipo === 'DISCO') {
      document.getElementById('containerDISCO').style.display = 'block';
      renderizarGraficoDISCO(); // Chame a função específica para renderizar o gráfico de DISCO
    }
  }

const ctxCPU = document.getElementById('containerCPU').getContext('2d');
const chartProcessador = new Chart(ctxCPU, {
  type: 'line',
  data: {
    labels: [],  // Adicione rótulos dinamicamente conforme necessário
    datasets: [{
      label: 'Uso da CPU',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: [],
    }]
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        min: 0,
        max: 100
      }
    }
  }
});

function updateChart(chart, cpuUsage) {
  // Adicione os dados ao gráfico
  const currentTime = new Date().getTime();
  chart.data.labels.push(currentTime);
  chart.data.datasets[0].data.push(cpuUsage);

  // Limite o número de pontos no gráfico (opcional)
  const maxPoints = 20;
  if (chart.data.labels.length > maxPoints) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }

  // Atualize o gráfico
  chart.update();
}

  // Crie o gráfico da CPU
const chartCPU = Highcharts.chart("containerCPU")