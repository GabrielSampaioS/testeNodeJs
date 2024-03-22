const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res) => {
    const q = url.parse(req.url, true)

    //subestig(1) pegar valor apos o '/'
    const filename = q.pathname.substring(1)

    if(filename.includes('html')){ //Add html como extensão
        if(fs.existsSync(filename)){ //Usando o Sync pois precisamos esperar a resposta no servidor
            fs.readFile(filename, function(err, data){
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }else{
            fs.readFile('404.html', function(err, data){
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    } 
})

server.listen(port, () => {
    console.log(`Server rodadndo na porta ${port}`)
})