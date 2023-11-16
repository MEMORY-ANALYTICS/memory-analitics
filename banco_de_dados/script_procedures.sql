use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Procedures -=-=-=-=-=-=-=-=-=-=-=

DELIMITER $$

-- PROCEDURES DE CADASTRO --

DROP PROCEDURE IF EXISTS CadastroEmpresa;
CREATE PROCEDURE CadastroEmpresa
(
    nomeEmpresa VARCHAR(45),
    cnpjEmpresa CHAR(14),
    emailEmpresa VARCHAR(50),
    telEmpresa CHAR(14)
)
BEGIN INSERT INTO empresa VALUES (NULL, nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa);

END $$

DROP PROCEDURE IF EXISTS CadastroEndereco;
CREATE PROCEDURE CadastroEndereco
(
    cep CHAR(8),
    logradouro VARCHAR(45),
    numero VARCHAR(5),
    cidade VARCHAR(45),
    estado VARCHAR(45),
    fkEmpresa INT
)
BEGIN INSERT INTO endereco VALUES (NULL, cep, logradouro, numero, cidade, estado, fkEmpresa);
END $$

DROP PROCEDURE IF EXISTS CadastroCargo;
CREATE PROCEDURE CadastroCargo
(
    nomeCargo VARCHAR(45)
)
BEGIN INSERT INTO Cargo VALUES (NULL, nomeCargo);
END $$

DROP PROCEDURE IF EXISTS CadastroFuncionario;
CREATE PROCEDURE CadastroFuncionario
(
    nomeFunc VARCHAR(80),
    emailFunc VARCHAR(45),
    telefoneFunc VARCHAR(11),
    permissao CHAR(1),
    fkEmpresa INT,
    fkCargo INT,
    fkSupervisor INT
)
BEGIN INSERT INTO funcionario VALUES (NULL, nomeFunc, emailFunc, telefoneFunc, permissao, fkEmpresa, fkCargo, fkSupervisor);
END $$

DROP PROCEDURE IF EXISTS CadastroLogin;
CREATE PROCEDURE CadastroLogin
(
    login VARCHAR(80),
    senha VARCHAR(45),
    fkFuncionario INT
)
BEGIN INSERT INTO login VALUES (NULL, login, senha, fkFuncionario);
END $$

DROP PROCEDURE IF EXISTS CadastroServidor;
CREATE PROCEDURE CadastroServidor
(
    sistemaOperacionalServer VARCHAR(20),
    apelidoServer VARCHAR(45),
    ipServer VARCHAR(12),
    numeroSerieServer VARCHAR(20),
    fkEmpresa INT
)
BEGIN INSERT INTO servidor VALUES (NULL, sistemaOperacionalServer, apelidoServer, ipServer, numeroSerieServer, fkEmpresa);
END $$

DROP PROCEDURE IF EXISTS CadastroComponente;
CREATE PROCEDURE CadastroComponente
(
    fkServidor INT,
    fkModeloComponente INT
)
BEGIN INSERT INTO componente VALUES (NULL, fkServidor, fkModeloComponente);
END $$

DROP PROCEDURE IF EXISTS CadastroModeloComponente;
CREATE PROCEDURE CadastroModeloComponente
(
    fabricante VARCHAR(45),
    nomeModelo VARCHAR(45),
    codigoGeracao VARCHAR(45),
    fkTipoComponente INT
)
BEGIN INSERT INTO modeloComponente VALUES (NULL, fabricante, nomeModelo, codigoGeracao, fkTipoComponente);
END $$

DROP PROCEDURE IF EXISTS CadastroTipoComponente;
CREATE PROCEDURE CadastroTipoComponente
(
    tipoComponente VARCHAR(45)
)
BEGIN INSERT INTO tipoComponente VALUES (NULL, tipoComponente);
END $$

DROP PROCEDURE IF EXISTS CadastroMetricaComponente;
CREATE PROCEDURE CadastroMetricaComponente
(
    limiteMin VARCHAR(45),
    limiteMax VARCHAR(45),
    fkModeloComponente INT
)
BEGIN INSERT INTO metricaComponente VALUES (NULL, limiteMin, limiteMax, fkModeloComponente);
END $$

DROP PROCEDURE IF EXISTS CadastroSubComponente;
CREATE PROCEDURE CadastroSubComponente
(
    nomeSubComponente VARCHAR(45),
    fkComponente INT
)
BEGIN INSERT INTO subComponente VALUES (NULL, nomeSubComponente, fkComponente);
END $$

DROP PROCEDURE IF EXISTS CadastroMedidaComponente;
CREATE PROCEDURE CadastroMedidaComponente
(
    nomeMedida VARCHAR(25),
    simboloMedida VARCHAR(4),
    unidadeMedida VARCHAR(45),
    fkSubComponente INT
)
BEGIN INSERT INTO medidaComponente VALUES (NULL, nomeMedida, simboloMedida, unidadeMedida,fkSubComponente);
END$$

