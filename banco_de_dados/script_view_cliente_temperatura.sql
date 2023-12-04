use bd_memoryanalytics;
 

 -- pegar a lista de servidores disponiveis para um determinado funcionario  com base no email--
select apelidoServidor,macAdress from servidor join empresa on fkEmpresa = idEmpresa 
where idEmpresa = (select idEmpresa from empresa join  funcionario on fkEmpresa = idEmpresa where emailFunc = "anafonseca@email.com");


select valorRegistro, dtHoraRegistro, tipoComponente from registroEmpresa 
where tipoComponente like 'Core %' and detalheRegistro = "Celsius" and apelidoServidor = "Servidor A" order by dtHoraRegistro;


select valorRegistro, dtHoraRegistro, tipoComponente 
from registro join componente on fkComponente = idComponente where tipoMedida = '°C' order by valorRegistro, dtHoraRegistro;

select * from registro;

-- kpi1 ---

-- kpi2 ---
select avg(valorRegistro), dtHoraRegistro, apelidoServidor, emailFunc from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor D" 
    and emailFunc = "maria@email.com"  group by dtHoraRegistro limit 2;
 
 -- kpi3 -- 
 
 #create view valorMaximoHora as
 
select valorRegistro, dtHoraRegistro, tipoComponente, idComponente from registroEmpresa 
	where valorRegistro = (
    select max(valorRegistro) from registroEmpresa 
		where tipoMedida = "°C" and apelidoServidor = "Servidor A") order by dtHoraRegistro limit 1 ;

-- KPI 1
-- Quantidade de chamados especifico de um determinado servidor --
select count(idChamadoServidor) from chamadoServidor join componente on fkComponente = idComponente
join servidor on fkServidor = idServidor where descricao like "CPU" and apelidoServidor = "Servidor B";



-- KPI 2
select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and fkServidor = 8 order by valorRegistro desc, dtHoraRegistro  limit 1;



-- KPI 3
select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and dtHoraRegistro like '2023-10-09%' and fkServidor = 8 order by valorRegistro desc  limit 1;

select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C' and fkServidor = 8 order by valorRegistro desc, dtHoraRegistro  limit 1;


select * from chamadoServidor;

select * from componente;


-- grafico Semana
select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '2023-10%' and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc limit 7;

-- grafico Ano
select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '2023-10%' and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc;


SELECT DATE(dtHoraRegistro) AS dia, AVG(valorRegistro) AS valor
FROM registro
WHERE dtHoraRegistro BETWEEN '2023-01-01' AND '2023-12-31' and tipoMedida = "°C" 
and fkComponente = (select idComponente from componente where fkServidor = 8)
GROUP BY DATE(dtHoraRegistro);







-- KPI 4
select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	where tipoMedida = '°C'  and fkServidor = 8 order by valorRegistro, dtHoraRegistro  limit 1;
    
-- Gráfico Hora    
    
select valorRegistro, dtHoraRegistro,tipoComponente from 
registro join componente on fkComponente = idComponente 
where tipoMedida = '°C' and  fkServidor = 8 order by dtHoraRegistro desc ;



  select valorRegistro, dtHoraRegistro, tipoRecurso from registroEmpresa 
	where valorRegistro = (
		select min(valorRegistro) from registroEmpresa 
		where unidadeMedida = "%" and tipoComponente = "CPU" and apelidoServidor= "Servidor B" order by dtHoraRegistro) limit 1;        
        
    

 -- select da dash de temperatura por core na hora ---   
select valorRegistro, dtHoraRegistro, tipoRecurso, apelidoServidor, nomeFunc from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor B" and nomeFunc = "Maria"  
	order by tipoRecurso and dtHoraRegistro;

	
-- relatorio completo -- 
	
select * from chamadoServidor;


-- Quantidade total de chamados
select count(idChamadoServidor) from chamadoServidor;

-- chamados e servidor --
select tipoRecurso, apelidoServidor, (select valorRegistro from registro limit 1) from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU" and nomeFunc = "Maria"
    ;
    
    
-- Componente, tipoRecurso, alertasEmitido(mensal), quantidade de Registros (mensal),  Percentural de alertas, Mes, Servidor
select * from registroEmpresa;
    



select * from empresa;
select * from funcionario;
select * from servidor;
select * from chamadoServidor;
select * from componente;
select * from recurso;
select * from registro;
select * from medidaComponente;

select * from recurso join component;




-- juntando tudo --
select tipoRecurso, tipoComponente, apelidoServidor, nomeFunc, nomeEmpresa 
	from empresa join funcionario on idEmpresa = funcionario.fkEmpresa
    join servidor on idEmpresa = servidor.fkEmpresa
    #join chamadoServidor on servidor.idServidor = fkServidor
    join componente on servidor.idServidor = componente.fkServidor
    join recurso on componente.idComponente = recurso.fkComponente
    where nomeFunc = "Daniel" 
    and apelidoServidor="Servidor C"
    and tipoComponente = "CPU";
    
    
-- Dash Gabriel Branco --
select * from servidor;
select * from registro;

-- kpi 1
select * from servidor where fkEmpresa = 10002;

-- kpi 2 
select round(avg(valorRegistro),2), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro  ;

-- kpi 3
select max(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;

-- kpi 4
select min(valorRegistro), dtHoraRegistro from registro where dtHoraRegistro like '2023-10-09%' group by dtHoraRegistro;


select * from registroEmpresa;

-- Insert dash temperatura -------

select * from login;
select * from funcionario;


