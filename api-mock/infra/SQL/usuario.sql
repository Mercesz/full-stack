-- Criando a tabela de USUÁRIO
CREATE TABLE usuario(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL
);

-- Inserindo Dados
INSERT INTO usuario(nome, email) values
	("Davi Jones",'davijones@gmail.com'),
    ("Zezequiel Merces",'zeze@gmail.com'),
    ("Popeto Silva",'popeto@gmail.com');
    
-- Visualizando as info do BD
SELECT * FROM usuario;