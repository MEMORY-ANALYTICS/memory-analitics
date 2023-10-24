var numServSeguros
var numServAlertas
var numServCriticos

function getEstadoGeralServ() {
  fetch("/dashboardG/getEstadoGeralServ/'Empresa B'").then(function (resposta) {
    if (resposta.ok) {

      resposta.json().then(function (json) {
        var numServInstaveis = json[0].qtdServInstaveis

        var servSeguros = json[0].qtdServSeguros;
        var servAlertas = json[0].qtdServAlertas;
        var servCriticos = json[0].qtdServInstaveis;

        // myPieChart2.data.datasets[0].data.push(json[0].qtdServSeguros);
        // myPieChart2.data.datasets[0].data.push(json[0].qtdServAlertas);
        // myPieChart2.data.datasets[0].data.push(json[0].qtdServCriticos);
        // console.log("Dados recebidos: ", JSON.stringify(json));
        console.log = (json)

        // Pie Chart Example
        var ctx = document.getElementById("myPieChart");
        var myPieChart2 = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Seguro", "Alerta", "Critico"],
            datasets: [
              {
                data: [servSeguros, servAlertas, servCriticos],
                backgroundColor: ["#4e73df", "#F0CA4A", "#e74a3b"],
                hoverBackgroundColor: ["#2e59d9", "#CFAD40", "#B0392E"],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            tooltips: {
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              borderColor: "#dddfeb",
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              caretPadding: 10,
            },
            legend: {
              display: false,
            },
            cutoutPercentage: 80,
          },
        });
          // Set new default font family and font color to mimic Bootstrap's default styling
          // (Chart.defaults.global.defaultFontFamily = "Nunito"),
          // '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = "#858796";

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });

}

getEstadoGeralServ();

        


