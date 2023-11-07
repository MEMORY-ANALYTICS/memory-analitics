
// Alterando nome do Login
nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;


// Pegando estado geral dos servidores
var servSeguros
var servAlertas
var servCriticos


function getEstadoGeralServ() {
    fetch(`/dashboardG/getEstadoGeralServ/"Empresa A"`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                servSeguros = json[0].qtdServSeguros;
                servAlertas = json[0].qtdServAlertas;
                servCriticos = json[0].qtdServInstaveis;

                const ctx1 = document.getElementById('chart-bars');

                new Chart(ctx1, {
                    type: 'pie',
                    data: {
                        labels: ['Seguro', 'Alerta', 'Crítico'],
                        datasets: [{
                            label: '# of Votes',
                            data: [servSeguros, servAlertas, servCriticos],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                console.log = (json)

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}


// Pegando picos de uso
var vt_dadosPicoDeUso = [];

function obterDadosGrafico() {
    fetch(`/dashboardG/obterDadosGrafico/"Empresa C"`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                vt_dadosPicoDeUso = json[0].picosDeUso
                var meses = [];
                var mes = 4;

                if (mes == 1 || mes == 2 || mes == 3 || mes == 4) {
                    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
                }

                // for (var i = 0; i < meses.length; i++) {
                //   chartPicosDeUso.data.label.push
                // }

                const ctx = document.getElementById('chartPicosDeUso');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: meses,
                        datasets: [{
                            label: '# of Votes',
                            data: [vt_dadosPicoDeUso],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                console.log = (json)

                //   for (i = 0; i < resposta.length; i++) {
                //     chartPicosDeUso.data.datasets[0].data.push(json[i].picosDeUso);
                // }


            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}


function getDowntime() {
    fetch(`/dashboardG/getDowntime/10002`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var segundos = 4000

                if (segundos <= 60) {
                    downtime.innerHTML = `${segundos}s`
                } else if (segundos <= 3600) {
                    const minutos = Math.floor(segundos / 60);
                    const segundosRestantes = segundos % 60;
                    downtime.innerHTML = `${minutos}m ${segundosRestantes}s `
                } else {
                    const horas = Math.floor(segundos / 3600); // 3600 segundos em uma hora
                    const minutos = Math.floor((segundos % 3600) / 60);
                    const segundosRestantes = segundos % 60;
                    downtime.innerHTML = `${horas}h ${minutos}m ${segundosRestantes}s `

                }
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                // downtime.innerHTML = segundos
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function getServInstaveis() {
    fetch(`/dashboardG/getServInstaveis/"Empresa A"`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var numServInstaveis = json[0].qtdServInstaveis
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                if (numServInstaveis == 0) {
                    icon_servInstaveis.classList.remove("bg-gradient-danger")
                    icon_servInstaveis.classList.add("bg-gradient-info")
                } else {
                    icon_servInstaveis.classList.remove("bg-gradient-blue")
                    icon_servInstaveis.classList.add("bg-gradient-danger")
                    servInstaveis.style = "color: #f5365c;"

                }

                servInstaveis.innerHTML = numServInstaveis
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function getCompProblematico() {
    fetch(`/dashboardG/getCompProblematico/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {
                var numcompProblematico = json[0].nomeComponente
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                compProblematico.innerHTML = numcompProblematico
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

getEstadoGeralServ(); setInterval(getEstadoGeralServ, 2000);
obterDadosGrafico();
getDowntime();
getServInstaveis();
getCompProblematico();