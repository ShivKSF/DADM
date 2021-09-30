var mysql = require('mysql');

var conexao = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '240190',
        database: 'agenda'
    }
);

module.exports = conexao;