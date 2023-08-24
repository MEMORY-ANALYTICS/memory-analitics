function gerarSenha(){

    digitosSenha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{};:?<>!@&*$'
    digitosChave = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    senha = "";
    chave = "";

    for(var i = 0; i < 16; i++){
        let aleatorio = Math.floor(Math.random() * digitosSenha.length);
        senha += digitosSenha[aleatorio];
    }

    for(var i = 0; i < 10; i++){
        let aleatorio = Math.floor(Math.random() * digitosChave.length);
        chave += digitosChave[aleatorio];
    }

    console.log("Senha gerada > " + senha)
    console.log("Chave gerada > " + chave)

}