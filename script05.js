var http = require('http');
var meuModulo = require('./meuModulo');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'});
        res.write('A data e hora atuais são ' + meuModulo.retornarData());
        res.end();
    }
).listen(8080);


console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');

