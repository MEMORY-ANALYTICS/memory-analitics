DROP DATABASE IF EXISTS bd_memoryanalytics;
CREATE DATABASE bd_memoryanalytics;
USE bd_memoryanalytics;

-- CREATE USER IF NOT EXISTS urubu100 IDENTIFIED BY 'urubu100';
-- CREATE USER IF NOT EXISTS urubu100 WITH PASSWORD = 'urubu100';
-- GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON bd_memoryanalytics.* TO urubu100;
-- FLUSH PRIVILEGES;

CREATE TABLE empresa(
idEmpresa INT IDENTITY(10000, 1) PRIMARY KEY,
nomeEmpresa VARCHAR(45),
cnpjEmpresa CHAR(18),
emailEmpresa VARCHAR(50),
telEmpresa CHAR(15)
);

CREATE TABLE endereco(
idEndereco INT IDENTITY(1, 1) PRIMARY KEY,
cep CHAR(9),
logradouro VARCHAR(60),
numero INT,
cidade VARCHAR(60),
estado VARCHAR(45),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE cargo(
idCargo INT IDENTITY(1, 1) PRIMARY KEY,
nomeCargo VARCHAR(45)
);

CREATE TABLE funcionario(
idFuncionario INT IDENTITY(100000, 1) PRIMARY KEY,
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

CREATE TABLE login(
idLogin INT IDENTITY(1, 1) PRIMARY KEY,
email VARCHAR(80),
senha VARCHAR(45),
fkFuncionario INT,
FOREIGN KEY (fkFuncionario) REFERENCES funcionario (idFuncionario)
);

CREATE TABLE servidor(
idServidor INT IDENTITY(1, 1) PRIMARY KEY,
SistemaOperacionalServidor VARCHAR(20),
apelidoServidor VARCHAR(45),
ipServidor varchar(25),
numeroSerieServidor VARCHAR(20),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE chamadoServidor(
idChamadoServidor INT IDENTITY(1, 1) PRIMARY KEY,
codigoChamado VARCHAR(45),
dtHoraChamado DATETIME,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE downtimeServidor(
idDowntimeServidor INT IDENTITY(1, 1) PRIMARY KEY,
tempoDowntime INT,
dtHoraDowntime DATETIME,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE componente(
idComponente INT IDENTITY(1, 1) PRIMARY KEY,
fabricante VARCHAR(45),
nomeModelo VARCHAR(45),
tipoComponente VARCHAR(45),
limiteMin DOUBLE,
limiteMax DOUBLE,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE recurso(
  idRecurso INT IDENTITY(1, 1) PRIMARY KEY,
  tipoRecurso VARCHAR(45),
  fkComponente INT,
  FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
);

CREATE TABLE medidaComponente(
  idMedidaComponente INT IDENTITY(1, 1) PRIMARY KEY,
  tipoMedida VARCHAR(25),
  unidadeMedida VARCHAR(45)
);

CREATE TABLE registro(
  idRegistro INT PRIMARY KEY AUTO_INCREMENT,
  valorRegistro DOUBLE,
  dtHoraRegistro DATETIME,
  fkRecurso INT,
  fkMedidaComponente INT,
  FOREIGN KEY (fkRecurso) REFERENCES recurso (idRecurso),
  FOREIGN KEY (fkMedidaComponente) REFERENCES medidaComponente (idMedidaComponente)
);
