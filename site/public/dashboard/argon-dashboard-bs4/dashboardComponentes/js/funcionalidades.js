// dashboard.js

mudarServidor();

var fkServidor;
var nomeServidor;

// Alterando nome do Login
nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;

let picoCPU = 0; 
let picoRAM = 0; 
let picoDISCO = 0; 

function preencherDropdownServidores(servidores) {
  const selectServidor = document.getElementById("selectServidor");

  servidores.forEach((servidor) => {
    const option = document.createElement("option");
    option.value = servidor.idServidor; 
    option.text = servidor.nomeServidor; 
    selectServidor.appendChild(option);
  });
}

function mudarServidor() {
  const selectServidor = document.getElementById("selectServidor");
  fetch("/dashboardHardware/servidor", {
    cache: "no-store",
  }).then((res) => {
    res.json().then((json) => {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
        var novaOpcao = document.createElement("option");
        novaOpcao.text = json[i].apelidoServidor;
        novaOpcao.value = json[i].idServidor;
        var select = document.getElementById("selectServidor");
        select.appendChild(novaOpcao);
      }

      fkServidor = selectServidor.value// Atualiza o valor de fkServidor ao selecionar um novo servidor
      nomeServidor = selectServidor.options[selectServidor.selectedIndex].text;
      getDadosCpu(); // Chame a função getDadosCpu() ao mudar o servidor para buscar os dados atualizados
      getDadosRam(); // Chame a função getDadosRam() ao mudar o servidor para buscar os dados atualizados
      getDadosDisco(); // Chame a função getDadosDisco() ao mudar o servidor para buscar os dados atualizados
    });
  });
}

let cpuUsageArray = [];
let ramUsageArray = [];
let discoUsageArray = [];
let dtCpu = [];
let dtRam = [];
let dtDisco = [];

async function pegarUltimoDadoCPU(){
  try {
    const response = await fetch(`/dashboardHardware/getUltimoCpu/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if(dtCpu[dtCpu.length-1] == data[0].dtHoraRegistro){
        return
      } else {
        cpuUsageArray.splice(cpuUsageArray.length-1,1,data[0].usoCpu)
        cpuUsageArray = cpuUsageArray.slice(1)
        graficoCPU.data.datasets[0].data = cpuUsageArray
        dtCpu.splice(dtCpu.length-1,1,data[0].dtHoraRegistro)
        dtCpu = dtCpu.slice(1)
        graficoCPU.data.labels = dtCpu
        graficoCPU.update()
      }
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching CPU data:", error);
  }

}

async function pegarUltimoDadoRAM() {
  try {
    const response = await fetch(`/dashboardHardware/getUltimoRam/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (dtRam[dtRam.length - 1] == data[0].dtHoraRegistro) {
        return;
      } else {
        ramUsageArray.splice(ramUsageArray.length - 1, 1, data[0].usoRam);
        ramUsageArray = ramUsageArray.slice(1);
        graficoRAM.data.datasets[0].data = ramUsageArray;
        dtRam.splice(dtRam.length - 1, 1, data[0].dtHoraRegistro);
        dtRam = dtRam.slice(1);
        graficoRAM.data.labels = dtRam;
        graficoRAM.update();
      }
    } else {
      const textoErro = await response.text();
      console.error("Error fetching RAM data:", textoErro);
    }
  } catch (error) {
    console.error("Error fetching RAM data:", error);
  }
}

