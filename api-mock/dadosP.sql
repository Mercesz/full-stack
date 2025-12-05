-- Criando tabela de dados pessoais
CREATE TABLE dadosP(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    idade INT,
    cpf VARCHAR(120),
    endereco VARCHAR(120)
);

-- Inserindo os dados 
INSERT INTO dadosP(nome, email, idade,cpf, endereco) values
	("Davi Jones","davijones@gmail.com",25,"45678912322","Rua Ouros"),
    ("Zezequiel Merces","zeze@gmail.com",21,"95856874220","Rua dos Lindos"),
    ("Popeto Silva","popeto@gmail.com",36,"51632178920","Rua do Popeto");

-- Visualizando os dados
SELECT * FROM dadosP;

DROP TABLE dadosP;