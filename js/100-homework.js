console.log('---------------------------------------');

// Pazymiai: 10, 2, 8, 6, 4.
// Pazymiu suma: 30.
// Pazymiu kiekis: 5.
// Pazymiu vidurkis: 6.

const pazymiai = [10, 2, 8, 6, 4];
console.log(`Pazymiai: ${pazymiai[0]}, ${pazymiai[1]}, ${pazymiai[2]}, ${pazymiai[3]}, ${pazymiai[4]}. `);

const sum = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
const vidurkis = sum / 5;

console.log('Pazymiu suma: ' + (sum) + '.');

console.log('Pazymiu kiekis: ' + pazymiai.length + '.')

console.log('Pazymiu vidurkis: ' + vidurkis + '.');
console.log('Pazymiu vidurkis: ' + sum/5 + '.');

console.log('---------------------------------------');

// Klaseje mokosi 4 asmenys.
// Mokiniu vardai yra Petras, Ona, Jonas, Maryte.

const asmuo1 = 'Petras';
const asmuo2 = 'Ona';
const asmuo3 = 'Jonas';
const asmuo4 = 'Maryte';

const asmenys =[asmuo1, asmuo2, asmuo3, asmuo4];
// console.log(asmenys);

console.log('Klaseje mokosi ' + asmenys.length + ' asmenys.')

console.log(`Mokiniu vardai yra ${asmuo1}, ${asmuo2}, ${asmuo3}, ${asmuo4}.`)

console.log('---------------------------------------');
