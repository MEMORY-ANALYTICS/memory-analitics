var database = require("../database/config");

function listar(fkEmpresa) {
    var query = `SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${fkEmpresa} AND tipoComponente = 'REDE';'`;
  
    return database.executar(query);
  }

  module.exports = {listar};