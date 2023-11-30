-- DROP DATABASE IF EXISTS bd_memoryanalytics;
--IF EXISTS (SELECT * FROM sys.databases WHERE name = 'bd_memoryanalytics')
--DROP DATABASE bd_memoryanalytics;

-- CREATE DATABASE IF NOT EXISTS bd_memoryanalytics;
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'bd_memoryanalytics')
    CREATE DATABASE [bd_memoryanalytics];

-- CREATE TABLE empresa
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'empresa')
BEGIN
    CREATE TABLE empresa(
        idEmpresa INT PRIMARY KEY IDENTITY(10000,1),
        nomeEmpresa VARCHAR(45),
        cnpjEmpresa CHAR(18),
        emailEmpresa VARCHAR(50),
        telEmpresa CHAR(15)
    );
END;

-- CREATE TABLE endereco
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'endereco')
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

-- CREATE TABLE cargo
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'cargo')
BEGIN
    CREATE TABLE cargo(
        idCargo INT PRIMARY KEY IDENTITY(1,1),
        nomeCargo VARCHAR(45)
    );
END;

-- CREATE TABLE funcionario
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'funcionario')
BEGIN
    CREATE TABLE funcionario(
        idFuncionario INT PRIMARY KEY IDENTITY(100000,1),
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

-- CREATE TABLE login
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'login')
BEGIN
    CREATE TABLE login(
        idLogin INT PRIMARY KEY IDENTITY(1,1),
        email VARCHAR(80),
        senha VARCHAR(45),
        fkFuncionario INT,
        FOREIGN KEY (fkFuncionario) REFERENCES funcionario (idFuncionario)
    );
END;

-- CREATE TABLE servidor
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'servidor')
BEGIN
    CREATE TABLE servidor(
        idServidor INT PRIMARY KEY IDENTITY(1,1),
        SistemaOperacionalServidor VARCHAR(20),
        apelidoServidor VARCHAR(45),
        macAdress varchar(25),
        numeroSerieServidor VARCHAR(20),
        fkEmpresa INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
    );
END;

-- CREATE TABLE componente
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'componente')
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

-- CREATE TABLE recurso
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'recurso')
BEGIN
    CREATE TABLE recurso(
        idRecurso INT PRIMARY KEY IDENTITY(1,1),
        tipoRecurso VARCHAR(45),
        fkComponente INT,
        FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
    );
END;

-- CREATE TABLE chamadoServidor
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'chamadoServidor')
BEGIN
    CREATE TABLE chamadoServidor(
        idChamadoServidor INT PRIMARY KEY IDENTITY(1,1),
        codigoChamado VARCHAR(45),
        descricao varchar(45),
        dtHoraChamado DATETIME,
        fkIdRecurso INT,
        FOREIGN KEY (fkIdRecurso) REFERENCES recurso (idRecurso)
    );
END;

-- CREATE TABLE downtimeServidor
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'downtimeServidor')
BEGIN
    CREATE TABLE downtimeServidor(
        idDowntimeServidor INT PRIMARY KEY IDENTITY(1,1),
        tempoDowntime INT,
        dtHoraDowntime DATETIME,
        fkServidor INT,
        FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
    );
END;

-- CREATE TABLE medidaComponente
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'medidaComponente')
BEGIN
    CREATE TABLE medidaComponente(
        idMedidaComponente INT PRIMARY KEY IDENTITY(1,1),
        tipoMedida VARCHAR(25),
        unidadeMedida VARCHAR(45)
    );
END;

-- CREATE TABLE registro
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bd_memoryanalytics' AND TABLE_NAME = 'registro')
BEGIN
    CREATE TABLE registro(
        idRegistro INT PRIMARY KEY IDENTITY(1,1),
        valorRegistro FLOAT,
        dtHoraRegistro DATETIME,
        fkRecurso INT,
        fkMedidaComponente INT,
        FOREIGN KEY (fkRecurso) REFERENCES recurso (idRecurso),
        FOREIGN KEY (fkMedidaComponente) REFERENCES medidaComponente (idMedidaComponente)
    );
END;