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


// Inserir dados no banco de dados
db.query('Insert into placa (placa, marca, modelo, ano) values (2345, FIAT, UNO, 2010)', 
    (err, result) => {
        if (err) {
            console.log("Erro na inserção");
        } else {
            console.log("Inserido com sucesso");
        }
    }
);

// Atualizar dados no banco de dados
db.query('Update veiculo set modelo = Palio where palca = 2345',
    (err, result) => {
        if(err) {
            console.log('Erro na atualização');
        } else {
            console.log('Atualizado com sucesso');
        }
    }
);

// Deletar dados no banco de dados
db.query('Delete from veiculo where placa = 2345',
    (err, result) => {
        if(err) {
            console.log('Erro na atualização');
        } else {
            console.log('Deletado com sucesso');
        }
    }
);

