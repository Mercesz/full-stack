import express from 'express';
import conexao from '../infra/conexao.js'

const app = express();

// Rota principal
app.get('/', (req, res) => {
    res.send("Ola Node.JS");
});

// Rota de cadastro
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET?;';

    conexao.query(sql, selecao => {
        res.json({ mensagem: "Cadastrado com sucesso!" });
    });
});

// Rota de Delete
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'delete from selecoes where id=?';

    conexao.query(sql, id => {
        res.json({ mensagem: "Deletando com sucesso!" })
    })
});


export default app;