-- Criando tabela de dados pessoais
CREATE TABLE dadosP(
	id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    idade INT,
    endereco VARCHAR(120),
);
