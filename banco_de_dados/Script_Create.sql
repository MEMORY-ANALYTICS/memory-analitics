DROP DATABASE IF EXISTS bd_memoryanalytics;
CREATE DATABASE IF NOT EXISTS bd_memoryanalytics;
USE bd_memoryanalytics;


#CREATE USER IF NOT EXISTS urubu100 IDENTIFIED BY 'urubu100';
#GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON bd_memoryanalytics.* TO urubu100;
#FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `empresa`(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(45),
cnpjEmpresa CHAR(18),
emailEmpresa VARCHAR(50),
telEmpresa CHAR(15)
) AUTO_INCREMENT = 10000;

CREATE TABLE IF NOT EXISTS `endereco`(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
cep CHAR(9),
logradouro VARCHAR(60),
numero INT,
cidade VARCHAR(60),
estado VARCHAR(45),
fkEmpresa INT,
FOREIGN KEY (`fkEmpresa`) REFERENCES empresa (idEmpresa)
);

CREATE TABLE IF NOT EXISTS `cargo`(
idCargo INT PRIMARY KEY AUTO_INCREMENT,
nomeCargo VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS `funcionario`(
idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
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
) AUTO_INCREMENT = 100;

CREATE TABLE IF NOT EXISTS `login`(
idLogin INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(80),
senha VARCHAR(45),
fkFuncionario INT,
FOREIGN KEY (fkFuncionario) REFERENCES funcionario (idFuncionario)
);

CREATE TABLE IF NOT EXISTS `servidor`(
idServidor INT PRIMARY KEY AUTO_INCREMENT,
SistemaOperacionalServidor VARCHAR(20),
apelidoServidor VARCHAR(45),
localServidor varchar(25),
macAdress VARCHAR(20),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE IF NOT EXISTS `downtimeServidor`(
idDowntimeServidor INT PRIMARY KEY AUTO_INCREMENT,
tempoDowntime INT,
dtHoraDowntime DATETIME,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE IF NOT EXISTS `componente`(
idComponente INT PRIMARY KEY AUTO_INCREMENT,
fabricante VARCHAR(45),
nomeModelo VARCHAR(45),
tipoComponente VARCHAR(45),
limiteMin DOUBLE,
limiteMax DOUBLE,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE IF NOT EXISTS `chamadoServidor`(
idChamadoServidor INT PRIMARY KEY AUTO_INCREMENT,
codigoChamado VARCHAR(45),
descricao varchar(45),
dtHoraChamado DATETIME,
fkComponente INT,
FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
);

CREATE TABLE IF NOT EXISTS `downtimeServidor`(
idDowntimeServidor INT PRIMARY KEY AUTO_INCREMENT,
tempoDowntime INT,
dtHoraDowntime DATETIME,
fkServidor INT,
FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor)
);

CREATE TABLE IF NOT EXISTS `registro`(
  idRegistro INT PRIMARY KEY AUTO_INCREMENT,
  valorRegistro DOUBLE,
  tipoMedida VARCHAR(25),
  detalheRegistro VARCHAR(45),
  dtHoraRegistro DATETIME,
  fkComponente INT,
  FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
);
-- CREATE TABLE IF NOT EXISTS `recurso`(
--  idRecurso INT PRIMARY KEY AUTO_INCREMENT,
--  tipoRecurso VARCHAR(45),
--  fkComponente INT,
--  FOREIGN KEY (fkComponente) REFERENCES componente (idComponente)
-- );

-- CREATE TABLE IF NOT EXISTS `medidaComponente`(
--  idMedidaComponente INT PRIMARY KEY auto_increment,
--  tipoMedida VARCHAR(25),
--  unidadeMedida VARCHAR(45)
-- );
-- PROCEDURES VERIFICADAS E JA EM PRODUÇÃO --

DELIMITER $$
    
CREATE PROCEDURE `downtime`(fkServidor INT)
	BEGIN 
		INSERT INTO downtimeServidor VALUES(null, 
			(SELECT TIMESTAMPDIFF (SECOND, 
				(SELECT MAX(dtHoraRegistro)
			FROM registro 
			WHERE fkRecurso =
						(SELECT idRecurso
						FROM recurso 
						WHERE fkComponente =
							(SELECT idComponente
							FROM componente
							WHERE componente.fkServidor = fkServidor 
							LIMIT 1)
						LIMIT 1)
				)
			, now())),
		now(), fkServidor);
    
END $$

CREATE PROCEDURE `selectUltimoRegistro`(fkServidor INT, OUT ultimoRegistro DATETIME)
	BEGIN 
		SELECT MAX(dtHoraRegistro) INTO ultimoRegistro 
		FROM registro 
		WHERE fkRecurso =
					(SELECT idRecurso
					FROM recurso 
					WHERE fkComponente =
						(SELECT idComponente
						FROM componente
						WHERE componente.fkServidor = fkServidor 
						LIMIT 1)
					LIMIT 1
		);
    
END $$	