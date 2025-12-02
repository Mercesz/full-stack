import express from 'express';
const app = express();

export default app;

app.use(express.json());

// Mock 
const cadastros = [
    {
        id: 1,
        nome: "Fernanda Silva",
        telefone: "11987654321",
        cpf: "123.456.789-00",
        email: "fernanda@gmail.com",
        idade: 28,
        endereco: "Rua das Flores, 123"
    },
    {
        id: 2,
        nome: "Caio Oliveira",
        telefone: "11922223333",
        cpf: "987.654.321-11",
        email: "caio@gmail.com",
        idade: 32,
        endereco: "Avenida Brasil, 450"
    },
    {
        id: 3,
        nome: "Pedro Almeida",
        telefone: "21999998888",
        cpf: "321.654.987-55",
        email: "pedro@hotmail.com",
        idade: 45,
        endereco: "Rua Central, 999"
    }
];

//Funções Auxiliares
function buscarCadastroPorId(id) {
    return cadastros.filter((cadastro) => cadastro.id == id);
}

function buscarIdCadastro(id) {
    return cadastros.findIndex((cadastro) => cadastro.id == id);
}

app.get('/', (req, res) => {
    res.send("Ola Node.JS");
});

// Listando todos os usuários
app.get('/listaCadastros', (req, res) => {
    res.send(cadastros);
});

// Listando o usuário cadastrado conforme 
app.get('/listaCadastros/:id', (req, res) => {
    let index = req.params.id

    console.log(`Este é o tipo do id ${typeof index}`)

    res.json(buscarCadastroPorId(index));
});

//Deletando usuário conforme id
app.delete('/listaCadastros/:id', (req, res) => {
    let id = req.params.id;
    let index = buscarIdCadastro(id);

    if (index === -1) {
        return res.status(404).send(`O usuário do ID:${id} não foi encontrado!`);
    }

    cadastros.splice(index, 1);

    res.send(`O usuário do ID:${id} foi excluído com sucesso! `);
});

// Alterando info dos usuários
app.put('/listaCadastros/:id', (req, res) => {
    let index = buscarIdCadastro(req.params.id);

    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;

    res.send(`Usuário alterado com sucesso!`)
    res.json(cadastros);
});

// Cadastrando usuário
app.post('/listaCadastros', (req, res) => {

    cadastros.push(req.body);
    if (id == "" || nome == "" || telefone == "" || cpf == "" || email == "" || idade == "" || endereco == "") {
        return res.send(`Dados incompletos, por favor preencha todos os campos ❌`)
    };

    res.status(201).send('Usuário cadastrado com sucesso🎉');
});

