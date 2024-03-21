const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1', message: 'Primeira nota: ',
    }, 
    {
        name: 'p2', message: 'Segunda nota: ',
    }
]).then((answers) => {
    console.log(answers)
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2
    console.log(`A média é : ${media}`)
}).catch(err => console.log(err) )