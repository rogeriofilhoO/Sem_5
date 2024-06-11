const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const JSONPLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter os dados do JSONPlaceholder
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(JSONPLACEHOLDER_URL);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter dados do JSONPlaceholder:', error);
    res.status(500).json({ error: 'Erro ao obter dados do JSONPlaceholder' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


// para testar entrar no localhost:3000