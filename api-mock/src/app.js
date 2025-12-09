import express from 'express';
import conexao from '../infra/conexao.js'

const app = express();

// Rota Principal
app.get('/', (req, res) => {
    res.send("Bem Vindo a Copa do Mundo!");
});

// Rota Lista todas as SELECOES
app.get('/selecoes', (req, res) => {
    // Selecionando todos os times e seus grupos no SQL
    const sql = 'SELECT * FROM selecoes';

    // Executa a query usando a conexão (mysql2). Recebe um callback com erro e resultado.
    conexao.query(sql, (erro, result) => {
        // Se retorna o array corretamente, retorna o status http 200
        res.json(result);
    });
});

// Rota Lista SELECOES por ID
app.get('/selecoes/:id', (req, res) => {
    // Lê o id enviado na URL via req.params
    const id = req.params.id;

    // Query SQL com placeholder para evitar SQL injection.
    const sql = 'SELECT * FROM selecoes WHERE id=?';

    // Executa a query passando os parâmetros em um array (o primeiro ? será substituído por id).
    conexao.query(sql, id, (erro, result) => {
        // Se encontrar, retornamos o primeiro registro (result[0]) com status 200.
        res.json(result[0]);
    });
});

// Rota DELETE por ID
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM selecoes WHERE id = ?';

    conexao.query(sql, id, () => {
        res.json({ menssagem: "Deletando com sucesso!" })
    });
});


export default app;