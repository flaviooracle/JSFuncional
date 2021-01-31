const fs = require('fs');
const path = require('path');

// _ _ dirname -> diretorio local da aplicação
const caminho = path.join(__dirname,'dados.txt');

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo);
