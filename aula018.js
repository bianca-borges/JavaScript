/*
const pessoa1 = {
    nome: 'Bianca',
    sobrenome: 'Borges',
    idade: 22
};

console.log(pessoa1.idade);

*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Bianca', 'Borges', 22); 

*/

const pessoa1 = {
    nome: 'Bianca',
    sobrenome: 'Borges',
    idade: 22,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();

