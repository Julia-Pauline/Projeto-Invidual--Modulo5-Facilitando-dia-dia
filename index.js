const readlineSync = require('readline-sync')
const ck = require ('chalk')
// import ck from 'chalk'

const valores = []
let input = ""

while (input != "sair") {
    valores.push(input)
    input = readlineSync.question("Digite uma propriedade CSS").toLocaleLowerCase()
}
console.log(valores.sort().join("\n"))
console.log(ck.pink.bold(valores.sort().join("\n")))


