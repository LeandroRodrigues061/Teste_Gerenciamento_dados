const assert = require('assert');
const db = require('../config/dbConfig');
//const db = require('../config/dbConfigJenkins');


describe('Testes da tabela usuarios', () => {

    it('Deve retornar todos os usuários', async () => {

        // Usa a versão com Promises 
        const [results] = await db.promise().query('SELECT * FROM usuarios');

        // Exibe os usuários no console
        console.log('Usuários encontrados no banco:', results);

        // Verifica que é um array e que contém pelo menos um usuário
        assert.ok(Array.isArray(results));

        assert.ok(results.length > 0, 'A tabela deve conter pelo menos um usuário');

    });
});

