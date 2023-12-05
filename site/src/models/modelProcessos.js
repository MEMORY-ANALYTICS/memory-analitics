var database = require("../database/config");

function buscarUltimasMedidas(fkServer, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas}
        usoCpu as cpu, 
        usoRam as ram,
        processoMaiorMediaUso as pmmu,
        qtdProcessosOnline,
        dtHora,
        FORMAT(dtHora,'%H:%m:%s') as momento_grafico
        from processos
        where fkServidor = ${fkServer}
        order by idProcessos desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        usoCpu as cpu, 
        usoRam as ram,
        processoMaiorMediaUso as pmmu,
        qtdProcessosOnline,
        dtHora,
        DATE_FORMAT(dtHora,'%H:%i:%s') as momento_grafico
        from processos
        where fkServidor = ${fkServer}
        order by idProcessos desc limit ${limite_linhas}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkServer) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
        usoCpu as cpu, 
        usoRam as ram,  
        CONVERT(varchar, dtHora, 108) as momento_grafico, 
        fkServidor 
        from processos where fkServidor = ${fkServer} 
        order by idProcessos desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        usoCpu as cpu, 
        usoRam as ram,
        qtdProcessosOnline,
        processoMaiorMediaUso as pmmu,
                        DATE_FORMAT(dtHora,'%H:%i:%s') as momento_grafico, 
                        fkServidor 
                        from processos where fkServidor = ${fkServer} 
                    order by idProcessos desc limit 1`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function getAllProcessosBanidos(fkServer) {
  instrucaoSql = `select * from processosBanidos where fkServidor = ${fkServer}`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function getQtdProcessosBanidos(fkServer) {
  instrucaoSql = `select count(idProcesso) as qtdProcessos from processosBanidos where fkServidor = ${fkServer}`;
  return database.executar(instrucaoSql);
}

function adicionarProcesso(nomeProcesso,fkServidor){
  instrucaoSql = `INSERT INTO processosBanidos(nomeProcesso, fkServidor) VALUES ('${nomeProcesso}', ${fkServidor});`;
  return database.executar(instrucaoSql);
}
module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  getAllProcessosBanidos,
  getQtdProcessosBanidos,
  adicionarProcesso
};
