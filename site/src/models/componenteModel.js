var database = require("../database/config");

function cadastrarComponente(fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor)
         VALUES ('${fabricante}', '${nomeModelo}', '${tipoComponente}', '${limiteMin}', '${limiteMax}', ${fkServidor});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarComponente(fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, idComponente) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    update componente set fabricante = '${fabricante}', nomeModelo = '${nomeModelo}',
     tipoComponente = '${tipoComponente}', limiteMin = '${limiteMin}', limiteMax = '${limiteMax}' where idComponente = ${idComponente};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getAll(fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select idComponente, nomeModelo, fabricante, tipoComponente, limiteMin, limiteMax, apelidoServidor from componente JOIN servidor on fkServidor = idServidor JOIN empresa on fkEmpresa = idEmpresa where fkEmpresa = ${fkEmpresa};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getInfosComponente(idComponente) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select componente.*, apelidoServidor from componente join servidor on idServidor = fkServidor where idComponente = ${idComponente};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deleteComponente(idComponente) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    delete from componente where idComponente = ${idComponente}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarComponente,
    getAll,
    getInfosComponente,
    alterarComponente,
    deleteComponente
} 