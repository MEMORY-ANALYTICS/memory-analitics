var database = require("../database/config")

function insertTemp(idServidor,valorRegistro, dtHoraRegistro) {

  //idServidor = 12

  instrucaoSql = `
  INSERT INTO registroTemp(valorRegistro, tipoMedida, 
    detalheRegistro, dtHoraRegistro, fkComponente) VALUES
  (${valorRegistro}, 'celsius', 'temperatura do processador', '${dtHoraRegistro}', 
  (select idComponente from componente where fkServidor = ${idServidor}));
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    insertTemp
  }
  