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
        else
            console.log('Conexão com o BD estabelecida com sucesso!!!');      
    }
);
