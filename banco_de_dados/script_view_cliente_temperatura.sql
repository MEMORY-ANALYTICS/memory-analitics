use bd_memoryanalytics;
 
 -- ligando servidor a empresa --
create view servidorFuncEmpresa as select 
	idServidor, apelidoServidor, nomeFunc, nomeEmpresa 
	from servidor join empresa  
		on fkEmpresa = idEmpresa
		join funcionario on funcionario.fkEmpresa = idEmpresa;
        
-- ligando o registro a empresa --         
create view registroEmpresa as 
	select valorRegistro, dtHoraRegistro, unidadeMedida, tipoRecurso, tipoComponente, servidorFuncEmpresa.* 
	from 
	servidorFuncEmpresa join componente on fkServidor = idServidor
    join recurso on recurso.fkComponente = idComponente
    join registro on registro.fkRecurso = idRecurso
    join medidacomponente on registro.fkMedidaComponente = idMedidaComponente;
    
 -- pegar a lista de servidores disponiveis para um determinado funcionario --
 select apelidoServidor from registroEmpresa where nomeFunc = "Maria" group by apelidoServidor; 

-- kpi1 ---

-- kpi2 ---
select avg(valorRegistro), dtHoraRegistro, apelidoServidor, nomeFunc from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor B" and nomeFunc = "Maria"  
	group by dtHoraRegistro;
 
 -- kpi3 -- 
  select valorRegistro, dtHoraRegistro, tipoRecurso from registroEmpresa 
	where valorRegistro = (
		select max(valorRegistro) from registroEmpresa 
		where unidadeMedida = "%" and tipoComponente = "CPU" and apelidoServidor= "Servidor B" order by dtHoraRegistro) limit 1;

-- kpi 4 --

  select valorRegistro, dtHoraRegistro, tipoRecurso from registroEmpresa 
	where valorRegistro = (
		select min(valorRegistro) from registroEmpresa 
		where unidadeMedida = "%" and tipoComponente = "CPU" and apelidoServidor= "Servidor B" order by dtHoraRegistro) limit 1;        
        
    


 
 -- select da dash de temperatura por core na hora ---   
select valorRegistro, dtHoraRegistro, tipoRecurso, apelidoServidor, nomeFunc from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor B" and nomeFunc = "Maria"  
	order by tipoRecurso and dtHoraRegistro;
    



	
    
-- relatorio completo -- 
	
select * from chamadoservidor;


alter table chamadoservidor add column descricao varchar(45); 


-- Quantidade de chamados especifico --
select count(idChamadoServidor) from chamadoservidor where descricao like "%Core 1%";

-- Quantidade total de chamados
select count(idChamadoServidor) from chamadoservidor;

-- chamados e servidor --
select tipoRecurso, apelidoServidor, idServidor from registroempresa 
	where unidadeMedida = "%" and tipoComponente = "CPU" and nomeFunc = "Maria"
    ;
    
        