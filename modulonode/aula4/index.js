const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    // Esta linha analisa a URL da requisição para extrair informações
    const urlInfo = require('url').parse(req.url,true)
    // Esta linha extrai o parâmetro 'name' da consulta da URL.
    const name =urlInfo.query.name 

    req.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if(!name){ //Se nome vazio
        res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"></input><input type="submit" value="Enviar"></input></form>')
    }else{
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }

})

server.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`)
})