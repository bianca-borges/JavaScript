const pessoa ={
    nome: 'Bianca',
    sobrenome: 'Borges',
    idade: 22,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// atribuição normal
//const nome = pessoa.nome;
//console.log(nome);

// atribuição por desestruturação
//const {nome, sobrenome} = pessoa;
const { 
    endereco: { rua: r  = 12345, numero}, 
    endereco 
} = pessoa;
console.log(r, numero, endereco);