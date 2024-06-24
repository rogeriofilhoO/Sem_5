// Chamando a biblioteca
const Pool = require('pg').Pool;

// Acessa o banco de dados
const db = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Teste-1'
});

// Criar Conexão com o banco de dados
db.connect((err) => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});

//Consultar o banco de dados
db.query('SELECT * FROM veiculo', (err, result) => {
    if(err) {
        console.error('Erro na consulta');
    } else {
       console.log(result.rows);
    }
});