async function pegarUltimoDadoDISCO() {
  try {
    const response = await fetch(`/dashboardHardware/getUltimoDisco/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (dtDisco[dtDisco.length - 1] == data[0].dtHoraRegistro) {
        return;
      } else {
        discoUsageArray.splice(discoUsageArray.length - 1, 1, data[0].usoDisco);
        discoUsageArray = discoUsageArray.slice(1);
        graficoDISCO.data.datasets[0].data = discoUsageArray;
        dtDisco.splice(dtDisco.length - 1, 1, data[0].dtHoraRegistro);
        dtDisco = dtDisco.slice(1);
        graficoDISCO.data.labels = dtDisco;
        graficoDISCO.update();
      }
    } else {
      const textoErro = await response.text();
      console.error("Error fetching DISK data:", textoErro);
    }
  } catch (error) {
    console.error("Error fetching DISK data:", error);
  }
}

async function getDadosCpu() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/cpu/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Limpar os arrays para evitar duplicatas
      cpuUsageArray = [];
      dtCpu = [];

      for (var i = 0; i < data.length; i++) {
        cpuUsageArray.push(data[i].usoCpu);
        dtCpu.push(data[i].dtHoraRegistro);
      }
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching CPU data:", error);
  }
}

async function getDadosRam() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/ram/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();

      for (var i = 0; i < data.length; i++) {  
        ramUsageArray.push(data[i].usoRam);
        dtRam.push(data[i].dtHoraRegistro);
      }
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching RAM data:", error);
  }
}


async function getDadosDisco() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/disco/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      
      for (var i = 0; i < data.length; i++) {  
        discoUsageArray.push(data[i].usoDisco);
        dtDisco.push(data[i].dtHoraRegistro);
      }
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching Disco data:", error);
  }
}


async function getKpiCpu() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/getMaxCpu/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      kpiCPU.innerHTML = data[0].maxUsoCpu + "%";
      dataKpiCpu.innerHTML = '&nbsp' + data[0].dataHoraRegistro;
      picoCPU = data[0].maxUsoCpu;
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching Disco data:", error);
  }
  
}

async function getKpiRam() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/getMaxRam/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      kpiRAM.innerHTML = data[0].maxUsoRam + "%";
      dataKpiRam.innerHTML = '&nbsp' + data[0].dataHoraRegistro;
      picoRAM = data[0].maxUsoRam;
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching RAM data:", error);
  }
  
}

async function getKpiDisco() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/getMaxDisco/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      kpiDISCO.innerHTML = data[0].maxUsoDisco + "%";
      dataKpiDisco.innerHTML = '&nbsp' + data[0].dataHoraRegistro;
      picoDISCO = data[0].maxUsoDisco;
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching Disco data:", error);
  }
  
}

async function getKpiUsoMes() {
  try {
    fkServidor = selectServidor.value;
    const response = await fetch(`/dashboardHardware/getUsoMes/${fkServidor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      kpiMES.innerHTML = "Mês " + data[0].Mes;
    } else {
      const textoErro = await response.text();
      console.error(textoErro);
    }
  } catch (error) {
    console.error("Error fetching Mês data:", error);
  }
  
}

function mudarGrafico(tipo) {
  // Oculta todos os gráficos
  document.getElementById("cpuGrafico").style.display = "none";
  document.getElementById("ramGrafico").style.display = "none";
  document.getElementById("discoGrafico").style.display = "none";
  // Exibe o gráfico relevante
  if (tipo === "CPU") {
    document.getElementById("cpuGrafico").style.display = "block";
  } else if (tipo === "RAM") {
    document.getElementById("ramGrafico").style.display = "block"; 
  } else if (tipo === "DISCO") {
    document.getElementById("discoGrafico").style.display = "block";
  }
}

var graficoCPU;
var graficoRAM;
var graficoDISCO;

function criarGrafico() {
  const ctx1 = document.getElementById('containerCPU');
  if (graficoCPU != undefined) {
    graficoCPU.destroy();
  }
    graficoCPU = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: dtCpu.reverse(),
        datasets: [{
          label: 'Uso Percentual de CPU',
          data: cpuUsageArray.reverse(),
          backgroundColor: ["white"],
          borderColor: ['white'],
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;

            if (!chartArea) {
              return null;
            }
          },
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'rgba(147, 112, 219, 1)', // Cor roxa clara
        pointBorderColor: 'white', // Contorno preto
        pointBorderWidth: 0.6 // Largura do contorno
        }
        ]
      },
      options: {
        // https://pt.stackoverflow.com/questions/428093/como-mudo-a-cor-dos-valores-de-indice-do-grafico
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              // Configuração da cor dos valores do eixo Y
              color: 'white' // Define a cor como branca
            }
          },
          x: {
            ticks: {
              // Configuração da cor dos valores do eixo X
              color: 'white' // Define a cor como branca
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // Cor das linhas de grade do eixo X
            },
            callback: function (value) {
              return value + '%';
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              // font: {
                color: 'white'
              // }
            }
          }
        }
      }
    });
  }
  if (graficoRAM != undefined) {
    graficoRAM.destroy();
  }
  const ctx2 = document.getElementById('containerRAM');
    graficoRAM = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: dtRam.reverse(),
        datasets: [{
          label: 'Uso Percentual de RAM',
          data: ramUsageArray.reverse(),
          backgroundColor: ["white"],
          borderColor: ['white'],
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;

            if (!chartArea) {
              return null;
            }
          },
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'rgba(147, 112, 219, 1)', // Cor roxa clara
        pointBorderColor: 'white', // Contorno preto
        pointBorderWidth: 0.6 // Largura do contorno
        }
        ]
      },
      options: {
        // https://pt.stackoverflow.com/questions/428093/como-mudo-a-cor-dos-valores-de-indice-do-grafico
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Configuração da cor dos valores do eixo Y
              color: 'white' // Define a cor como branca
            }
          },
          x: {
            ticks: {
              // Configuração da cor dos valores do eixo X
              color: 'white' // Define a cor como branca
            },
            grid: {
              color: 'white' // Cor das linhas de grade do eixo X
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              // font: {
                color: 'white'
              // }
            }
          }
        }
      }
    });
    if (graficoDISCO != undefined) {
      graficoDISCO.destroy();
    }
    const ctx3 = document.getElementById('containerDISCO');
    graficoDISCO = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: dtDisco.reverse(),
        datasets: [{
          label: 'Uso Percentual de Disco',
          data: discoUsageArray.reverse(),
          backgroundColor: ["white"],
          borderColor: ['white'],
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;

            if (!chartArea) {
              return null;
            }
          },
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'rgba(147, 112, 219, 1)', // Cor roxa clara
        pointBorderColor: 'white', // Contorno preto
        pointBorderWidth: 0.6 // Largura do contorno
        }
        ]
      },
      options: {
        // https://pt.stackoverflow.com/questions/428093/como-mudo-a-cor-dos-valores-de-indice-do-grafico
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              // Configuração da cor dos valores do eixo Y
              color: 'white' // Define a cor como branca
            }
          },
          x: {
            ticks: {
              // Configuração da cor dos valores do eixo X
              color: 'white' // Define a cor como branca
            },
            grid: {
              color: 'white' // Cor das linhas de grade do eixo X
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              // font: {
                color: 'white'
              // }
            }
          }
        }
      }
    });

    function downloadPDF() {
      const contentCopy = document.getElementById('containers').cloneNode(true);
      const spanElement = contentCopy.querySelector('span');
      const filterElement = contentCopy.querySelector('.filter');
    
      if (filterElement) {
        filterElement.parentNode.removeChild(filterElement);
      }
    
      // Adicione os valores de pico de uso ao conteúdo do PDF
      const contentHTML = `
      <p>//</p><h1>Usuário Logado: ${sessionStorage.NOME_USUARIO}</h1>
      <h1>Apelido do Servidor: ${nomeServidor}</h1>
      `;
    
      // Remover todos os quebras de linha e espaços desnecessários
      contentCopy.innerHTML += contentHTML.replace(/\n\s*/g, "");
    
      const options = {
        margin: 10,
        filename: 'relatorio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        font: { size: 60 } // Tamanho da fonte maior
      };
    
      html2pdf(contentCopy, options);
    }
    


function updateChart(chart, dataArray, dateArray) {
  chart.data.labels = dateArray;
  chart.data.datasets[0].data = dataArray;
  chart.update();
}

getDadosCpu();
getDadosDisco();
getDadosRam();
setTimeout(()=>{
  criarGrafico();
}, 2000)
setInterval(() => {
  pegarUltimoDadoCPU();
  pegarUltimoDadoRAM();
  pegarUltimoDadoDISCO();
  getKpiCpu();
  getKpiRam();
  getKpiDisco();
  getKpiUsoMes();
}, 2000); // 5000 milissegundos = 5 segundos


// Chame a função para buscar e renderizar os dados com base no servidor selecionado
  // dois vetores um para uso e 1 para data
  // async e await(esperar tal coisa) - pesquisa
  // plotar
  // criar if que compara a ultima data plotada com a ultima data
  // do banco
  // precisa adaptar o for  
  // let valorFor = 0
  // if(res.length <20){
  //     valorFor = res.length
  // }else{
  //   valorFor =  20;
  // }
