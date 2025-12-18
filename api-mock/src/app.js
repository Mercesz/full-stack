import express from 'express';
import selecoesRoutes from '../routes/selecoes.routes.js';

const app = express();


// Indicar para express ler o body com json
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});


// Usando a rotas de seleções
app.use(selecoesRoutes);


// Rota 404
app.use((req, res) => {
    res.status(404).json({ mensagem: "Rota não encontrada" });
});

export default app;