var database = require("../database/config");

function listar(fkEmpresa) {
  var query = `SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = ${fkEmpresa} AND tipoComponente = 'REDE';`;

  return database.executar(query);
}

function pegarIdComponente(fkServidor) {
  var query = `SELECT idComponente FROM componente WHERE fkServidor = ${fkServidor} AND tipoComponente = 'REDE';`;

  return database.executar(query);
}

// ----------------------------------------------------SQL server querys-----------------------------------------------------
function pegarKpiVelocidade(fkComponente, dataAtual) {
  // var query = `SELECT min(valorRegistro) AS valorVelocidadeMin, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE 
  // fkComponente = ${fkComponente} AND tipoMedida = 'MBps' AND  date(dtHoraRegistro) = '${dataAtual}' 
  // GROUP BY horaRegistro ORDER BY valorVelocidadeMin LIMIT 1;`;

  var query = `SELECT 
  MIN(valorRegistro) AS valorVelocidadeMin, 
  FORMAT(MIN(dtHoraRegistro), 'HH:mm:ss') AS horaRegistro 
  FROM registro 
  WHERE fkComponente = ${fkComponente} 
  AND tipoMedida = 'MBps' 
  AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}'
  GROUP BY 
  DATEPART(HOUR, dtHoraRegistro) -- Agrupa apenas pela parte da hora
  ORDER BY 
  valorVelocidadeMin ASC
  OFFSET 0 ROWS 
  FETCH NEXT 1 ROWS ONLY;`;

  return database.executar(query);
}

function pegarKpiLatencia(fkComponente, dataAtual) {
  // var query = `SELECT MAX(valorRegistro) AS valorLatenciaMax, TIME(dtHoraRegistro) AS horaRegistro FROM registro 
  // WHERE fkComponente = ${fkComponente} AND tipoMedida = 'ms' AND DATE(dtHoraRegistro) = '${dataAtual}' 
  // GROUP BY horaRegistro ORDER BY valorLatenciaMax LIMIT 1;`;

  var query = `SELECT 
  MAX(valorRegistro) AS valorLatenciaMax, 
  FORMAT(MAX(dtHoraRegistro), 'HH:mm:ss') AS horaRegistro
FROM 
  registro 
WHERE 
  fkComponente = ${fkComponente} 
  AND tipoMedida = 'ms' 
  AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}'
GROUP BY 
  DATEPART(HOUR, dtHoraRegistro) -- Agrupa apenas pela parte da hora
ORDER BY 
  valorLatenciaMax DESC
OFFSET 0 ROWS 
FETCH NEXT 1 ROWS ONLY;`;

  return database.executar(query);
}

function pegarKpiPacotes(fkComponente, dataAtual) {
  // var query = `SELECT AVG(valorRegistro) AS mediaDodia FROM registro WHERE fkComponente = ${fkComponente} 
  // AND DATE(dtHoraRegistro) = '${dataAtual}' AND tipoMedida = 'Pacotes' LIMIT 1;`;

  var query = `SELECT TOP 1 AVG(valorRegistro) AS mediaDodia
    FROM registro
    WHERE fkComponente = ${fkComponente} 
        AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}' 
        AND tipoMedida = 'Pacotes';`;

  return database.executar(query);
}
// SELECT AVG(valorRegistro) AS mediaDodia FROM registro WHERE DATE(dtHoraRegistro) = '2023-12-07' AND tipoMedida = 'Pacotes';
// -------------------------------------------- Fim Kpis - Retorno de variáveis ------------------------------------------------
function pegarLatenciaAtual(fkComponente, dataAtual) {
  // var query = `
  // SELECT valorRegistro AS valorLatenciaAtual, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE fkComponente =${fkComponente} 
  // AND tipoMedida = 'ms' AND  date(dtHoraRegistro) = '${dataAtual}' ORDER BY idRegistro DESC LIMIT 1;`;

  var query = `
    SELECT TOP 1 
    valorRegistro AS valorLatenciaAtual, 
    CONVERT(TIME, dtHoraRegistro) AS horaRegistro 
    FROM 
    registro 
    WHERE 
    fkComponente = ${fkComponente} 
    AND tipoMedida = 'ms' 
    AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}' 
    ORDER BY 
    idRegistro DESC;`;

  return database.executar(query);
}

