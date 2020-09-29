let numeros = [3,2,11,20,8,7];
let numeroDobradoImpar = 
    numeros.map((item, indice) => ( ( item % 2) + 1) * item );

console.log(numeros);
console.log(numeroDobradoImpar);    
    




// map treinando com arrow functions

let dobro = numeros.map(num => num * 2 );
let metade = numeros.map(num =>  num / 2 );
let raiz = numeros.map(num => Math.sqrt(num));