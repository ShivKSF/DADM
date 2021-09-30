var mysql = require('mysql');

var conexao = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '240190'
    }
);

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            conexao.query('CREATE DATABASE agenda',
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Banco de dados criado com sucesso!!!');
                }
            ); 
        }      
    }
);