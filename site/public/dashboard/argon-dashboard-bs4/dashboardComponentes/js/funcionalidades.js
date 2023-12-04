// dashboard.js

  // Alterando nome do Login
  nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;

  // Pegando estado geral dos servidores
  // Pegando picos de uso
  var vt_dadosPicoDeUso = [];

  function mudarGrafico(tipo) {
    // Oculta todos os gráficos
    document.getElementById('containerCPU').style.display = 'none';
    document.getElementById('containerRAM').style.display = 'none';
    document.getElementById('containerDISCO').style.display = 'none';

    // Exibe o gráfico relevante
    if (tipo === 'CPU') {
      document.getElementById('containerCPU').style.display = 'block';
      renderizarGraficoCPU(); // Chame a função específica para renderizar o gráfico de CPU
    } else if (tipo === 'RAM') {
      document.getElementById('containerRAM').style.display = 'block';
      renderizarGraficoRAM(); // Chame a função específica para renderizar o gráfico de RAM
    } else if (tipo === 'DISCO') {
      document.getElementById('containerDISCO').style.display = 'block';
      renderizarGraficoDISCO(); // Chame a função específica para renderizar o gráfico de DISCO
    }
  }

  let chart; // Para manter uma referência ao gráfico

  // Crie o gráfico da CPU
const chartCPU = Highcharts.chart("containerCPU", {
  chart: {
    type: "spline",
    backgroundColor: "#172b4d",
    animation: Highcharts.svg,
    marginRight: 10,
    events: {
      load: function () {
        setInterval(function () {
          updateChart(chartCPU.series[0]);
        }, 1000);
      },
    },
  },
  title: {
    text: "Uso da CPU em Tempo Real",
    style: {
      color: "white",
    },
  },
  xAxis: {
    type: "datetime",
    tickPixelInterval: 150,
    gridLineWidth: 0,
    labels: {
      style: {
        color: "white",
      },
    },
  },
  yAxis: {
    title: {
      text: "",
      style: {
        color: "white",
      },
    },
    min: 0,
    max: 100,
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
    gridLineWidth: 0,
    labels: {
      style: {
        color: "white",
      },
      formatter: function () {
        if (this.value === 100) {
          return "100%";
        }
        return this.value;
      },
    },
  },
  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        this.series.name +
        "</b><br/>" +
        Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
        "<br/>" +
        Highcharts.numberFormat(this.y, 2) +
        " %"
      );
    },
  },
  legend: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  series: [
    {
      name: "Uso da CPU",
      data: (function () {
        let data = [];
        let time = new Date().getTime();
        for (let i = -19; i <= 0; i++) {
          data.push({
            x: time + i * 1000,
            y: Math.random() * 100,
          });
        }
        return data;
      })(),
    },
  ],
});

// Buscar dados da CPU
const cpuData = await buscarDadosCPU();
chartCPU.series[0].addPoint([currentTime, cpuData.percentualUso], true, true);


// Função para atualizar os dados do gráfico
function updateChart(series) {
  // Simular a captura de dados da CPU (substitua por seus próprios dados reais)
  const cpuUsage = Math.random() * 100;
  const currentTime = new Date().getTime();

  // Adicionar os dados à série
  series.addPoint([currentTime, cpuUsage], true, true);
}