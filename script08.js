var http = require('http');
var url = require('url');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});    
        
        var endereco = 'http://localhost:8080' + req.url;
        var dados = url.parse(endereco, true);
        var args = dados.query;

        res.write('<!DOCTYPE html>');
        res.write('<html lang="pt-br">');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Seja Bem-Vindo(a)</h1>');
        res.write(`<p>Domínio: ${dados.host}</p>`);
        res.write(`<p>Subdomínio: ${dados.pathname}</p>`);
        res.write(`<p>Argumentos: ${dados.search}</p>`);
        res.write(`<p>Nome: ${args.nome}</p>`);
        res.write(`<p>Sobrenome: ${args.sobrenome}</p>`);
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');

