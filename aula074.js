const pessoas = [
    { id: 3, nome: 'Bianca' },
    { id: 2, nome: 'André' },
    { id: 1, nome: 'Nataly' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

console.log(novasPessoas);