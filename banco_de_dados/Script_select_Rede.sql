select * from registro where fkComponente = 4;

-- GRAFICO 3 ------ TAXA de TRANSMISSÃO e RECEPÇÃO

-- Pegar o maior valor que a rede já chegou;
select min(valorRegistro) from registro where fkComponente = 5 AND tipoMedida = 'Mbps';
-- SQL SERVER
SELECT min(valorRegistro) FROM registro WHERE fkComponente = 5 AND tipoMedida = 'Mbps';

-- Pegar o maior valor que a rede já chegou;
select max(valorRegistro) from registro where fkComponente = 5 AND tipoMedida = 'Mbps';
-- SQL SERVER
SELECT max(valorRegistro), dtHoraRegistro FROM registro WHERE fkComponente = 5 AND tipoMedida = 'Mbps' AND  date(dtHoraRegistro) = '2023-10-09' GROUP BY dtHoraRegistro;

-- Pegar o Último registro inserido
SELECT valorRegistro FROM registro where fkComponente = 5 AND tipoMedida = 'Mbps' ORDER BY idRegistro DESC LIMIT 1;
-- SQL SERVER
-- SELECT TOP 1 valorRegistro FROM registro WHERE fkComponente = 6 AND tipoMedida = 'Mbps' ORDER BY idRegistro DESC;


-- GRAFICO 1 ------ Latêcia
-- 10 milissegundos: resposta instantânea, como um clique do mouse ou um pressionamento de tecla.
-- 20-30 milissegundos: resposta aceitável para a maioria das aplicações, como navegação na web ou e-mail.
-- 50-100 milissegundos: resposta aceitável para aplicações que exigem alguma resposta, como jogos online ou streaming de vídeo de baixa qualidade.
-- 100-200 milissegundos: resposta perceptível, mas ainda aceitável para algumas aplicações.
-- 200-300 milissegundos: resposta lenta, mas ainda aceitável para aplicações que não exigem uma resposta rápida.
-- >300 milissegundos: resposta muito lenta, geralmente inaceitável para a maioria das aplicações.

-- Pegar o último registro de latência
SELECT valorRegistro FROM registro WHERE fkComponente = 5 AND tipoMedida = 'ms' ORDER BY idRegistro DESC LIMIT 1;
-- SQL Server
-- SELECT TOP 1 valorRegistro FROM registro WHERE fkComponente = 6 AND tipoMedida = 'ms' ORDER BY idRegistro DESC;

-- Pegar o pico da latência do dia;
-- Como pegar a data atual no javascript
SELECT max(valorRegistro), dtHoraRegistro FROM registro where fkComponente = 5 AND tipoMedida = 'ms' AND  date(dtHoraRegistro) = '2023-10-09' GROUP BY dtHoraRegistro;
-- SQL Server
-- SELECT MAX(valorRegistro) FROM registro WHERE fkComponente = 6 AND tipoMedida = 'ms' AND CONVERT(DATE, dtHoraRegistro) = '2023-10-09';

-- Pegar ultimo registro Pacotes Enviados e Pacotes Recebidos
SELECT valorRegistro FROM registro WHERE fkComponente = 5 AND tipoMedida = 'Pacotes' AND detalheRegistro = 'Enviados Rede' ORDER BY idRegistro DESC LIMIT 1;
SELECT valorRegistro FROM registro WHERE fkComponente = 5 AND tipoMedida = 'Pacotes' AND detalheRegistro = 'Recebidos Rede' ORDER BY idRegistro DESC LIMIT 1;
-- SQL Server
-- SELECT TOP 1 valorRegistro FROM registro WHERE fkComponente = 7 AND tipoMedida = 'Pacotes' AND detalheRegistro = 'Enviados Rede' ORDER BY idRegistro DESC;
-- SELECT TOP 1 valorRegistro FROM registro WHERE fkComponente = 7 AND tipoMedida = 'Pacotes' AND detalheRegistro = 'Recebidos Rede' ORDER BY idRegistro DESC;
-- -------------------------------------------------------------------------------------------


-- 1º Select para pegar os servidores da empresa
SELECT * FROM servidor JOIN componente ON fkServidor=idServidor WHERE fkEmpresa = 10005 AND tipoComponente = 'REDE';

-- Select para pegar o idComponente REDE do servidor -> premissa 1 componente rede por servidor
SELECT idComponente FROM componente WHERE fkServidor = 4 AND tipoComponente = 'REDE';
