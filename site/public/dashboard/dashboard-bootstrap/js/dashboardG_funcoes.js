
function getServInstaveis() {
    fetch("/dashboardG/getServInstaveis/10002").then(function (resposta) {
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



getServInstaveis();
