//  calcular(3)(5)(fn) -> determina a operação


const soma = function(a,b){
    return a+b
}
const subtracao = function(a,b){
    return a-b
}
const divisao = function(a,b){
    return a/b
}
const multiplicacao = function(a,b){
    return a*b
}

function operacao(vl1){
    return function(vl2){
        return function(fn){
           return fn(vl1,vl2)
        }
    }
}

console.log(soma(3,4))

let opera1 = operacao(4)
let opera2 = opera1(3)
let opera3 = opera2(soma)

console.log(opera3)


console.log(operacao(4)(4)(soma))
console.log(operacao(4)(4)(subtracao))
console.log(operacao(4)(4)(divisao))
console.log(operacao(4)(4)(multiplicacao))
