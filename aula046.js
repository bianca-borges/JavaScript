/*
function criaPessoa(nome, sobrenome){
    return { nome, sobrenome };
}

const p1 = criaPessoa('Bianca', 'Borges');
const p2 = {
    nome: 'André',
    sobrenome: 'Vale'
};

console.log(p1);
console.log(p2);
*/

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));