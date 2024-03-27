const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    // A função passada para fs.readFile() é uma função de retorno de chamada (callback) que é executada quando a leitura do arquivo é concluída.
    fs.readFile('menu.html', function(err, data){
        // A função res.writeHead() define o cabeçalho da resposta HTTP. Neste caso, está definindo o status da resposta para 200 (OK) e o tipo de conteúdo para 'text/html'.
        res.writeHead(200, {'Content-Type': 'text/html'})
        // O método res.write() envia os dados especificados como parte do corpo da resposta. 
        res.write(data)
        // O método res.end() finaliza a resposta HTTP.
        return res.end();
    })
})

server.listen(port, () => {
    console.log(`Servidor na porta ${port}`)
})
