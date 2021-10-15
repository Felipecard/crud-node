const express = require('express');

const server = express();

server.use(express.json());

const filmes = ['Matrix', 'Senhor dos Anéis', 'Harry Potter']

// Retorna um Filme
server.get('/filmes/:index', (req, res) => {
    const { index } = req.params

    return res.json(filmes[index]);
});


// Retornar todos os Filmes
server.get('/filmes', (req, res) => {
    return res.json(filmes);
});


// Criar um novo Filme
server.post('/filmes', (req, res) => {
    const { name } = req.body;
    filmes.push(name);

    return res.json(filmes);
});

// Atualizar um Filme
server.put('/filmes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes[index] = name;

    return res.json(filmes);
});

// Deletar um Filme
server.delete('/filmes/:index', (req, res) => {
    const { index } = req.params;

    filmes.splice(index, 1);
    return res.json({ message: "O curso foi deletado" });
});


server.listen(3000);