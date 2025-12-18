
-- Criando um tabela 'Usuários'
create table usuario(
	id int auto_increment primary key,
    nome varchar(120) not null,
    email varchar(130) not null,
    idade varchar(10),
    endereco varchar(200) 
);

INSERT INTO usuario(nome, email, idade, endereco) values
	('Ezequiel Merces', 'ujkodsajklsd@gmail.com', '21','Rua Outros'),
	('Dev Jones', 'dsjklads@gmail.com','25','Rua Ouros'),
    ('Pessoa Dev','hsjkldahsjkdsa@gmail.com','36','Rua ABC'),
    ('Carro', 'Carro@gmail.com','30','Rua Direita'),
	('Silvio Santos','silviosantos@gmail.com','100','Rua SBT'),
    ('Faustão Silva','faustosilva@gmail.com','77','Rua Globo'),
    ('Senna', 'senna@gmail.com','40','Rua S do SENNA'),
    ('Doris','doris@gmail.com', '70', 'Rua Popeto'),    
    ('Juliana', 'julianapopeto@gmail.com', '66', 'Rua popeto'),
    ('Honda', 'honda@gmail.com', '100', 'Rua AAAAA'),
    ('Senai', 'senai@gmail.com', '150', 'Rua Direita');

SELECT * FROM usuario;

