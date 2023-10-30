
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
    fetch(`/dashboardG/getServInstaveis/"${sessionStorage.NOME_EMPRESA_USUARIO}"`).then(function (resposta) {
        if (resposta.ok) {
    // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var numServInstaveis = json[0].qtdServInstaveis
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)
                
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



getDowntime();
getServInstaveis();
getCompProblematico();