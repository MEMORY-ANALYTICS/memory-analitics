use bd_memoryanalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

select * from funcionario;
select * from login;
select * from Empresa;
select * from servidor;
select * from downtimeServidor;
select * from componente;
select * from recurso;
select * from registro;
select * from medidacomponente;

select idRegistro, valorRegistro, unidadeMedida, tipoRecurso, tipoComponente, fkServidor FROM registro 
left join medidaComponente on fkMedidaComponente = idMedidaComponente
left join recurso on fkRecurso = idRecurso
left join componente on fkComponente = idComponente
left join servidor on fkServidor = idServidor
where idMedidaComponente = 1;
  
# DOWNTIME

SELECT * FROM downtimeServidor;
  
# QUANTIDADE SERVIDORES INSTAVEIS

CREATE OR REPLACE VIEW getServInstaveis as SELECT e.idEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServInstaveis
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
AND idMedidaComponente = 1
GROUP BY e.idEmpresa;

CREATE OR REPLACE VIEW getServCritivos as SELECT e.idEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServCriticos
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
AND idMedidaComponente = 1
GROUP BY e.idEmpresa;

SELECT * FROM getServInstaveis;


# GERAL SERVIDORES

CREATE OR REPLACE VIEW getServInstaveis as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServInstaveis
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
AND idMedidaComponente = 1
GROUP BY e.nomeEmpresa;

SELECT * FROM getServInstaveis;

CREATE OR REPLACE VIEW getServAlertas as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServAlertas
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (r.valorRegistro > c.limiteMax * 0.85 AND r.valorRegistro < c.limiteMax OR r.valorRegistro < c.limiteMin * 1.15 AND r.valorRegistro > c.limiteMin)
AND idMedidaComponente = 1
GROUP BY e.nomeEmpresa;

SELECT * FROM getServAlertas;

CREATE OR REPLACE VIEW getServSeguros as SELECT e.nomeEmpresa, COUNT(DISTINCT s.idServidor) AS qtdServSeguros
FROM empresa e
JOIN servidor s ON e.idEmpresa = s.fkEmpresa
JOIN componente c ON s.idServidor = c.fkServidor
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (r.valorRegistro < c.limiteMax * 0.85 AND r.valorRegistro > c.limiteMin * 1.15)
AND idMedidaComponente = 1
GROUP BY e.nomeEmpresa;

SELECT * FROM getServSeguros;

CREATE OR REPLACE VIEW getEstadoGeralServ AS SELECT S.nomeEmpresa, qtdServSeguros, qtdServAlertas, qtdServInstaveis FROM getServSeguros S 
JOIN getServAlertas A 
JOIN getServInstaveis I 
WHERE S.nomeEmpresa = A.nomeEmpresa 
AND S.nomeEmpresa = I.nomeEmpresa 
AND A.nomeEmpresa = I.nomeEmpresa;

SELECT * FROM getEstadoGeralServ;


# COMPONENTE PROBLEMATICO

SELECT c.tipoComponente AS nomeComponente, COUNT(*) AS total_registros_excedidos
FROM componente c
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN registro r ON c.idComponente = r.fkRecurso
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE e.idEmpresa = 10002 
    AND (r.valorRegistro > c.limiteMax OR r.valorRegistro < c.limiteMin)
    AND idMedidaComponente = 1
GROUP BY c.tipoComponente
ORDER BY total_registros_excedidos DESC limit 1;


create or replace view getCompProblematico as select tipoComponente, count(tipoComponente) from registro rg 
join recurso r on rg.fkRecurso = r.idRecurso 
join componente c on r.fkComponente = c.idComponente
join servidor s on c.fkServidor = s.idServidor
join medidacomponente m on rg.fkMedidaComponente = m.idMedidaComponente 
where (rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin) 
and fkMedidaComponente = 1 
and fkEmpresa = 10002 
group by tipoComponente 
order by count(tipoComponente) 
desc limit 1;

SELECT valorRegistro, tipoComponente
FROM registro rg 
	JOIN recurso r ON rg.fkRecurso = r.idRecurso 
	JOIN componente c ON r.fkComponente = c.idComponente
	JOIN servidor s ON c.fkServidor = s.idServidor
	JOIN medidacomponente m ON rg.fkMedidaComponente = m.idMedidaComponente 
WHERE (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin) 
	AND fkMedidaComponente = 1 
	AND fkEmpresa = 10002;

