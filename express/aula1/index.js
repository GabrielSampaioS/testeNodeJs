const express = require('express')
const app = express()
const porta = 3000

const path = require('path')
const basePath = path.join(__dirname, '/templates')

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})
 
app.listen(porta, () => {

    console.log(`app rodando na porta ${porta}`);

})