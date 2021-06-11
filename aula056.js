const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem)

const removidos = nomes.splice(3, 1, 'Bianca');
console.log(nomes, removidos);