use bd_MemoryAnalytics;
-- -=-=-=-=-=-=-=-=-=-=-= JOINS -=-=-=-=-=-=-=-=-=-=-=

-- Todos os funcionários, suas respectivas empresas e informações de login
select
nomeFunc "Nome",
    emailFunc "Email",
    nomeEmpresa "Empresa",
    login "Login",
    senha "Senha",
    nomeCargo "Cargo"
from Empresa
join Funcionario on fkEmpresa = idEmpresa
    join Cargo on fkCargo = idCargo
    join Login on fkFunc = idFunc;

-- Todos os servidores, seus registros, componentes monitorados e unidades de medida correspondentes
Select
localServer 'Servidores',
    ipServer 'Ip do servidor',
    nomeComponente 'Nome componente',
    valorRegistro 'Valor',
    simboloMedida 'Simbolo',
    dtHoraRegistro 'Hora e data'
from MedidaComponente as mc
join Servidores on mc.fkServidor = idServer
    join Componente on mc.fkComponente = idComponente
    join Registro on fkMedidaComponente = idMedidaComponente
    join Medida on mc.fkMedida = idMedida;
   
   
-- -=-=-=-=-=-=-=-=-=-=-= Procedures -=-=-=-=-=-=-=-=-=-=-=

DELIMITER $$
create procedure Cadastro
(
nomeEmpresa varchar(45),
    cnpj char(18),
    emailContato varchar(80),
    telContato varchar(15),
    nomeAdm varchar(80),
    senha varchar(16))
begin
insert into Empresa values (null, nomeEmpresa, cnpj);
    insert into Funcionario values (null, nomeAdm, emailContato, telContato, 3, (select idEmpresa from Empresa where cnpjEmpresa = cnpj));
    insert into Login values (null, emailContato, senha,
(select idFunc from Funcionario where emailFunc = emailContato and telefoneFunc = telContato and nomeFunc = nomeAdm));
end $$

select * from Registro;
select * from MedidaComponente;

create procedure RegistroCPU
(
tempoOcioso varchar(45),
    tempoUsoKernel varchar(45),
    interrupcoesCpu varchar(45),
    frequenciaCpuAtual varchar(45))
begin
   insert into MedidaComponente values (null, 5 , 3 , 7);
   insert into Registro values (null, now(), tempoOcioso, null);
   
   insert into Registro values (null, now(), tempoUsoKernel, null);
   insert into MedidaComponente values (null, 5 , 3 , 7);
   
   insert into Registro values (null, now(), interrupcoesCpu, null);
   insert into MedidaComponente values (null, 5 , 3 , 7);
   
   insert into Registro values (null, now(), frequenciaCpuAtual, null);
   insert into MedidaComponente values (null, 5 , 3 , 8);

end $$

create procedure RegistroMemoria
(
memoriaUsada varchar(45),
memoriaLivre varchar(45),
memoriaDisponivel varchar(45),
memoriaUsoPorcentagem varchar(45)
)
begin
insert into Registro values (null, now(), memoriaUsada, 'GB');
insert into Registro values (null, now(), memoriaLivre, 'GB');
insert into Registro values (null, now(), memoriaDisponivel, 'GB');
insert into Registro values (null, now(), memoriaDisponivel, 'GB');
end $$


create procedure RegistroDisco
(
usoTotalDisco varchar(45),
discoUsado varchar(45),
discoLivre varchar(45),
    porcentDisco varchar(45)    
)
begin
insert into Registro values (null, now(), usoTotalDisco, 'GB');
insert into Registro values (null, now(), discoUsado, 'GB');
insert into Registro values (null, now(), discoLivre, 'GB');
insert into Registro values (null, now(), porcentDisco, '%');
end $$


create procedure RegistroRede
(
bytesEnviados varchar(45),
bytesRecebidos varchar(45),
qtdErrosEntrada varchar(45),
    qtdErrosSaida varchar(45)    
)
begin
insert into Registro values (null, now(), bytesEnviados, 'MB');
insert into Registro values (null, now(), bytesRecebidos, 'MB');
insert into Registro values (null, now(), qtdErrosEntrada, null);
insert into Registro values (null, now(), qtdErrosSaida, null);
end $$

create procedure RegistroTemperatura
(
temperaturaCpuLabel varchar(45),
temperaturaCpuAtual varchar(45)
)
begin
insert into Registro values (null, now(), temperaturaCpuLabel, '°C');
insert into Registro values (null, now(), temperaturaCpuAtual, '°C');
end $$


create procedure vizualizacao_dados
(
cpu_uso bigint,
disco_uso bigint,
ram_uso  bigint
)
begin
insert into visualizacao_dados values(null, 5, cpu_uso, disco_uso, ram_uso, '%', now());
end $$

DELIMITER ;
   
    -- -=-=-=-=-=-=-=-=-=-=-= Views -=-=-=-=-=-=-=-=-=-=-=
/*
SELECT
dtHoraRegistro as "Hora do Registro",
  max(CASE WHEN nomeComponente = 'CPU' THEN valorRegistro ELSE null END) AS "CPU",
  max(CASE WHEN nomeComponente = 'Disco' THEN valorRegistro ELSE null END) AS "Disco",
  max(CASE WHEN nomeComponente = 'Rede' THEN valorRegistro ELSE null END) AS 'Rede',
  max(CASE WHEN nomeComponente = 'Memoria' THEN valorRegistro ELSE null END) AS 'Memoria'
  -- Repita o padrão para cada ano que você deseja incluir
FROM medida
join Registro on medida.fkRegistro = idRegistro
join Componente on medida.fkRegistro = idComponente
GROUP BY dtHoraRegistro;
*/

select * from MedidaComponente;
select * from Servidores;
select * from Componente;
select * from Medida;
select * from Registro;

create view TabelaAnalitica as
select
fkServidor Servidor,
    nomeComponente Componente,
    nomeMedida Medida,
    valorRegistro Valor,
    dtHoraRegistro Horario
from MedidaComponente mc
	join Servidores s on s.idServer = mc.fkServidor
    join Componente c on c.idComponente = mc.fkComponente
    join Medida m on m.idMedida = mc.fkMedida
    join Registro r on r.fkMedidaComponente = mc.idMedidaComponente;
   
select * from TabelaAnalitica where Servidor = 5;

SET @sql = NULL; -- Criando uma variável para armazenar o comando

SELECT
  GROUP_CONCAT(DISTINCT
    CONCAT(
      "max(case when Componente = '",Componente,"' and Medida = '",Medida,"' then Valor end) ",Medida,Componente
    )
  )
INTO @sql

FROM
  TabelaAnalitica; -- Aqui vem o nome da sua view!
 
select @sql;

SET @sql = CONCAT('SELECT Servidor, Horario, ', @sql, '
                 
FROM TabelaAnalitica
                   
GROUP BY Servidor, Horario');

select @sql;

PREPARE stmt FROM @sql;

EXECUTE stmt;

DEALLOCATE PREPARE stmt;