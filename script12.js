var fs = require('fs');

fs.writeFile('arquivo2.txt', 'Aprender Noje.js é construir o futuro!',
    function(err, file) {
        if(err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!');