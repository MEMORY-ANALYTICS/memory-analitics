let proximaAtualizacao;

function obterDadosGrafico(nomeEmpresa) {

    // alterarTitulo(idAquario)

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/dashboardG/obterDadosGrafico/"Empresa B"`).then(function (response) {
        if (response.ok) {
            
            response.json().then(function (resposta) {
                // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, nomeEmpresa);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

    function plotarGrafico(resposta, nomeEmpresa) {

        // console.log('iniciando plotagem do gráfico...');

        let dados = {
          labels: ["Maio", "Junho", "Julho", "Agosto", "Setembro"],
          datasets: [{
              label: 'Umidade',
              data: [],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }]
      };

        // Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Maio", "Junho", "Julho", "Agosto", "Setembro"],
    datasets: [{
      label: "Quantidade",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [7,6,5,5,5],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
          maxTicksLimit: 5,
          padding: 10,
          // // Include a dollar sign in the ticks
          // callback: function(value, index, values) {
          //   return '$' + number_format(value);
          // }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ':' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});


        // console.log('----------------------------------------------')
        // console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
        // console.log(resposta)

        // Inserindo valores recebidos em estrutura para plotar o gráfico
        for (i = 0; i < resposta.length; i++) {
            var registro = resposta[i].picosDeUso;
            myBarChart.data.datasets[0].data.push(resposta[i].picosDeUso);
            dados.datasets[0].data.push(registro.picosDeUso);
        }

        setTimeout(() => atualizarGrafico('Empresa B', dados, myBarChart), 2000);
    }

    function atualizarGrafico(nomeEmpresa, dados, myChart) {



      fetch(`/dashboardG/obterDadosGrafico/"Empresa B"`).then(function (response) {
          if (response.ok) {
              response.json().then(function (novoRegistro) {

                  obterdados(nomeEmpresa);
                  // alertar(novoRegistro, idAquario);
                  console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                  console.log(`Dados atuais do gráfico:`);
                  console.log(dados);

                  let avisoCaptura = document.getElementById(`avisoCaptura${nomeEmpresa}`)
                  avisoCaptura.innerHTML = ""


                  if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
                      console.log("---------------------------------------------------------------")
                      console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                      avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
                      console.log("Horário do novo dado capturado:")
                      console.log(novoRegistro[0].momento_grafico)
                      console.log("Horário do último dado capturado:")
                      console.log(dados.labels[dados.labels.length - 1])
                      console.log("---------------------------------------------------------------")
                  } else {
                      // tirando e colocando valores no gráfico
                      dados.labels.shift(); // apagar o primeiro
                      dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

                      dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                      dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

                      dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
                      dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

                      myBarChart.update();
                  }

                  // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                  proximaAtualizacao = setTimeout(() => atualizarGrafico(nomeEmpresa, dados, myBarChart), 2000);
              });
          } else {
              console.error('Nenhum dado encontrado ou erro na API');
              // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
              proximaAtualizacao = setTimeout(() => atualizarGrafico(nomeEmpresa, dados, myBarChart), 2000);
          }
      })
          .catch(function (error) {
              console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
          });

  }

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}


obterDadosGrafico();