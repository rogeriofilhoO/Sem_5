//Chamar as dependencias

const express = require('express');
const pool = require('./db');
const cors = require ('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors()); //Use cors para permitir requisições de outros servidores
app.use(express.json());

// Servir arquivos estáticos na pasta raiz
app.use(express.static(path.join(__dirname)));

// Servir o arquivo estático index.html na raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Rota para buscar dados do banco de dados

app.get('/api/veiculos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM veiculo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status (500),json({ message: 'Erro ao buscar dados'});
    }
});

// Iniciar o servidor

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});