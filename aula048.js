(function (idade, peso, altura){
    const sobrenome = 'Borges';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Bianca'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(22, 55, 1.62);