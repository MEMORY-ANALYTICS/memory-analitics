
function getServInstaveis() {
    fetch("/dashboardG/getServInstaveis/'Empresa A'").then(function (resposta) {
        if (resposta.ok) {
    
            resposta.json().then(function (json) {
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
    fetch("/dashboardG/getCompProblematico/10000").then(function (resposta) {
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




getServInstaveis();
getCompProblematico();