horaDash1()
getServidor()


function getServidor(){
    
      
        fetch(`/servidor/apelidoServidor`, {
          method: "GET"
        }).then(res => {
          res.json().then(json => {
            for (var i = 0; i < json.length; i++) {
              console.log(json[i])
            }
          })
        })
          .catch(err => {
            console.log(err);
          })
      
      
}