use bd_memoryanalytics;
 
 -- pegar a lista de servidores disponiveis para um determinado funcionario  com base no email--
select idServidor, apelidoServidor from servidor join empresa on fkEmpresa = idEmpresa 
where idEmpresa = (select idEmpresa from empresa join funcionario on fkEmpresa = idEmpresa 
	where emailFunc = 'anafonseca@email.com')
-- and SistemaOperacionalServidor = 'Linux'
;

 -- kpi3 -- 
 
 #create view valorMaximoHora as
 
select valorRegistro, dtHoraRegistro, tipoComponente, idComponente from registroEmpresa 
	where valorRegistro = (
    select max(valorRegistro) from registroEmpresa 
		where tipoMedida = "°C" and apelidoServidor = "Servidor A") order by dtHoraRegistro limit 1 ;

-- KPI 1
-- Quantidade de chamados especifico de um determinado servidor --
select count(idChamadoServidor) as quantidade from chamadoServidor join componente on fkComponente = idComponente
join servidor on fkServidor = idServidor where descricao like "CPU" and apelidoServidor = "Servidor B";



-- KPI 2
select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and fkServidor = 8 order by valorRegistro desc, dtHoraRegistro  limit 1;



-- KPI 3
select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and dtHoraRegistro like '2023-10-09%' and fkServidor = 8 order by valorRegistro desc  limit 1;

select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and fkServidor = 8 order by valorRegistro desc, dtHoraRegistro  limit 1;

-- grafico Semana
select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '2023-10%' and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc limit 7;

-- grafico Ano
select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '2023-10%' and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc;

-- graficoIncidentes
select count(idChamadoServidor) as quantidade from chamadoServidor join componente on fkComponente = idComponente
join servidor on fkServidor = idServidor where descricao like "CPU" and apelidoServidor = "Servidor B";

-- intervalo 
SELECT DATE(dtHoraRegistro) AS dia, round(AVG(valorRegistro),2) AS valor FROM registro
  WHERE dtHoraRegistro BETWEEN '2023-01-01' AND '2023-12-31' and tipoMedida = "°C" 
  and fkComponente = (select idComponente from componente where fkServidor = 8)
  GROUP BY DATE(dtHoraRegistro) order by dia;

-- qtd Chamado e o mes
select sum(idChamadoServidor) as quantidade, Month(dtHoraChamado) as mes from chamadoServidor 
join componente on fkComponente = idComponente
join servidor on fkServidor = idServidor where descricao like "CPU" and apelidoServidor = "Servidor B"
group by Month(dtHoraChamado) order by mes;	


-- Gráfico Hora    
    
select valorRegistro, dtHoraRegistro,tipoComponente from 
registro join componente on fkComponente = idComponente 
where tipoMedida = '°C' and  fkServidor = 8 order by dtHoraRegistro desc ;

-- Quantidade total de chamados
select count(idChamadoServidor) from chamadoServidor;
    
    
select * from registro;    

-- Insert dash temperatura -------

(50, '°C','Temperatura do processador', '2023-10-09 10:00:00', 1),  -- CPU
(70, '°C','Temperatura do processador', '2023-10-09 10:01:00', 1),  -- CPU
(70, '°C','Temperatura do processador', '2023-10-09 10:02:00', 1),  -- CPU
(75, '°C','Temperatura do processador', '2023-10-09 10:04:00', 1),  -- CPU
(98, '°C','Temperatura do processador', '2023-10-09 10:03:00', 1),  -- CPU
(100, '°C','Temperatura do processador', '2023-10-09 10:06:00', 1),  -- CPU
(100, '°C','Temperatura do processador', '2023-10-09 10:06:00', 1),  -- CPU
(100, '°C','Temperatura do processador', '2023-10-10 10:08:00', 1),  -- CPU
(101, '°C','Temperatura do processador', '2023-10-11 10:08:00', 1),  -- CPU
(134, '°C','Temperatura do processador', '2023-10-13 10:08:00', 1),  -- CPU
(197, '°C','Temperatura do processador', '2023-10-14 10:08:00', 1),  -- CPU
(20, '°C','Temperatura do processador', '2023-10-15 10:08:00', 1),  -- CPU
(60, '°C','Temperatura do processador', '2023-10-16 10:08:00', 1),  -- CPU
(56, '°C','Temperatura do processador', '2023-10-17 10:08:00', 1),  -- CPU
(46, '°C','Temperatura do processador', '2023-10-18 10:08:00', 1),  -- CPU
(48, '°C','Temperatura do processador', '2023-10-19 10:08:00', 1),  -- CPU
(87, '°C','Temperatura do processador', '2023-10-20 10:08:00', 1),  -- CPU
(100, '°C','Temperatura do processador', '2023-10-12 10:08:00', 1),  -- CPU
(50, '°C','Temperatura do processador', '2023-10-09 10:00:00', 2),  -- CPU
(90, '°C','Temperatura do processador', '2023-11-09 10:01:00', 2),  -- CPU
(80, '°C','Temperatura do processador', '2023-12-09 10:02:00', 2),  -- CPU
(80, '°C','Temperatura do processador', '2023-12-09 10:04:00', 2),  -- CPU
(50, '°C','Temperatura do processador', '2023-10-09 10:00:00', 3),  -- CPU
(90, '°C','Temperatura do processador', '2023-11-09 10:01:00', 3),  -- CPU
(80, '°C','Temperatura do processador', '2023-12-09 10:02:00', 3),  -- CPU
(80, '°C','Temperatura do processador', '2023-12-09 10:03:00', 3),  -- CPU
(60, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2),
(70, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(75, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(88, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(57, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(10, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(65, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(98, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(57, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(98, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(68, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(98, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(79, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(47, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(30, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(76, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(50.9, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(30.5, '°C','Temperatura do processador',"2023-11-12 10:00:00", 2 ),
(20.7, '°C','Temperatura do processador',"2023-10-12 11:00:00", 2 ),
(78.43, '°C','Temperatura do processador',"2023-10-12 11:00:00", 2 ),
(66.85, '°C','Temperatura do processador',"2023-10-12 11:00:00", 2 ),
(34.9, '°C','Temperatura do processador',"2023-10-12 11:00:00", 2 ),
(100, '°C','Temperatura do processador',"2023-10-12 11:00:00", 2 ),
(30, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(87, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(99, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(20.5, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(30,'°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(70.7, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(90, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(20.5, '°C','Temperatura do processador',"2023-09-12 11:00:00", 2 ),
(60,'°C','Temperatura do processador',"2023-08-12 11:00:00", 2 ),
(89, '°C','Temperatura do processador',"2023-08-12 11:00:00", 2 );


