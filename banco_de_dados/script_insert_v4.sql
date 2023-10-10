use br_MemoryAnalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Tabela Empresa
insert into empresa values
(null, 'Uceae', '01235794000012', 'uceae.contatar@gmail.com', '(11)91234-5763'),
(null, 'Memory Analytics', '32564433000012', 'memory_analytics@gmail.com', '(11)97763-5425');

-- Tabela Endereço
insert into endereco values
(null, '05425000', 'Rua Eugênio de Medeiros', 305, 'São Paulo', 'SP', '11º andar', 1),
(null, '04538-133', 'Av. Brig. Faria Lima', '3477', 'São Paulo', 'SP', null, 2);
-- Tabela Cargo
insert into cargo values
(null, 'Analista de Hardware'),
(null, 'Analista de Sistema'),
(null, 'Gerente');
-- adicionar opção outro cargo na tela, dar opção para enviar um pedido para cadastrar um cargo novo.

-- Tabela Funcionário
insert into funcionario values
(null, 'João Miguel Almeida', 'joao@gmail.com','11983220192', 1, 1, 3, null),
(null, 'Marcos Araújo', 'marcos@gmail.com','11933340099', 2, 1, 1, 1),
(null, 'Solange Medeiros', 'solange@gmail.com','11983228776', 3, 1, 2, 1),
(null, 'Luan Santos', 'luan@gmail.com','11923280192', 1, 2, 3, null),
(null, 'Maria da Penha', 'maria@gmail.com','11983522190', 2, 2, 2, 4),
(null, 'Larissa Pinheiro de Brito', 'larissa@gmail.com','11912230112', 2, 2, 1, 4);

-- Tabela Login
insert into login values
(null,'joao@gmail.com','joao123',1),
(null,'marcos@gmail.com','marcos123',2),
(null,'solange@gmail.com','solange123',3),
(null,'luan@gmail.com','luan123',4),
(null,'maria@gmail.com','maria123',5),
(null,'larissa@gmail.com','larissa123',6);

--    Tabela Servidores
insert into servidores values
(null, "Linux", "Setor F6", "192.158.1.38","6007041",1),
(null, "Windows", "Setor G4", "192.157.1.38","3008041", 1),
(null, "Linux", "Setor T8", "192.156.1.38","6347056", 2),
(null, "Unix", "Setor H3", "192.155.1.38","6901231",2),
(null, "Windows", "Setor de teste", "999.999.9.99", "9999999", 2);


-- Tabela Componentes
-- insert into Componente values
-- (null, 'DISCO', 'C://'),
-- (null, 'MEMORIA', null),
-- (null, 'CPU', 'CPU 1'),
-- (null, 'REDE', null);

-- Tabela Medida Componente
-- Tabela Nome Componente
-- rever atributos dessa tabela
insert into nomeComponente values
(null, 'Disco'),
(null, 'Memória RAM'),
(null, 'CPU'),
(null, 'Rede');

insert into medidaComponente values
(null, 'Temperatura', '°C', 'Celsius'),
(null, 'Uso', '%', 'Porcentagem'),
(null, 'Frequencia', 'Hz', 'Hertz'),
(null, 'Capacidade', 'Gb', 'Giga Byte'),
(null, 'Latência', 'B', 'Byte'),
(null, 'Unidade', null, null),
(null, 'Tempo', 's', 'Segundos'),
(null, 'Frequencia', 'GHz', 'Giga Hertz');

-- Tabela Métrica Componente
insert into metricaComponente values
(null, 20, 25); -- Graus Celsius

-- Tabela Nome Componente
-- rever atributos dessa tabela
insert into nomeComponente values
(null, 'Disco'),
(null, 'Memória RAM'),
(null, 'CPU'),
(null, 'Placa de Rede');

-- Tabela Modelo Componente
insert into modeloComponente values
(null, 'Intel', 'Xeon E5-2697 V2', '?'),
(null, 'AMD', 'Ryzen 9 5900X', '?'),
(null, 'Dell', '32Go - 2RX4 DDR4 RDIMM', '?');
-- Onde ver o número da geração dos modelos
-- placa de rede fabricantes e modelos?
   
-- insert into MedidaComponente values
-- (null, 5 , 1 , 2),
-- (null, 5 , 2 , 2),
-- (null, 5 , 3 , 2),
-- (null, 5 , 4 , 6);

-- Tabela SubComponente
-- insert into subComponente values
-- (),

-- Tabela Componente Completo

-- Tabela Componente

-- Tabela Registro
insert into registro values
(null, 23, now(), 1),
(null, 67, now(), 2),
(null, 30, now(), 3),
(null, 12, now(), 4);


-- -=-=-=-=-=-=-=-=-=-=-= SELECTS -=-=-=-=-=-=-=-=-=-=-=

-- select * from Empresa;
-- select * from Cargo;
-- select * from Funcionario;
-- select * from Login;
-- select * from Servidores;
-- select * from Componente;
-- select * from Medida;
-- select * from MedidaComponente;
-- select * from Registro;
