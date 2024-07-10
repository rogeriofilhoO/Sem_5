// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Usuário
    password : 'postgres', // Senha do banco de dados
    host: 'localhost', // Servidor do banco de dados
    port: 5432, // Porta padr
    database: 'Tarefa2' // Nome do banco de dados
});

module.exports = pool;