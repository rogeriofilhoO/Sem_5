const express = require('express');
const pool = require('./db');
const cors = require('cors');
const path = require('path');  // Adicione esta linha
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos na pasta raiz
app.use(express.static(path.join(__dirname)));

// Servir o arquivo estático index.html na raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para buscar todos os veículos
app.get('/api/veiculos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM veiculo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados do banco de dados');
    }
});

// Rota para buscar um veículo por ID
app.get('/api/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM veiculo WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Veículo não encontrado');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados do banco de dados');
    }
});

// Rota para adicionar um novo veículo
app.post('/api/veiculos', async (req, res) => {
    const { placa, marca, modelo, ano } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO veiculo (placa, marca, modelo, ano) VALUES ($1, $2, $3, $4) RETURNING *',
            [placa, marca, modelo, ano]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar veículo');
    }
});

// Rota para atualizar um veículo
app.put('/api/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const { placa, marca, modelo, ano } = req.body;
    try {
        const result = await pool.query(
            'UPDATE veiculo SET placa = $1, marca = $2, modelo = $3, ano = $4 WHERE id = $5 RETURNING *',
            [placa, marca, modelo, ano, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Veículo não encontrado');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar veículo');
    }
});

// Rota para deletar um veículo
app.delete('/api/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM veiculo WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Veículo não encontrado');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar veículo');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});