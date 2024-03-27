// modulos externos 
const import = require('inquirer')
const chalk = require('chalk')

// modulos interno
const fs = require('fs')

function operation(){

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que deseja fazer: ',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then(

    ).catch(err => console.log())

}