DROP PROCEDURE IF EXISTS CadastroRegistro;
CREATE PROCEDURE CadastroRegistro
(
    valorRegistro DOUBLE,
    dtHoraRegistro DATETIME,
    fkMedidaComponente INT
)
BEGIN INSERT INTO registro VALUES (NULL, valorRegistro, dtHoraRegistro, fkMedidaComponente);
END $$

-- PROCEDURES DE UPDATE --

DROP PROCEDURE IF EXISTS UpdateDadosEmpresa;
CREATE PROCEDURE UpdateDadosEmpresa
(
    nomeEmpresa VARCHAR(45),
    emailEmpresa VARCHAR(50),
    telEmpresa CHAR(14),
    idEmpresa INT
)BEGIN UPDATE empresa 
    SET empresa.nomeEmpresa = nomeEmpresa, 
    empresa.emailEmpresa = emailEmpresa, 
    empresa.telEmpresa = telEmpresa 
    WHERE empresa.idEmpresa = idEmpresa;
END $$

DROP PROCEDURE IF EXISTS UpdateDadosEndereço;
CREATE PROCEDURE UpdateDadosEndereço
(
    cep CHAR(8),
    logradouro VARCHAR(45),
    numero INT,
    cidade VARCHAR(45),
    estado VARCHAR(45),
    fkEmpresa INT
)BEGIN UPDATE endereco
    SET endereco.cep = cep,
    endereco.logradouro = logradouro,
    endereco.numero = numero,
    endereco.cidade = cidade, 
    endereco.estado = estado 
    WHERE endereco.fkEmpresa = fkEmpresa;
END $$

DROP PROCEDURE IF EXISTS UpdateDadosFuncionario;
CREATE PROCEDURE UpdateDadosFuncionario
(
    nomeFunc VARCHAR(80),
    emailFunc VARCHAR(45),
    telefoneFunc CHAR(11),
    permissao CHAR(1),
    fkCargo INT,
    fkSupervisor INT,
    idFuncionario INT
) BEGIN UPDATE funcionario 
    SET funcionario.nomeFunc = nomeFunc,
    funcionario.emailFunc = emailFunc,
    funcionario.telefoneFunc = telefoneFunc,
    funcionario.permissao = permissao,
    funcionario.fkCargo = fkCargo,
    funcionario.fkSupervisor = fkSupervisor
    WHERE funcionario.idFuncionario = idFuncionario;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosLogin;
CREATE PROCEDURE UpdateDadosLogin
(
    login VARCHAR(80),
    senha VARCHAR(45),
    idLogin INT
) BEGIN UPDATE login
    SET login.login = login, 
    login.senha = senha
    WHERE login.idLogin = idLogin;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosServidor;
CREATE PROCEDURE UpdateDadosServidor
(
    sistemaOperacionalServer VARCHAR(20),
    apelidoServer VARCHAR(45),
    ipServer VARCHAR(12),
    numeroSerieServer VARCHAR(20),
    fkEmpresa INT,
    idServer INT
) BEGIN UPDATE servidor
    SET servidor.sistemaOperacionalServer = sistemaOperacionalServer,
    servidor.apelidoServer = apelidoServer,
    servidor.ipServer = ipServer,
    servidor.numeroSerieServer = numeroSerieServer
    WHERE servidor.fkEmpresa = fkEmpresa
    AND servidor.idServer = idServer;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosComponente;
CREATE PROCEDURE UpdateDadosComponente
(
    fkServidor INT,
    fkModeloComponente INT,
    idComponente INT
) BEGIN UPDATE componente
    SET componente.fkServidor = fkServidor,
    componente.fkModeloComponente = fkModeloComponente
    WHERE componente.idComponente = idComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosModeloComponente;
CREATE PROCEDURE UpdateDadosModeloComponente
(
    fabricante VARCHAR(45),
    nomeModelo VARCHAR(45),
    codigoGeracao VARCHAR(45),
    fkTipoComponente INT,
    idModeloComponente INT
) BEGIN UPDATE modeloComponente
    SET modeloComponente.fabrucante = fabricante,
    modeloComponente.nomeModelo = nomeModelo,
    modeloComponente.codigoGeracao = codigoGeracao,
    modeloComponente.fkTipoComponente = fkTipoComponente
    WHERE modeloComponente.idModeloComponente = idModeloComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosMetricaComponente;
CREATE PROCEDURE UpdateDadosMetricaComponente
(
    limiteMin VARCHAR(45),
    limiteMax VARCHAR(45),
    fkModeloComponente INT,
    idModeloComponente INT
) BEGIN UPDATE metricaComponente
    SET metricaComponente.limiteMin = limiteMin,
    metricaComponente.limiteMax = limiteMax,
    metricaComponente.fkModeloComponente = fkModeloComponente
    WHERE metricaComponente.idMetricaComponente = idMetricaComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosTipoComponente;
CREATE PROCEDURE UpdateDadosTipoComponente
(
    tipoComponente VARCHAR(45),
    idTipoComponente INT
) BEGIN UPDATE tipoComponente
    SET tipoComponente.tipoComponente = tipoComponente
    WHERE tipoComponente.idTipoComponente = idTipoComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosSubComponente;
