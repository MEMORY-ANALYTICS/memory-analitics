selectComponente()

function selectServidor(){

fetch(`/dashboardRede3/servidor`).then(res => {
        res.json().then(json => {
            for (var i = 0; i < json.length; i++) {
            console.log(json[i])

            var novaOpcao = document.createElement("option");
            novaOpcao.text = json[i].apelidoServidor
            novaOpcao.value = json[i].macAdress

            var select = document.getElementById("selecaoApelidoServidor");
            select.appendChild(novaOpcao);
            }
})
        })
.catch(err => {
            console.log(err);
})
}


function selectComponente(){
    
}