var database = require("../database/config");

function buscarUltimasMedidas(fkServer, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${fkServer}
                    order by id desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        usoCpu as cpu, 
        usoRam as ram,
        processoMaiorMediaUso as pmmu,
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
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${fkServer} 
                    order by id desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `select 
        usoCpu as cpu, 
        usoRam as ram,
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

function getQtdProcessosBanidos(fkServer){
  instrucaoSql = `select count(idProcesso) as qtdProcessos from processosBanidos where fkServidor = ${fkServer}`
  return database.executar(instrucaoSql);
}
module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  getAllProcessosBanidos,
  getQtdProcessosBanidos
};
