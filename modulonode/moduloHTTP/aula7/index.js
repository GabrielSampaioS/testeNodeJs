const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                fs.readFile('404.html', function(err, notFoundData) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write(notFoundData); // Escreva o conteúdo do arquivo '404.html' na resposta
                    return res.end();
                });
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            }
        });
    } else {
        const newName = name + ",\n"; // Ajuste na formatação do novo nome
        fs.appendFile('arquivo.txt', newName, function(err, data) {
            if (err) {
                console.error('Erro ao gravar no arquivo:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno no servidor.');
            } else {
                res.writeHead(302, {
                    Location: '/' // Redirecionamento para a raiz do servidor
                });
                return res.end();
            }
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor na porta ${port}`);
});
