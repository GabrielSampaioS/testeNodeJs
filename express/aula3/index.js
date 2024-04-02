const express = require('express')
const app = express()
const porta = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

//transformando todos os dados em json para podemos ler
app.use(express.json())


app.get('/users/add', (add, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {

    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const msm = req.body.mensagem


    console.log(`Dados pegos: nome ${name} , ${email} , ${msm}`)
    res.sendFile(`${basePath}/userform.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.listen(porta, () =>{
    console.log(`O servidor esta na porta ${porta}`)
})

