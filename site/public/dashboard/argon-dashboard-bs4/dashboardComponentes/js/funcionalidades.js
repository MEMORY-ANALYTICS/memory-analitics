// dashboard.js
mudarServidor()

  // Alterando nome do Login
  nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;

let picoCPU = 80;  // Substitua pelos valores reais
let picoRAM = 80;  // Substitua pelos valores reais
let picoDISCO = 80;  // Substitua pelos valores reais

  function preencherDropdownServidores(servidores) {
  const selectServidor = document.getElementById('selectServidor');

  servidores.forEach((servidor) => {
    const option = document.createElement('option');
    option.value = servidor.idServidor; // Aqui, assumo que o servidor tem um atributo idServidor, ajuste conforme sua estrutura
    option.text = servidor.nomeServidor; // Substitua pelo atributo que contém o nome do servidor
    selectServidor.appendChild(option);
    getCpu(servidor.idServidor);
  });
}



function mudarServidor() {
  const selectServidor = document.getElementById('selectServidor');
  // Chame a função para buscar e renderizar os dados com base no servidor selecionado
  
  fetch("/dashboardHardware/servidor",{
    cache: 'no-store'
  }).then(res=>{
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

  function mudarGrafico(tipo) {
    // Oculta todos os gráficos
    document.getElementById('containerCPU').style.display = 'none';
    document.getElementById('containerRAM').style.display = 'none';
    document.getElementById('containerDISCO').style.display = 'none';
    // Exibe o gráfico relevante
    if (tipo === 'CPU') {
      document.getElementById('containerCPU').style.display = 'block';
    } else if (tipo === 'RAM') {
      document.getElementById('containerRAM').style.display = 'block';
      renderizarGraficoRAM(); // Chame a função específica para renderizar o gráfico de RAM
    } else if (tipo === 'DISCO') {
      document.getElementById('containerDISCO').style.display = 'block';
      renderizarGraficoDISCO(); // Chame a função específica para renderizar o gráfico de DISCO
    }
  }

  function criarGrafico(containerId, title, seriesName, yAxisTitle) {
    return Highcharts.chart(containerId, {
      chart: {
        type: "spline",
        backgroundColor: "#172b4d",
        animation: Highcharts.svg,
        marginRight: 10,
        // events: {
        //   load: function () {
        //     setInterval(function () {
        //       updateChart(this.series);
        //     }, 1000);
        //   },
        // },
      },
      title: {
        text: title,
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
          text: yAxisTitle,
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
          name: seriesName,
          data: (function () {
            let data = [];
            let time = new Date().getTime();
  
            // Generate data based on the scenario
            for (let i = -19; i <= 0; i++) {
              let usage = 0;
  
              // Simulate different scenarios for CPU, RAM, and Disk usage
              if (seriesName === "Uso da CPU") {
                // Simulate CPU usage between 10% and 90%
                usage = 10 + Math.random() * 60;
              } else if (seriesName === "Uso da RAM") {
                // Simulate RAM usage between 30% and 80%
                usage = 30 + Math.random() * 50;
              } else if (seriesName === "Uso do Disco") {
                // Simulate Disk usage between 20% and 70%
                usage = 20 + Math.random() * 50;
              }
  
              data.push({
                x: time + i * 1000,
                y: usage,
              });
            }
            return data;
          })(),
        },
      ],
    });
  }

  var chartCPU = criarGrafico("containerCPU", "Uso da CPU em Tempo Real", "Uso da CPU", "");
  var chartRAM = criarGrafico("containerRAM", "Uso da RAM em Tempo Real", "Uso da RAM", "");
  var chartDISCO = criarGrafico("containerDISCO", "Uso do Disco em Tempo Real", "Uso do Disco", "");

function construirGraficos() {
  if (chartCPU != undefined) {
    chartCPU.destroy();
    chartRAM.destroy();
    chartDISCO.destroy();
  }
  
  chartCPU = criarGrafico("containerCPU", "Uso da CPU em Tempo Real", "Uso da CPU", "");
  chartRAM = criarGrafico("containerRAM", "Uso da RAM em Tempo Real", "Uso da RAM", "");
  chartDISCO = criarGrafico("containerDISCO", "Uso do Disco em Tempo Real", "Uso do Disco", "");

}


var cpuMax = 0;
var ramMax = 0;
var discoMax = 0;

function updateChart(series, resourceType) {
  let resourceUsage;

  if (resourceType === "CPU") {
    resourceUsage = 60 + Math.random() * 25;
    if (resourceUsage > cpuMax) {
      cpuMax = resourceUsage;
      span_cpuMax.innerHTML = Math.round(cpuMax,2) + "%"; 
    }
  } else if (resourceType === "RAM") {
    resourceUsage = 60 + Math.random() * 20;
    if (resourceUsage > ramMax) {
      ramMax = resourceUsage;
      span_ramMax.innerHTML = Math.round(ramMax,2) + "%"; 
    }
  } else if (resourceType === "DISCO") {
    resourceUsage = 40 + Math.random() * 30;
    if (resourceUsage > discoMax) {
      discoMax = resourceUsage;
      span_discoMax.innerHTML = Math.round(discoMax,2) + "%"; 
  }
}

  const currentTime = new Date().getTime();
  series.addPoint([currentTime, resourceUsage], true, true);
}

function downloadPDF() {
  const contentCopy = document.getElementById('containers').cloneNode(true);
  const spanElement = contentCopy.querySelector('span');
  const filterElement = contentCopy.querySelector('.filter');

  if (filterElement) {
    filterElement.parentNode.removeChild(filterElement);
  }

  // Adicione os valores de pico de uso ao conteúdo do PDF
  const contentHTML = `
    <p>Pico de Uso de CPU: ${Math.round(cpuMax)}%</p>
    <p>Pico de Uso de RAM: ${Math.round(ramMax)}%</p>
    <p>Pico de Uso de DISCO: ${Math.round(discoMax)}%</p>
    <p>Mês Com Maiores Picos: Julho</p>
  `;

  // Adicione o conteúdo HTML ao clone do elemento
  contentCopy.innerHTML += contentHTML;

  const options = {
    margin: 10,
    filename: 'relatorio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    font: { size: 30 } // Tamanho da fonte maior
  };

  html2pdf(contentCopy, options);
}

const historicoCPU = [];
const historicoRAM = [];
const historicoDISCO = [];

setInterval(function () {
  updateChart(chartCPU.series[0], "CPU");
  updateChart(chartRAM.series[0], "RAM");
  updateChart(chartDISCO.series[0], "DISCO");
}, 1000);