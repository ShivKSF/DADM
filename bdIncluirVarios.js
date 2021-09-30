var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = "INSERT INTO pessoa (nome, email) VALUES ?";

            var pessoas = [
                ['Maria da Conceicao', 'maria@gmail.com'],
                ['Dalira Batista', 'dalira@gmail.com'],
                ['Ralf Pereira', 'ralf@gmail.com'],
                ['Gerson dos Santos', 'gerson@gmail.com'],
                ['Marco Valerio', 'marco@gmail.com'],
                ['Jose Augusto', 'jose@gmail.com'],
                ['Mariana da Silva', 'mariana@gmail.com']
            ];

            conexao.query(operacao, [pessoas],
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Pessoas incluídas com sucesso!!!');
                }
            ); 
        }      
    }
);