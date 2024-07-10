//Chamar as dependencias

const express = require('express');
const pool = require('./db');
const cors = require ('cors');
const app = express();
const port = 3000;

app.use(cors()); //Use cors para permitir requisições de outros servidores

//Rota para buscar dados do banco de dados

app.get('/api/data', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM veiculo');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status (500),json({ message: 'Erro ao buscar dados'});
    }
});

// Iniciar o servidor

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});