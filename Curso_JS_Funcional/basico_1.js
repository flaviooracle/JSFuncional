function bomdia(){
    console.log('bom dia');
}

bomdia();

const boatarde = function(){
    bomdia();
}

boatarde();

let soma = function(a = 0, b = 0){
    return a + b;
}

let somaB = function(a , b ){
    return a + b;
}

console.log(somaB()); // NaN
console.log(soma());
console.log(soma(3));
console.log(soma(3,4));
console.log(soma(4,5,6,7,8));
