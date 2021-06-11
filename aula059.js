const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros2 = numeros.map(valor => valor * 2);
console.log(numeros2);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(function(valor){
    return valor.nome;
}); 
console.log(nomes);

const idades = pessoas.map(function(valor){
    return {idade: valor.idade};
});
console.log(idades);

const comIds = pessoas.map(function(valor, indice){
    const newValor = { ...valor};
    newValor.id = indice;
    return newValor;
});
console.log(comIds);