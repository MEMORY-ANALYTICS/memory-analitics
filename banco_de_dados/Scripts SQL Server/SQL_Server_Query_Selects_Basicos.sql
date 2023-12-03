-- -------------------------------------------------------------------------------------------------------------------------------
SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor;

SELECT fabricante, nomeModelo,tipoComponente,limiteMin,limiteMax,idServidor,apelidoServidor FROM componente JOIN servidor 
ON fkServidor = idServidor WHERE fkEmpresa = 10001;

SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente 
on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'REDE';

-- ------------------------------------------------------Selects---------------------------------------------------------
SELECT * FROM empresa;
SELECT * FROM endereco;

SELECT * FROM funcionario;
SELECT * FROM login;
SELECT * FROM cargo;

SELECT * FROM servidor;
SELECT * FROM componente;
SELECT * FROM recurso;
SELECT * FROM medidaComponente;

SELECT * FROM chamadoServidor;
SELECT * FROM downtimeServidor;

