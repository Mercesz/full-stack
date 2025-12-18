-- Criando banco de dados
create database	sistema_produtos;

use sistema_produtos;

 -- Cria a tabela produtos com algumas colunas básicas
 create table produtos(
	id int auto_increment primary key, -- Id unico
    nome varchar(100) not null, -- Nome  Produto
    email varchar(120) not null , -- Email (Exemplo Genérico)
	telefone varchar(20), -- Telefone
    cpf varchar(14), -- CPF
    endereco varchar(150) -- Endereço simples
 );
 
 -- Inserindo dados na base de dados
 INSERT INTO produtos (nome,email, telefone,cpf,endereco)value
	('Eduardo Ramos','edu.ramos@produtos.com', '12545452-2525','54545454782178','Rua Outros'),
    ('Juliana Clara', 'juliana@produtos.com','214531654561245','4537456486456','Rua Outros');
    
-- Selecionando os IDs dos produtos
SELECT * FROM produtos WHERE id = 2;
SELECT * FROM produtos WHERE id = 1;

-- Puxado toda a tabela de produtos
SELECT * FROM produtos;

-- Deleta o registro onde o id = 1
delete from produtos where id =1;

-- Inserindo mais um registro
INSERT INTO produtos (nome, email, telefone, cpf, endereco) values
	('Zeze campos','zezecampos@produtos.com','4456897786','7456123456789','Rua Orutos');

delete from produtos where id = 8;

-- Atualiza o nome onde o ID é igual 4
UPDATE produtos 
SET nome = "Zeze campos Dev" WHERE id = 4;

SELECT * FROM produtos;

