const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qaul é sua linguagem? ", (language) =>{
    console.log(`A sua linguagem é : ${language}`)
    readline.close()
})