function pegarPacotesEnviados(fkComponente, dataAtual) {
  // var query = `
  //   SELECT valorRegistro AS pacotesEnviados, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE fkComponente = ${fkComponente} 
  //   AND detalheRegistro = 'Enviados Rede' AND  date(dtHoraRegistro) = '${dataAtual}' ORDER BY idRegistro DESC LIMIT 1;`;

  var query = `
  SELECT TOP 1 
  valorRegistro AS pacotesEnviados,
  CONVERT(TIME, dtHoraRegistro) AS horaRegistro
  FROM registro
  WHERE fkComponente = ${fkComponente}
  AND detalheRegistro = 'Enviados Rede'
  AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}'
  ORDER BY idRegistro DESC;`;

  return database.executar(query);
}

function pegarPacotesRecebidos(fkComponente, dataAtual) {
  // var query = `
  //   SELECT valorRegistro AS pacotesRecebidos, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE fkComponente = ${fkComponente} 
  //   AND detalheRegistro = 'Recebidos Rede' AND  date(dtHoraRegistro) = '${dataAtual}' ORDER BY idRegistro DESC LIMIT 1;`;

  var query = `
  SELECT TOP 1 
    valorRegistro AS pacotesRecebidos,
    CONVERT(time, dtHoraRegistro) AS horaRegistro 
    FROM registro 
    WHERE fkComponente = ${fkComponente} 
    AND detalheRegistro = 'Recebidos Rede' 
    AND CONVERT(date, dtHoraRegistro) = '${dataAtual}' 
    ORDER BY 
    idRegistro DESC;`;

  return database.executar(query);
}

function pegarVelocidadeAtual(fkComponente, dataAtual) {
  // var query = `
  //   SELECT valorRegistro AS velocidadeAtual, Time(dtHoraRegistro) AS horaRegistro FROM registro WHERE fkComponente = ${fkComponente} 
  //   AND tipoMedida = 'ms' AND  date(dtHoraRegistro) = '${dataAtual}' ORDER BY idRegistro DESC LIMIT 1;`;

  var query = `
  SELECT TOP 1 valorRegistro AS velocidadeAtual, CONVERT(time, dtHoraRegistro) AS horaRegistro
  FROM registro
  WHERE fkComponente = ${fkComponente}
  AND tipoMedida = 'ms'
  AND CONVERT(date, dtHoraRegistro) = '${dataAtual}'
  ORDER BY idRegistro DESC;`;

  return database.executar(query);
}

function pegarMaxVelocidade(fkComponente, dataAtual) {
  // var query = `
  //   SELECT MAX(valorRegistro) AS valorVelocidadeMax, TIME(dtHoraRegistro) AS horaRegistro FROM registro 
  //   WHERE fkComponente = ${fkComponente} AND tipoMedida = 'MBps' AND DATE(dtHoraRegistro) = '${dataAtual}' 
  //   GROUP BY horaRegistro ORDER BY valorVelocidadeMax DESC LIMIT 1;`;

  var query = `
  SELECT TOP 1 MAX(valorRegistro) AS valorVelocidadeMax, CONVERT(TIME, dtHoraRegistro) AS horaRegistro 
  FROM registro
  WHERE fkComponente = ${fkComponente} AND tipoMedida = 'MBps' AND CONVERT(DATE, dtHoraRegistro) = '${dataAtual}'
  GROUP BY CONVERT(TIME, dtHoraRegistro)
  ORDER BY valorVelocidadeMax DESC;`;

  return database.executar(query);
}


module.exports = {
  listar, pegarIdComponente, pegarKpiVelocidade, pegarKpiLatencia, pegarKpiPacotes,
  pegarLatenciaAtual, pegarPacotesEnviados, pegarPacotesRecebidos, pegarVelocidadeAtual, pegarMaxVelocidade
};