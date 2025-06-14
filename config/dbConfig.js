const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: 'alunofatec' ,
    database: 'testdb',
    port: 3307
});


db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } else {
        console.log('Conexão com o banco de dados estabelecida.');
    }
});


module.exports = db;
