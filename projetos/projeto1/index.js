// modulos expertno
const inquirer = require('inquirer')
//const chalk = require('chalk')

// modulos interno
const fs = require('fs');
const { connect } = require('http2');


operation()

function operation(){

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que deseja fazer: ',
        choices: [
            'Criar conta',
            'Depositar',
            'Consultar saldo',
            'Sacar',
            'Sair'
        ]
    }]).then((answer) => {
        const selectedAction = answer.action;

        if(selectedAction === 'Criar conta'){
            creatAccont()
            buildAccont()
        }else if(selectedAction === 'Depositar'){
            deposit()
        }else if(selectedAction === 'Consultar saldo'){
            console.log('este')
        }else if(selectedAction === 'Sacar'){
            console.log('este')
        }else if(selectedAction === 'Sair'){
            console.log('Obrigado, por usar o Acconts!')
            process.exit()
        }
    }
    ).catch(err => console.log())

}


//Criar conta
function creatAccont(){
    console.log('Parabpens por escolher o nosso banco!')
    console.log('Defina as opções da conta')
}
function buildAccont(){
    inquirer.prompt([{
        name: 'accontName',
        message: 'Digite o nome da conta:'
    }]).then((answer) => {
        const accontName = answer['accontName']
       
        if(!fs.existsSync('accounts')){ //Criar Pasta
            fs.mkdirSync('accounts')
        }

        if(checkAccont(accontName)){ //Validar se já existe user com nome
            console.log('Esta conta já existe, escolha outro nome!')
            buildAccont()
            return //Não executa as linhas abaixo
        }

        fs.writeFileSync(`accounts/${accontName}.json`, '{"balance": 0}' , function (err){
            console.log(err)
        })

        console.log('Conta criada com sucesso')
        operation()

    }
    ).catch(err => console.log(err))
}

//Depositar
function deposit(){
    inquirer.prompt([{
            name: 'accontName',
            message: 'Qual o nome da conta:'
        }
    ]).then((answer) =>{
        const accontName = answer['accontName']

        if(checkAccont(accontName)){
            inquirer.prompt([{
                name: 'amount',
                message: ('Quanto você deseja depopsitar: ')
            }
            ]).then((answer) => {
                
                const amout = answer['amount']

                // add an amount
                getAccont(accontName)

                operation()

            }).catch(err => console.log(err))
            
        }else{
            console.log('Está conta não existe')
            deposit()
            return
        }

        
    }).catch(err => console.log(err))
}

function addAmount(accontName ,amount){
     
}

function getAccont(accontName){
    const accontJSON = fs.readFileS-ync(`acconts/${accontName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })
    
    return JSON.parse(accontJSON)
}

function checkAccont(accontName){
    if(fs.existsSync(`accounts/${accontName}.json`)){
       return true;
    }else {
        return false;
    }

}
