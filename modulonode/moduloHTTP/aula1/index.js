const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    res.write("Ola teste")
    res.end()
})

server.listen(port, () => {
    console.log(`Servifot rodando na porta: ${port}`)
})