const path = require('path')

//Apenas para a explicação, iremos deixar o caminho
//Mas na pratica, passamos de forma diferente
const customPath = '/relatorios/gabriel/relatorio1.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))

//Caminho absoluto
console.log(path.resolve("teste.txt"))

//Formar patf
const pasta='relatorio'
const nomeArquivo = 'gabriel.txt'

const pathMontada = path.join('/','arquivos',pasta,nomeArquivo)

console.log(pathMontada)