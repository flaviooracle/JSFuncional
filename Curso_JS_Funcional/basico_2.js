function bomdia(){
    console.log('Bom dia !!!')
}

const boatarde = function (msg){
    console.log('Boa tarde !!' + msg)
}

function executaFn(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

// passando função

executaFn(3)
executaFn(bomdia)
executaFn(boatarde('flavio augusto'))

// retornando função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potencia2 = potencia(2)
console.log(potencia2(8))
console.log(potencia(2)(8))
console.log(potencia(3)(4))

