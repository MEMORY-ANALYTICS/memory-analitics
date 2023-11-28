use bd_memoryanalytics;
 
 -- ligando servidor a empresa --
create view servidorFuncEmpresa as select 
	idServidor, apelidoServidor, nomeFunc, emailFunc, nomeEmpresa 
	from servidor join empresa  
		on fkEmpresa = idEmpresa
		join funcionario on funcionario.fkEmpresa = idEmpresa;
        
select * from servidorFuncEmpresa;        
-- ligando o registro a empresa --         
create view registroEmpresa as 
	select valorRegistro, dtHoraRegistro, unidadeMedida, tipoRecurso, tipoComponente, servidorFuncEmpresa.* 
	from 
	servidorFuncEmpresa join componente on fkServidor = idServidor
    join recurso on recurso.fkComponente = idComponente
    join registro on registro.fkRecurso = idRecurso
    join medidaComponente on registro.fkMedidaComponente = idMedidaComponente;
    
    
select * from recurso; #nada
select * from registro; #nada
select * from medidaComponente;

    
  select * from registroEmpresa;  
    
 -- pegar a lista de servidores disponiveis para um determinado funcionario --
 select apelidoServidor from registroEmpresa where emailFunc = "joao@email.com" group by apelidoServidor; 

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
    
-- select no local do servidor --
select * from servidor;
	
    
-- relatorio completo -- 
	
select * from chamadoServidor;


alter table chamadoServidor add column descricao varchar(45); 


-- Quantidade de chamados especifico --
select count(idChamadoServidor) from chamadoServidor where descricao like "%Core 1%";

-- Quantidade total de chamados
select count(idChamadoServidor) from chamadoServidor;

-- chamados e servidor --
select tipoRecurso, apelidoServidor, idServidor from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU" and nomeFunc = "Maria"
    ;
    
-- Componente, tipoRecurso, alertasEmitido(mensal), quantidade de Registros (mensal),  Percentural de alertas, Mes, Servidor
select * from servidor 
	join chamadoServidor on fkServidor = idServidor
    join empresa on servidor.fkEmpresa = idEmpresa 
    join funcionario on idEmpresa = funcionario.fkEmpresa;
    



select * from empresa;
select * from funcionario;
select * from servidor;
select * from chamadoServidor;
select * from componente;
select * from recurso;
select * from registro;
select * from medidaComponente;

select * from recurso join component;

insert into recurso(tipoRecurso,fkComponente) values ("Core 1", 17);
insert into recurso(tipoRecurso,fkComponente) values ("Core 2", 17);
insert into recurso(tipoRecurso,fkComponente) values ("Core 3", 17);
insert into recurso(tipoRecurso,fkComponente) values ("Outro Recurso", 5);




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