function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um método.');
    };
}

const p1 = new Pessoa('Bianca', 'Borges');
p1.metodo();