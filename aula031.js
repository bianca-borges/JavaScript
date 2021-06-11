// desestruturação de arrays

/*
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const [um, , tres, cinco, , sete, , nove] = numeros;
// console.log(um, tres, cinco, sete, nove);
// console.log(resto);

//                    0          2          3
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 2], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);