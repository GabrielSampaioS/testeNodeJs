const fs = require('fs')

console.log('Início')

fs,fs.writeFile('assincrono.tx','teste assincrono',function(err){
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000);
});

console.log('FIM')