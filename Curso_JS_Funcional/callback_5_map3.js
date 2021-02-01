// criando mapeamento map
// codificando o processo para flexibilizar mapeamentos mais complexos


const carrinho = [  {nome: 'Caneta', qtd:10, preco: 7.23},
                    {nome: 'Bola', qtd:1, preco: 3.23},
                    {nome: 'Casa', qtd:9, preco: 4.23},
                    {nome: 'Caderno', qtd:5, preco: 2.23},
                    {nome: 'mouse', qtd:2, preco: 1.23}];

Array.prototype.meuMap = function(fn){

   const arrayResult = [];

   for(let i=0; i < this.length; i++){
       retFunction = fn(this[i],i,this);
       if(typeof retFunction === 'string'){
           retFunction = 'Olá '+retFunction;
       };
       
       arrayResult.push(retFunction);
   }
   return arrayResult;
}

const nomes = (produtos) => produtos.nome;

const valores = (produtos) => produtos.qtd * produtos.preco;

console.log(carrinho.meuMap(nomes), carrinho.meuMap(valores));