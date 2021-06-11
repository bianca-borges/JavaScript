/* 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numeros2 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);
    return valor > 10;

});
console.log(numeros2);
*/

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoas1 = pessoas.filter(function(obj){
    return obj.nome.length >= 7;
});

const pessoas2 = pessoas.filter(function(obj){
    return obj.idade > 50;
});

const pessoas3 = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoas3);

console.log(pessoas2);

console.log(pessoas1);