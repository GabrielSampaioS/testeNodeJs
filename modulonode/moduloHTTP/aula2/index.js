// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP.
const http = require('http')

// Define a porta na qual o servidor irá escutar as requisições.
const port = 3000

// Cria um servidor HTTP usando a função createServer, que recebe uma função de callback para tratar requisições.
const server = http.createServer((req, res) => {
    // Define o código de status da resposta HTTP como 200
    res.statusCode = 200
    // Define o cabeçalho 'Content-Type' da resposta como 'text/html'
    res.setHeader('Contenty-Type', 'text/html')
    // Envia o conteúdo HTML como resposta
    res.end('<H1>Enviando tag HTML</>')
})

// Faz o servidor escutar na porta especificada (3000) e executa uma função de callback quando o servidor começar a escutar.
server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})
