// arrow function

() => console.log('exemplo arrow 01')

const msg = () => console.log('msg qualquer')

const msg2 = (param) => console.log(`o parametro -> ${param}`)

const msg3 = param => console.log(`o parametro 2 sem parenteses -> ${param}`)

const soma = (numeros) =>{
    let soma = 0
    for(n of numeros){
        soma += n
    }
    return soma
}

const soma2 = (...numeros) =>{
    console.log('array ? - '+ Array.isArray(numeros))
    let soma = 0
    for(n of numeros){
        soma += n
    }
    return soma
}

msg()
msg2('flavio')
msg3('Augusto')
console.log(soma([1,2,3,4,5,6,7,8,9]))

// testando parametros com tecnica de rest - qtd de parametros variados
// não precisa dos colchetes, ele concatena os parametro gerando uma lista/array
console.log(soma2(1,2,3,4,5,6,7,8))
console.log(soma2(1,2,6,7,8,9))
console.log(soma2(1,2,3,4,5))

// --------- transformação de uma function em arrow function com parametro unico, sem corpo , reurn e chaves e parenteses

// antes
function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
console.log(potencia(2)(8))
//depois
const potencia2 = base => exp => Math.pow(base, exp)

console.log(potencia2(2)(10))