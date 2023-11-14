
// Alterando nome do Login
nomeLogin.innerHTML = `${sessionStorage.NOME_USUARIO}`;


// Pegando estado geral dos servidores

function getEstadoGeralServ() {
    fetch(`/dashboardG/getEstadoGeralServ/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                servSeguros = 0
                servAlertas = 0
                servCriticos = 0


                for (var i = 0; i < json.length; i++) {
                    idEstado = json[i].Estado
                    qtdServidores = json[i].qtdServers

                    if(idEstado === 1) {
                        servSeguros = qtdServidores
                    } else if (idEstado === 2) {
                        servAlertas = qtdServidores
                    } else if (idEstado === 3) {
                        servCriticos = qtdServidores
                    }
                }

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
var vt_diaMesPicoDeUso = [];

function obterDadosGrafico() {
    fetch(`/dashboardG/obterDadosGrafico/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (json) {

                for (i = 0; i < json.length; i++) {
                    var registro = json[i];
                    vt_dadosPicoDeUso.push(registro.picosDeUso)
                    vt_diaMesPicoDeUso.push(registro.DiaMes)
                }

                

                // for (var i = 0; i < meses.length; i++) {
                //   chartPicosDeUso.data.label.push
                // }

                const ctx = document.getElementById('chartPicosDeUso');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: vt_diaMesPicoDeUso,
                        datasets: [{
                            label: '# of Votes',
                            data: vt_dadosPicoDeUso,
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
    fetch(`/dashboardG/getDowntime/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var segundos = json[0].tempoDowntime

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

function getServCriticos() {
    fetch(`/dashboardG/getServCriticos/${sessionStorage.EMPRESA_USUARIO}`).then(function (resposta) {
        if (resposta.ok) {
            // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var numServCriticos = json[0].qtdServCriticos
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)

                if (numServCriticos == 0) {
                    icon_servInstaveis.classList.remove("bg-gradient-danger")
                    icon_servInstaveis.classList.add("bg-gradient-info")
                } else {
                    icon_servInstaveis.classList.remove("bg-gradient-blue")
                    icon_servInstaveis.classList.add("bg-gradient-danger")
                    servCriticosKPI.style = "color: #f5365c;"

                }

                servCriticosKPI.innerHTML = numServCriticos
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
getDowntime(); setInterval(getDowntime, 2000);
getServCriticos();
getCompProblematico();