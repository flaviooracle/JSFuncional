const numeros = [1,2,3,4,5,6];


// map(numero,indice,array)
const dobro = (n) => n*2;
const dobro2 = (n,i) => n*2 + i;
const dobro3 = (n,i,a) => n*2 + i + a.length;

console.log(numeros.map(dobro));
console.log(numeros.map(dobro2));
console.log(numeros.map(dobro3));

const nome = ['flavio','augusto','oliveira','miranda'];

const primeiraLetra = (nome) => nome[0];

console.log(nome.map(primeiraLetra), nome)