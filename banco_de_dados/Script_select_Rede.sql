select * from registro where fkComponente = 4;

-- GRAFICO 3 ------ TAXA de TRANSMISSÃO e RECEPÇÃO

-- Pegar o maior valor que a rede já chegou;
select min(valorRegistro) from registro where fkComponente = 4 AND tipoMedida = 'Mbps';
-- Pegar o maior valor que a rede já chegou;
select max(valorRegistro) from registro where fkComponente = 4 AND tipoMedida = 'Mbps';
-- Pegar o Último registro inserido
SELECT valorRegistro FROM registro where fkComponente = 4 AND tipoMedida = 'Mbps' ORDER BY idRegistro DESC LIMIT 1;


-- GRAFICO 1 ------ Latêcia
-- 10 milissegundos: resposta instantânea, como um clique do mouse ou um pressionamento de tecla.
-- 20-30 milissegundos: resposta aceitável para a maioria das aplicações, como navegação na web ou e-mail.
-- 50-100 milissegundos: resposta aceitável para aplicações que exigem alguma resposta, como jogos online ou streaming de vídeo de baixa qualidade.
-- 100-200 milissegundos: resposta perceptível, mas ainda aceitável para algumas aplicações.
-- 200-300 milissegundos: resposta lenta, mas ainda aceitável para aplicações que não exigem uma resposta rápida.
-- >300 milissegundos: resposta muito lenta, geralmente inaceitável para a maioria das aplicações.

-- Pegar o último registro de latência
SELECT valorRegistro FROM registro WHERE fkComponente = 4 AND tipoMedida = 'ms' ORDER BY idRegistro DESC LIMIT 1;
-- Pegar o pico da latência do dia;
SELECT max(valorRegistro) FROM registro where fkComponente = 4 AND tipoMedida = 'ms' AND dtHoraRegistro = '2023-10-09 10:30:00' ;



SELECT idServidor FROM servidor where macAdress = '00:45:e2:dd:d6:45';
