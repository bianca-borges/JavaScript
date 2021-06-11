// declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}

//First-class objects
//Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

//Arrow function
const funcaoArrow = () => {
    console.log('Arrow function');
};
funcaoArrow();

// dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando..');
    }
};
obj.falar();