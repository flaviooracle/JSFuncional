const fs = require('fs');
const path = require('path');

// _ _ dirname -> diretorio local da aplicação
const caminho = path.join(__dirname,'dados.txt');

console.log('-----------------'+caminho);

// neste caso , se o parametro não for utilizado, pose-se colocar um underline como convençao opcional
// ex: function exibirConteudo(_, conteudo){
function exibirConteudo(err, conteudo){
    if(err){
        console.log('erro...');
    }
    console.log(conteudo.toString());
}

// em algumas funçoes , alguns parametros são opcionais, podendo até suprimi-los.
// neste read, o segundo poderia ser suprimido que funcionario

// leitura assyncrona com callback... callback exixtente na função
// por isso que a chamada a funcção tem dois parametros... o err, callback
console.log('inicio...');
fs.readFile(caminho, {}, exibirConteudo);
fs.readFile(caminho, {}, (_,conteudo) => {console.log('1- '+conteudo.toString())});
console.log('fim...');

// leitura syncrona - acaba imprimindo o resultado antes que o assync, pois quando chega nele para ate
// finalizar o serviço
console.log('inicio...');
let leitura = fs.readFileSync(caminho);
console.log('1..- '+leitura.toString());

leitura = fs.readFileSync(caminho);
console.log('2..- '+leitura.toString());

console.log('fim...');
