// prototype e this...
// incluindo metodos em classes de sistemas

Array.prototype.ultimo = function(){
    console.log(this[this.length-1]);
}

Array.prototype.mostrar = function(){
    console.log(this);
}

Array.prototype.primeiro = function(){
    console.log(this[0]);
}

// não funciona com arraow function
Array.prototype.ultimoArrow = () => {
    console.log(this[0]);
}

const numeros = [1,2,3,4,5]

numeros.ultimoArrow()
numeros.ultimo()
numeros.primeiro()
numeros.mostrar()
