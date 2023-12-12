var database = require("../database/config");

// Dados de ocorrencias
function selectGraficoOcorrencia(fkServidor, requisitante) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectGraficoOcorrencia(): "
  );

  if (fkServidor != 0) {

    var instrucao = `SELECT count(idChamadoServidor) as TotalChamados FROM chamadoServidor WHERE requisitante = '${requisitante}' AND fkServidor = ${fkServidor}`;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

  } else {

    var instrucao = `SELECT count(idChamadoServidor) as TotalChamados FROM chamadoServidor WHERE requisitante = '${requisitante}' `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
  }
}

// Dados de servidores
function selectServidores(fkEmpresa) {
  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  var instrucao = `SELECT * FROM servidor where fkEmpresa = ${fkEmpresa};`;
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

// Dados de Componentes
// CPU
function selectCpu(fkServidor, filtroTempo, booleanRegressao) {
  if (fkServidor != 0) {
    if (!booleanRegressao) {
      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 60
    r.valorRegistro AS registrosCpu,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 40
    r.valorRegistro AS registrosCpu,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU'
    ORDER BY
    r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  } else {
    if (!booleanRegressao) {
      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'CPU' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 60
    r.valorRegistro AS registrosCpu,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.tipoComponente = 'CPU'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosCpu, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'CPU'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 40
  r.valorRegistro AS registrosCpu,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.tipoComponente = 'CPU'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  }
}

// Ram
function selectRam(fkServidor, filtroTempo, booleanRegressao) {
  if (fkServidor != 0) {
    if (!booleanRegressao) {
      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 20
    r.valorRegistro AS registrosRam,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 20
  r.valorRegistro AS registrosRam,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  } else {
    if (!booleanRegressao) {
      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'RAM' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 20
    r.valorRegistro AS registrosRam,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.tipoComponente = 'RAM'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRam, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'RAM'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 20
  r.valorRegistro AS registrosRam,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.tipoComponente = 'RAM'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }

  }
}
// Disco
function selectDisco(fkServidor, filtroTempo, booleanRegressao) {
  if (fkServidor != 0) {
    if (!booleanRegressao) {


      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 20
    r.valorRegistro AS registrosDisco,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 20
  r.valorRegistro AS registrosDisco,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.fkServidor = ${fkServidor} AND c.tipoComponente = 'DISCO'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  } else {
    if (!booleanRegressao) {


      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'DISCO' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 20
    r.valorRegistro AS registrosDisco,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.tipoComponente = 'DISCO'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosDisco, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'DISCO'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 20
  r.valorRegistro AS registrosDisco,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.tipoComponente = 'DISCO'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  }
}

// Rede
function selectRede(fkServidor, filtroTempo, booleanRegressao) {
  if (fkServidor != 0) {
    if (!booleanRegressao) {

      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 120
    r.valorRegistro AS registrosRede,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 120
  r.valorRegistro AS registrosRede,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.fkServidor = ${fkServidor} AND c.tipoComponente = 'REDE'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  } else {
    if (!booleanRegressao) {

      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'REDE' AND r.dtHoraRegistro >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT TOP 120
    r.valorRegistro AS registrosRede,
    r.tipoMedida as tipoMedida,
    r.dtHoraRegistro as dataHora,
    r.detalheRegistro as detalheRegistro
    FROM
    registro r
    JOIN
    componente c ON r.fkComponente = c.idComponente
    WHERE
    c.tipoComponente = 'REDE'
    ORDER BY
    r.idRegistro DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT r.valorRegistro AS registrosRede, r.tipoMedida as tipoMedida, r.dtHoraRegistro as dataHora, r.detalheRegistro as detalheRegistro FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'REDE'`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
      );
      var instrucao = `SELECT TOP 120
  r.valorRegistro AS registrosRede,
  r.tipoMedida as tipoMedida,
  r.dtHoraRegistro as dataHora,
  r.detalheRegistro as detalheRegistro
  FROM
  registro r
  JOIN
  componente c ON r.fkComponente = c.idComponente
  WHERE
  c.tipoComponente = 'REDE'
  ORDER BY
  r.idRegistro DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  }
}

function selectProcesso(fkServidor, filtroTempo, booleanRegressao) {
  // idProcessos INT PRIMARY KEY IDENTITY(1,1),
  // 	usoCpu FLOAT,
  // 	usoRam FLOAT,
  // 	processoMaiorMediaUso VARCHAR(75),
  // 	qtdProcessosOnline INT,
  //       dtHora DATETIME,
  // 	fkServidor INT,
  // 	FOREIGN KEY(fkServidor) REFERENCES servidor(idServidor)
  // );
  if (fkServidor != 0) {
    if (!booleanRegressao) {

      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
        );
        var instrucao = `SELECT p.usoCpu AS usoCpu, p.usoRam as usoRam, p.qtdProcessosOnline as qtdProcessosOnline, p.dtHora as dtHora FROM processos p WHERE p.fkServidor = ${fkServidor} AND p.dtHora >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
        );
        var instrucao = `SELECT TOP 60
        p.usoCpu AS usoCpu,
        p.usoRam as usoRam,
        p.qtdProcessosOnline as qtdProcessosOnline,
        p.dtHora as dtHora  
        FROM processos p 
        WHERE p.fkServidor = ${fkServidor}
        ORDER BY
        p.idProcessos DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT p.usoCpu AS usoCpu, p.usoRam as usoRam, p.qtdProcessosOnline as qtdProcessosOnline, p.dtHora as dtHora  FROM processos p WHERE p.fkServidor = ${fkServidor};`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
      );
      var instrucao = `SELECT TOP 60
      p.usoCpu AS usoCpu,
      p.usoRam as usoRam,
      p.qtdProcessosOnline as qtdProcessosOnline,
      p.dtHora as dtHora  
      FROM processos p 
      WHERE p.fkServidor = ${fkServidor}
      ORDER BY
      p.idProcessos DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  } else {
    if (!booleanRegressao) {

      if (filtroTempo == "DAY" || filtroTempo == "WEEK" || filtroTempo == "MONTH" || filtroTempo == "YEAR") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
        );
        var instrucao = `SELECT p.usoCpu AS usoCpu, p.usoRam as usoRam, p.qtdProcessosOnline as qtdProcessosOnline, p.dtHora as dtHora  FROM processos p WHERE p.dtHora >= DATEADD(${filtroTempo}, -1, GETDATE());`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "REALTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
        );
        var instrucao = `SELECT TOP 60
        p.usoCpu AS usoCpu,
        p.usoRam as usoRam,
        p.qtdProcessosOnline as qtdProcessosOnline,
        p.dtHora as dtHora  
        FROM processos p 
        ORDER BY
        p.idProcessos DESC;`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      } else if (filtroTempo == "ALLTIME") {
        console.log(
          "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectCpu(): "
        );
        var instrucao = `SELECT p.usoCpu AS usoCpu, p.usoRam as usoRam, p.qtdProcessosOnline as qtdProcessosOnline, p.dtHora as dtHora  FROM processos p`
        console.log("Executando a instrução SQL: \n" + instrucao);

        return database.executar(instrucao);
      }
    } else {
      console.log(
        "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectProcessos(): "
      );
      var instrucao = `SELECT TOP 60
      p.usoCpu AS usoCpu,
      p.usoRam as usoRam,
      p.qtdProcessosOnline as qtdProcessosOnline,
      p.dtHora as dtHora  
      FROM processos p 
      ORDER BY
      p.idProcessos DESC;`
      console.log("Executando a instrução SQL: \n" + instrucao);

      return database.executar(instrucao);
    }
  }
}

function selectTempoRealCpu(fkServidor) {
  if (fkServidor == 0) {
    var instrucao = `SELECT TOP 1 r.valorRegistro AS registro, r.dtHoraRegistro as dthora, r.tipoMedida as tipoMedida FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'CPU' AND r.tipoMedida = '% de uso' ORDER BY r.idRegistro DESC;`;
} else {
    var instrucao = `SELECT TOP 1 r.valorRegistro AS registro, r.dtHoraRegistro as dthora, r.tipoMedida as tipoMedida FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'CPU' AND r.tipoMedida = '% de uso' ORDER BY r.idRegistro DESC;`;
}

  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

function selectTempoRealRam(fkServidor) {
  if (fkServidor == 0) {
    var instrucao = `SELECT TOP 1 r.valorRegistro AS registro, r.dtHoraRegistro as dthora, r.tipoMedida as tipoMedida FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.tipoComponente = 'RAM' AND r.tipoMedida = '% de uso' ORDER BY r.idRegistro DESC;`;
} else {
    var instrucao = `SELECT TOP 1 r.valorRegistro AS registro, r.dtHoraRegistro as dthora, r.tipoMedida as tipoMedida FROM registro r JOIN componente c ON r.fkComponente = c.idComponente WHERE c.fkServidor = ${fkServidor} AND c.tipoComponente = 'RAM' AND r.tipoMedida = '% de uso' ORDER BY r.idRegistro DESC;`;
}

  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

function selectTempoRealProc(fkServidor) {
  if (fkServidor == 0) {
    var instrucao = `SELECT TOP 1 usoCpu as cpu, usoRam as ram, dtHora as dthora FROM processos ORDER BY idProcessos DESC;`;
} else {
    var instrucao = `SELECT TOP 1 usoCpu as cpu, usoRam as ram, dtHora as dthora  FROM processos WHERE fkServidor = ${fkServidor} ORDER BY idProcessos DESC;`;
}

  console.log(
    "ACESSEI O DASHOCORRENCIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectServidores(): "
  );
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}


module.exports = {
  selectServidores,
  selectGraficoOcorrencia,
  selectCpu,
  selectRam,
  selectDisco,
  selectRede,
  selectProcesso,
  selectTempoRealCpu,
  selectTempoRealRam,
  selectTempoRealProc
};