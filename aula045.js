 // não passei parametros
/*
function funcao(){ 
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7); //passei argumentos
*/

/*
function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); // argumentos não passados serão undefined
*/

/*
// adicionando valor padrão
function funcao(a, b = 2){
    console.log(a + b);
}

funcao(2);
*/

/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Bianca', sobrenome: 'Borges', idade: 20};
funcao(obj);
*/

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
