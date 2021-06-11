/*
const pessoa1 = new Object();
pessoa1.nome = 'Bianca';
pessoa1.sobrenome = 'Borges';
pessoa1.idade = 22;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando oi.`);
};
pessoa1.getDataNasc = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
*/

// factory function | constructor functions

/*
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Bianca', 'Borges');
console.log(p1.nomeCompleto);
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Bianca', 'Borges');
const p2 = new Pessoa('André', 'Vale');
