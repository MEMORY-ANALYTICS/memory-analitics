IF EXISTS (SELECT * FROM sys.databases WHERE name = 'bd_memoryanalytics')
    DROP DATABASE bd_memoryanalytics;

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'bd_memoryanalytics')
    CREATE DATABASE bd_memoryanalytics;

USE bd_memoryanalytics;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'empresa')
BEGIN
    CREATE TABLE empresa(
        idEmpresa INT PRIMARY KEY IDENTITY(10000,1),
        nomeEmpresa VARCHAR(45),
        cnpjEmpresa CHAR(18),
        emailEmpresa VARCHAR(50),
        telEmpresa CHAR(15)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'endereco')
BEGIN
    CREATE TABLE endereco(
        idEndereco INT PRIMARY KEY IDENTITY(1,1),
        cep CHAR(9),
        logradouro VARCHAR(60),
        numero INT,
        cidade VARCHAR(60),
        estado VARCHAR(45),
        fkEmpresa INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'cargo')
BEGIN
    CREATE TABLE cargo(
        idCargo INT PRIMARY KEY IDENTITY(1,1),
        nomeCargo VARCHAR(45)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'funcionario')
BEGIN
    CREATE TABLE funcionario(
        idFuncionario INT PRIMARY KEY IDENTITY(100,1),
        nomeFunc VARCHAR(80),
        emailFunc VARCHAR(45),
        telefoneFunc CHAR(11),
        permissao CHAR(1),
        fkEmpresa INT,
        fkCargo INT,
        fkSupervisor INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
        FOREIGN KEY (fkCargo) REFERENCES cargo (idCargo),
        FOREIGN KEY (fkSupervisor) REFERENCES funcionario (idFuncionario)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'login')
BEGIN
    CREATE TABLE login(
        idLogin INT PRIMARY KEY IDENTITY(1,1),
        email VARCHAR(80),
        senha VARCHAR(45),
        fkFuncionario INT,
        FOREIGN KEY (fkFuncionario) REFERENCES funcionario (idFuncionario)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'servidor')
BEGIN
    CREATE TABLE servidor(
        idServidor INT PRIMARY KEY IDENTITY(1,1),
        SistemaOperacionalServidor VARCHAR(20),
        apelidoServidor VARCHAR(45),
        localServidor varchar(25),
        macAdress VARCHAR(20),
        fkEmpresa INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'componente')
BEGIN
    CREATE TABLE componente(
        idComponente INT PRIMARY KEY IDENTITY(1,1),
        fabricante VARCHAR(45),
        nomeModelo VARCHAR(45),
        tipoComponente VARCHAR(45),
        limiteMin FLOAT,
        limiteMax FLOAT,
        fkServidor INT,
        FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'chamadoServidor')
BEGIN
    CREATE TABLE chamadoServidor(
        idChamadoServidor INT PRIMARY KEY IDENTITY(1,1),
        codigoChamado VARCHAR(45),
        descricao varchar(45),
        dtHoraChamado DATETIME,
        fkComponente INT,
        FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'downtimeServidor')
BEGIN
    CREATE TABLE downtimeServidor(
        idDowntimeServidor INT PRIMARY KEY IDENTITY(1,1),
        tempoDowntime INT,
        dtHoraDowntime DATETIME,
        fkServidor INT,
        FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'registro')
BEGIN
    CREATE TABLE registro(
        idRegistro INT PRIMARY KEY IDENTITY(1,1),
        valorRegistro FLOAT,
        tipoMedida VARCHAR(25),
        detalheRegistro VARCHAR(45),
        dtHoraRegistro DATETIME,
        fkComponente INT,
        FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
    );
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'processos')
BEGIN
	CREATE TABLE processos(
		idProcessos INT PRIMARY KEY IDENTITY(1,1),
		usoCpu FLOAT,
		usoRam FLOAT,
		processoMaiorMediaUso VARCHAR(75),
		qtdProcessosOnline INT,
        dtHora DATETIME,
		fkServidor INT,
		FOREIGN KEY(fkServidor) REFERENCES servidor(idServidor)
	);
END;

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'processosBanidos')
BEGIN
	CREATE TABLE processosBanidos(
		idProcesso INT PRIMARY KEY IDENTITY(1,1),
		nomeProcesso VARCHAR(150),
		fkServidor INT,
		FOREIGN KEY(fkServidor) REFERENCES servidor(idServidor)
	);
END;
