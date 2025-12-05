-- Criando banco de dados
CREATE DATABASE copa_mundo;

USE copa_mundo;

-- Criando a tabale 'selecoes' com 3 colunas
CREATE TABLE selecoes(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,	-- ID único que aumenta automaticamente
    selecao VARCHAR(100) NOT NULL,	-- Nome da seleção, texto até 100 caracteres
    grupo CHAR(1) NOT NULL	-- Grupo da seleção, apenas 1 letra(A,B,C)
);

-- Inserindo Dados ao BD
INSERT INTO selecoes(selecao,grupo) VALUES
	('França','A'),
    ('Brasil','B'),
    ('Argentina','C'),
    ('Nigéria','D'),
    ('Nova Zelândia','E'),
    ('Japão','F');

SELECT * FROM selecoes;

DROP TABLE selecoes;