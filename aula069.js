function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};


Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
// p1.aumento(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    },

    cor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }

});

p3.nome = 'Boné';

p3.aumento(10);

console.log(p3);