use br_MemoryAnalytics;

-- -=-=-=-=-=-=-=-=-=-=-= Inserindo Dados -=-=-=-=-=-=-=-=-=-=-=

-- Tabela Empresa
insert into Empresa values
(null, 'Uceae', '01235794000012'),
(null, 'Memory Analytics', '32564433000012');

-- Tabela Cargo
insert into Cargo values
(null, 'Analista de Hardware'),
(null, 'Analista de Sistema'),
(null, 'Gerente');

-- Tabela Funcionário
insert into Funcionario values
(null, 'João Miguel Almeida', 'joao@gmail.com','11983220192', 3, 1),
(null, 'Marcos Araújo', 'marcos@gmail.com','11933340099', 2, 1),
(null, 'Solange Medeiros', 'solange@gmail.com','11983228776', 1, 1),
(null, 'Luan Santos', 'luan@gmail.com','11923280192', 3, 2),
(null, 'Maria da Penha', 'maria@gmail.com','11983522190', 2, 2),
(null, 'Larissa Pinheiro de Brito', 'larissa@gmail.com','11912230112', 1, 2);

-- Tabela Login
insert into Login values
(null,'joao@gmail.com','joao123',1),
(null,'marcos@gmail.com','marcos123',2),
(null,'solange@gmail.com','solange123',3),
(null,'luan@gmail.com','luan123',4),
(null,'maria@gmail.com','maria123',5),
(null,'larissa@gmail.com','larissa123',6);

--    Tabela Servidores
insert into Servidores values
(null, "Setor F6", "192.158.1.38","6007041","Linux",1),
(null, "Setor G4", "192.157.1.38","3008041","Windows",1),
(null, "Setor T8", "192.156.1.38","6347056","Linux",2),
(null, "Setor H3", "192.155.1.38","6901231","Unix",2),
(null, "Setor de teste", "999.999.9.99", "9999999", "Windows", 2);


-- Tabela Componentes
insert into Componente values
(null, 'DISCO', 'C://'),
(null, 'MEMORIA', null),
(null, 'CPU', 'CPU 1'),
(null, 'REDE', null);

insert into Medida values
(null, 'Temperatura', 'Celsius','°C'),
(null, 'Uso', 'Porcentagem','%'),
(null, 'Frequencia', 'Hertz','Hz'),
(null, 'Capacidade', 'Giga Byte','Gb'),
(null, 'Latência', 'Byte','B'),
(null, 'Unidade', null, null),
(null, 'Tempo', 'Segundos', 's'),
(null, 'Frequencia', 'Giga Hertz','GHz');
   
insert into MedidaComponente values
(null, 5 , 1 , 2),
(null, 5 , 2 , 2),
(null, 5 , 3 , 2),
(null, 5 , 4 , 6);

-- Tabela Registro
insert into Registro values
(null, now(), 23, 1),
(null, now(), 67, 2),
(null, now(), 30, 3),
(null, now(), 12, 4);


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
