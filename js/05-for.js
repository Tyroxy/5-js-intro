/*
FOR - ciklas, kazko kartojimasis


*/

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis',  'Liepa',  'Rugpjutis',  'Rugsejis',  'Spalis',  'Lapkritis',  'Gruodis'];


// Metu menesiai:
// 1. Sausis
// 3. Vasaris
// ....
// 12. Gruodis

let i = 0
console.log('Metu menesiai:');

// console.log((i + 1) + '.' + months[i]);
// i = i + 1;

console.log(1 + '.' + months[0]);
console.log(2 + '.' + months[1]);
console.log(3 + '.' + months[2]);
console.log(4 + '.' + months[3]);
console.log(5 + '.' + months[4]);

for (let i = 0; i < 15; i = i + 2) {
    console.log(i, 'kazkas');
}

console.log('----------------------');

/*
for (let i = 0; i < 15; i = i - 2) {
    console.log(i, 'kazkas');
}

neturi prasmes, skaiciuoja i minusa iki -begalybes.
*/

console.log('----------------------');

for (let i = 0; i < months.length; i++) {
    console.log((i + 1) + '. ' + months[i]);
}

console.log('----------------------');
