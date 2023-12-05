
-- grafico cpu hora
select valorRegistro, dtHoraRegistro,tipoComponente from 
  registro join componente on fkComponente = idComponente 
  where tipoMedida = '°C' and  fkServidor = 8 order by dtHoraRegistro desc ;
  
-- grafico cpu semana  
  select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = '°C' and date(dtHoraRegistro) like '2023-12' 
  and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc limit 7;
    
 -- grafico cpu mes 
 select round(avg(valorRegistro),2) as valorMedia, date(dtHoraRegistro) as dia from registro 
	where tipoMedida = "°C" and date(dtHoraRegistro) like '2023-10'
   and fkComponente = (select idComponente from componente where fkServidor = 8)
    group by date(dtHoraRegistro) order by date(dtHoraRegistro) desc;
    
-- filtro data 
SELECT DATE(dtHoraRegistro) AS dia, round(AVG(valorRegistro),2) AS valor FROM registro
  WHERE dtHoraRegistro BETWEEN '2023-01-01' AND '2023-12-31' and tipoMedida = '°C' 
  and fkComponente = (select idComponente from componente where fkServidor = 8)
  GROUP BY DATE(dtHoraRegistro) order by dia;
    
-- grafico incidentes 
select sum(idChamadoServidor) as quantidade, Month(dtHoraChamado) as mes from 
  chamadoServidor join componente on fkComponente = idComponente
  join servidor on fkServidor = idServidor where descricao like 'CPU' and apelidoServidor = 'Servidor B'
  group by Month(dtHoraChamado) order by mes desc;
 
 -- medTemp
 select round(avg(valorRegistro),2) as mediaTemperatura from registro join componente on fkComponente = idComponente 
        where tipoMedida = '°C' and dtHoraRegistro like '2023-12-05' and fkServidor = 8 order by valorRegistro desc  limit 1;
  
  
 -- TemMax
 select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '${dataHora}%' and fkServidor = 8 order by valorRegistro desc limit 1;


-- TempMin 

        select valorRegistro, dtHoraRegistro, tipoComponente, fkServidor from registro join componente on fkComponente = idComponente 
	      where tipoMedida = '°C' and dtHoraRegistro like '2023-10-09' and fkServidor = 8 order by valorRegistro;
          
          
  select apelidoServidor,macAdress from servidor join empresa on fkEmpresa = idEmpresa 
        where idEmpresa = (select idEmpresa from empresa join  funcionario on fkEmpresa = idEmpresa where emailFunc = 'ana.fonseca@email.com');        
  
  
  
  7899874d1022