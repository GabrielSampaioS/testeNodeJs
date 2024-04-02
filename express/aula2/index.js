const express = require('express')
const app = express();
const porta = 3000

const path = require('path')
const basePath = path.join(__dirname, '/templates')

//Utilizando o middlewares 
const checkAuth = function(req, res, next){

    //Para simplificar como se o user estivesse logado
    req.authStatus = true

    if(req.authStatus){
        console.log('Usuario logado')
        next()
    }else{
        console.log('Usuario não logado')
        next()
    }
}

//Neste caso TODAS as req dos usurios serão validadas pela função checkAuth
//Tem formas de apenas aplicamos a rotas especificas
app.use(checkAuth)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})