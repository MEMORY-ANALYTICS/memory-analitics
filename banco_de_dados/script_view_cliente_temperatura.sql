use bd_memoryanalytics;
 
 -- ligando servidor a empresa --
create view servidorEmpresa as
select 
	idServidor, SistemaOperacionalServidor, apelidoServidor, ipServidor, numeroSerieServidor,
    idEmpresa, nomeEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa, 
    idFuncionario, nomeFunc, emailFunc, telefoneFunc, permissao, fkCargo, fkSupervisor
	from servidor join empresa  
	on servidor.fkEmpresa = idEmpresa
	join funcionario on funcionario.fkEmpresa = idEmpresa;



-- ligando o registro a empresa --         
create view registroEmpresa as 	
    select *
	from 
	servidorEmpresa join componente on fkServidor = idServidor
    join recurso on recurso.fkComponente = idComponente
    join registro on registro.fkRecurso = idRecurso
    join medidaComponente on registro.fkMedidaComponente = idMedidaComponente;

select * from registroEmpresa;
 
 -- pegar a lista de servidores disponiveis para um determinado funcionario --
 select apelidoServidor from registroEmpresa where emailFunc = "maria@email.com" group by apelidoServidor; 


select email from registroEmpresa;
-- kpi1 ---

-- kpi2 ---
select avg(valorRegistro), dtHoraRegistro, apelidoServidor, emailFunc from registroEmpresa 
	where unidadeMedida = "%" and tipoComponente = "CPU"  and apelidoServidor = "Servidor D" 
    and emailFunc = "maria@email.com"  group by dtHoraRegistro limit 2;
 
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
	
select * from chamadoServidor;

-- Quantidade de chamados especifico de um determinado servidor --
select count(idChamadoServidor) from chamadoServidor join registroEmpresa on fkRecurso = idRecurso 
	where descricao like "%Core 1%" and apelidoServidor = "Servidor B";

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


