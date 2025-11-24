const express = require("express");
const app = express();
const port = 3000;

//Criando uma função
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.JS');
});

// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
