-- PROCEDURES VERIFICADAS E JA EM PRODUÇÃO --

-- PROCEDURE 'downtime'
CREATE PROCEDURE downtime
    @fkServidor INT
AS
BEGIN
    DECLARE @maxDtHoraRegistro DATETIME;
    DECLARE @secondsDifference INT;

    SELECT @maxDtHoraRegistro = MAX(dtHoraRegistro)
    FROM registro
    WHERE fkRecurso = (
            SELECT idRecurso
            FROM recurso
            WHERE fkComponente = (
                    SELECT TOP 1 idComponente
                    FROM componente
                    WHERE fkServidor = @fkServidor
                    ORDER BY idComponente
                )
        );

    SET @secondsDifference = DATEDIFF(SECOND, ISNULL(@maxDtHoraRegistro, '1900-01-01'), GETDATE());

    INSERT INTO downtimeServidor (tempoDowntime, dtHoraDowntime, fkServidor)
    VALUES (@secondsDifference, GETDATE(), @fkServidor);
END;
