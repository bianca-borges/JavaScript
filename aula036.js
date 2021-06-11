// for in lê os indices ou chaves do objeto

const pessoa = {
    nome: 'Bianca',
    sobrenome: 'Borges',
    idade: 22
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


// const frutas = ['Pera', 'Maçã', 'Uva'];

// for(let i in frutas){
//     console.log(frutas[i]);
//}