CREATE PROCEDURE UpdateDadosSubComponente
(
    nomeSubComponente VARCHAR(45),
    fkComponente INT,
    idSubComponente INT
) BEGIN UPDATE subComponente
    SET subComponente.nomeSubComponente = nomeSubComponente,
    subComponente.fkComponente = fkComponente
    WHERE subComponente.idSubcomponente = idSubComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosMedidaComponente;
CREATE PROCEDURE UpdateDadosMedidaComponente
(
    nomeMedida VARCHAR(25),
    simboloMedida VARCHAR(4),
    unidadeMedida VARCHAR(45),
    fkSubComponente INT,
    idMedidaComponente INT
)BEGIN UPDATE medidaComponente
    SET medidaComponente.nomeMedida = nomeMedida,
    medidaComponente.simboloMedida = simboloMedida,
    medidaComponente.unidadeMedida = unidadeMedida,
    medidaComponente.fkSubComponente = fkSubComponente
    WHERE medidaComponente.idMedidaComponete = idMedidaComponente;
END$$

DROP PROCEDURE IF EXISTS UpdateDadosRegistro;
CREATE PROCEDURE UpdateDadosRegistro
(
    valorRegistro DOUBLE,
    dtHoraRegistro DATETIME,
    fkMedidaComponente INT,
    idRegistro INT
) BEGIN UPDATE registro
    SET registro.valorRegistro = valorRegistro,
    registro.dtHoraRegistro = dtHoraRegistro,
    registro.fkMedidaComponente = fkMedidaComponente
    WHERE registro.idRegistro = idRegistro;
END$$

-- PROCEDURES DE SELECT (SERÃO SUBSTITUIDAS PELOS FUTUROS SELECTS COM JOINS ETC)

DROP PROCEDURE IF EXISTS PegarEmpresa;
CREATE PROCEDURE PegarEmpresa(idEmpresa INT)
BEGIN SELECT * FROM empresa WHERE empresa.idEmpresa = idEmpresa;
END $$

DROP PROCEDURE IF EXISTS PegarEndereco;
CREATE PROCEDURE PegarEndereco(idEndereco INT)
BEGIN SELECT * FROM endereco WHERE endereco.idEndereco = idendereco;
END $$

DROP PROCEDURE IF EXISTS PegarCargo;
CREATE PROCEDURE PegarCargo(idCargo INT)
BEGIN SELECT * FROM cargo WHERE cargo.idCargo = cargo;
END $$

DROP PROCEDURE IF EXISTS pegarFuncionario;
CREATE PROCEDURE pegarFuncionario(idFuncionario INT)
BEGIN SELECT * FROM funcionario WHERE funcionario.idFuncionario = idFuncionario;
END $$

DROP PROCEDURE IF EXISTS PegarLogin;
CREATE PROCEDURE PegarLogin(idLogin INT)
BEGIN SELECT * FROM login WHERE login.idLogin = idLogin;
END $$

DROP PROCEDURE IF EXISTS PegarServidor;
CREATE PROCEDURE PegarServidor(idServidor INT)
BEGIN SELECT * FROM servidor WHERE servidor.idServidor = idServidor;
END $$

DROP PROCEDURE IF EXISTS PegarMedidaComponente;
CREATE PROCEDURE PegarMedidaComponente(idMedidaComponente INT)
BEGIN SELECT * FROM medidaComponente WHERE medidaComponente.idMedidaComponente = idMedidaComponente;
END $$

DROP PROCEDURE IF EXISTS PegarMetricaComponente;
CREATE PROCEDURE PegarMetricaComponente(idMetricaComponente INT)
BEGIN SELECT * FROM metricaComponente WHERE metricaComponente.idMetricaComponente = idMetricaComponente;
END $$

DROP PROCEDURE IF EXISTS PegarTipoComponente;
CREATE PROCEDURE PegarTipoComponente(idTipoComponente INT)
BEGIN SELECT * FROM tipoComponente WHERE tipoComponente.idTipoComponente = idTipoComponente;
END $$

DROP PROCEDURE IF EXISTS PegarModeloComponente;
CREATE PROCEDURE PegarModeloComponente(idModeloCoponente INT)
BEGIN SELECT * FROM modeloComponente WHERE modeloComponente.idModeloComponente = idModeloComponente;
END $$

DROP PROCEDURE IF EXISTS PegarSubComponente;
CREATE PROCEDURE PegarSubComponente(idSubComponente INT)
BEGIN SELECT * FROM subComponente WHERE subComponente.idSubComponente = idSubComponente;
END $$

DROP PROCEDURE IF EXISTS PegarComponente;
CREATE PROCEDURE PegarComponente(idComponente INT)
BEGIN SELECT * FROM componente WHERE componente.idComponente = idComponente;
END $$

DROP PROCEDURE IF EXISTS PegarRegistro;
CREATE PROCEDURE PegarRegistro(idRegistro INT)
BEGIN SELECT * FROM registro WHERE registro.idRegistro = idRegistro;
END $$

DELIMITER ;