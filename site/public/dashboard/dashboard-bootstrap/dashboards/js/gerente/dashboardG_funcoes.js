
function getDowntime() {
    fetch(`/dashboardG/getDowntime/10002`).then(function (resposta) {
        if (resposta.ok) {
    // console.log(resposta)
            resposta.json().then(function (json) {
                // console.log(resposta)
                var tempoDowntime = json[0].tempoDowntime
                // console.log("Dados recebidos: ", JSON.stringify(json));
                console.log = (json)
                
                downtime.innerHTML = tempoDowntime
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function getServInstaveis() {
    fetch(`/dashboardG/getServInstaveis/"Empresa C"`).then(function (resposta) {
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
    fetch(`/dashboardG/getCompProblematico/10002`).then(function (resposta) {
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