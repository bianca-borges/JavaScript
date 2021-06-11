const produto = {nome: 'Caneca', preco: 1.8};
Object.freeze(produto);
const produto2 = { 
    ...produto,
    material: 'porcelana'
};

const caneca = Object.assign({}, produto, {material: 'porcelana', cor: 'azul'})

produto2.nome = 'Outro nome';
produto2.preco = 2.5;
console.log(produto);
console.log(produto2);
console.log(caneca);