SELECT idRegistro, valorRegistro, tipoComponente, tipoMedida, limiteMin, limiteMax
FROM componente c
	JOIN servidor s ON c.fkServidor = s.idServidor
	JOIN registro rg ON c.idComponente = rg.fkRecurso
	JOIN recurso r ON rg.fkRecurso = r.idRecurso 
	JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE (rg.valorRegistro > c.limiteMax OR rg.valorRegistro < c.limiteMin)
	AND idMedidaComponente = 1
    AND s.fkEmpresa = 10002;
    
    Select idRegistro, valorRegistro, tipoMedida, tipoComponente, limiteMin, limiteMax from registro
    join medidaComponente on fkMedidaComponente = idMedidaComponente 
    join recurso on fkRecurso = idRecurso
    join componente on fkComponente = idComponente
    where (valorRegistro < limiteMin or valorRegistro > limiteMax)
    and idMedidaComponente = 1;
    
	Select idRegistro, valorRegistro, tipoMedida, tipoComponente, limiteMin, limiteMax from registro
    join medidaComponente on fkMedidaComponente = idMedidaComponente 
    join recurso on fkRecurso = idRecurso
    join componente on fkComponente = idComponente;
    
	Select * from registro
    join medidaComponente on fkMedidaComponente = idMedidaComponente 
    join recurso on fkRecurso = idRecurso
    join componente on fkComponente = idComponente;
    
    select * from registro 
    join componente on 

select * from medidaComponente;
select * from getCompProblematico where fkEmpresa = 10002;

select * from registro;
truncate registro;

select count(idRegistro), tipoComponente from registro rg 
join recurso r on rg.fkRecurso = r.idRecurso 
join componente c on r.fkComponente = c.idComponente
join servidor s on c.fkServidor = s.idServidor 
where rg.valorRegistro > c.limiteMax or rg.valorRegistro < c.limiteMin group by tipoComponente;

select * from componente;

SELECT tipoComponente
FROM componente
WHERE idComponente = (
    SELECT c.idComponente
    FROM componente c
    INNER JOIN registro r ON c.idComponente = r.fkComponente
    WHERE r.valorRegistro > c.limiteMin OR r.valorRegistro > c.limiteMax
    GROUP BY c.idComponente
    ORDER BY COUNT(*) DESC
    LIMIT 1
);


# GRAFICO PICO DE USO

CREATE OR REPLACE VIEW limitesExcedidos AS SELECT 
    e.nomeEmpresa AS NomeEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%Y-%m') AS MesAno,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
AND idMedidaComponente = 1
GROUP BY NomeEmpresa, MesAno, TipoComponente
ORDER BY NomeEmpresa, MesAno, TipoComponente;

SELECT 
    e.nomeEmpresa AS NomeEmpresa,
    DATE_FORMAT(r.dtHoraRegistro, '%Y-%m') AS MesAno,
    c.tipoComponente AS TipoComponente,
    SUM(CASE WHEN r.valorRegistro < c.limiteMin OR r.valorRegistro > c.limiteMax THEN 1 ELSE 0 END) AS ExcedeuLimites
FROM registro r
JOIN recurso rc ON r.fkRecurso = rc.idRecurso
JOIN componente c ON rc.fkComponente = c.idComponente
JOIN servidor s ON c.fkServidor = s.idServidor
JOIN empresa e ON s.fkEmpresa = e.idEmpresa
JOIN medidaComponente on idMedidaComponente = fkMedidaComponente
WHERE e.nomeEmpresa = 'Empresa C'
AND idMedidaComponente = 1
GROUP BY NomeEmpresa, MesAno, TipoComponente
ORDER BY NomeEmpresa, MesAno, TipoComponente;

SELECT SUM(ExcedeuLimites) picosDeUso, MesAno FROM limitesExcedidos WHERE NomeEmpresa = 'Empresa C' GROUP BY MesAno;


SELECT idRegistro, MONTH(dtHoraRegistro), fkEmpresa, idServidor FROM registro rg
JOIN recurso rc ON fkRecurso = idRecurso
JOIN componente c ON fkComponente = idComponente
JOIN servidor s ON fkServidor = idServidor
JOIN medidaComponente ON fkMedidaComponente = idMedidaComponente
WHERE 
	rg.valorRegistro > limiteMax || rg.valorRegistro < limiteMin
	AND	idMedidaComponente = 1;
    
SELECT idServidor, fkEmpresa FROM registro rg
JOIN recurso rc ON fkRecurso = idRecurso
JOIN componente c ON fkComponente = idComponente
JOIN servidor s ON fkServidor = idServidor
JOIN medidaComponente ON fkMedidaComponente = idMedidaComponente
WHERE 
	(rg.valorRegistro > limiteMax || rg.valorRegistro < limiteMin)
	AND	idMedidaComponente = 1
    AND fkEmpresa = 10002
    GROUP BY idServidor;


SELECT * FROM registro WHERE dtHoraRegistro >= DATE_SUB(now(), INTERVAL 1 MONTH);
SELECT idRegistro FROM registro WHERE MONTH(dtHoraRegistro) = 10;





-- Dash Gabriel Branco --
select * from servidor;
select * from registro;

-- kpi 1
select * from servidor where fkEmpresa = 10002;

-- kpi 2 
select round(avg(valorRegistro),2), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;

-- kpi 3
select max(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;

-- kpi 4
select min(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;