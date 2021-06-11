function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}.`;
        },
        altura: a,
        peso: p,
        // getter 
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Bianca', 'Vale', 1.62, 55);
p1.nomeCompleto = 'André Vale Borges';
console.log(p1.nome);
console.log(p1.sobrenome);

