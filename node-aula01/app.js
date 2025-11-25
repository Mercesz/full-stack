const express = require("express");
const app = express();
const port = 3000;

//Varioável com os dados produtos
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 }
];

//Criando uma função
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.JS');
});

// Rota produtos
app.get('/produtos', (req, res) => {
    res.send(produtos);
});

//Variável de times
const times = [
    { id: 1, nome: "Santos", ano: 1912 },
    { id: 2, nome: "São Paulo", ano: 1900 },
    { id: 3, nome: "Mirasol", ano: 1910 }
];

//Rota Home
app.get('/home', (req, res) => {
    // console.log("Este é o dirname", __dirname)
    res.sendFile(__dirname + '/public/home.html');
});

// Rota Times
app.get('/times', (req, res) => {
    res.send(times);
})

// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
