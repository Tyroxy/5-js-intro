console.log('---------------------------------------');

// Pazymiai: 10, 2, 8, 6, 4.
// Pazymiu suma: 30.
// Pazymiu kiekis: 5.
// Pazymiu vidurkis: 6.

const pazymiai = [10, 2, 8, 6, 4];
console.log(`Pazymiai: ${pazymiai[0]}, ${pazymiai[1]}, ${pazymiai[2]}, ${pazymiai[3]}, ${pazymiai[4]}. `);

const sum = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
const vidurkis = sum / 5;

console.log('Pazymiu suma: ' + sum + '.');

console.log('Pazymiu kiekis: ' + pazymiai.length + '.')

console.log(1,'Pazymiu vidurkis: ' + vidurkis + '.');
console.log(2, 'Pazymiu vidurkis: ' + sum/5 + '.');
console.log(3, 'Pazymiu vidurkis: ' + sum/(pazymiai.length) + '.');

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


/*
JavaScript mini užduotys

I. Kintamųjų inicijavimas

1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console


II. Veiksmai su kintamaisiais

1. Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
a) 1-2+3-4+5
b) Rezultatą išvesti į console
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

*/

// I.
// 1.

const mase1 = 50;
const mase2 = 100;
const mase3 = 1000;

console.log(mase1);
console.log(mase2);
console.log(mase3);

console.log('---------------------');
//2.

const text1 = 'Labas ';
const text2 = 'rytas, ';
const text3 = 'Lietuva!';

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text1 + text2 + text3);

console.log('---------------------');
//3.

const masyvas = [10, 20, 30, 40, 50];
const sarasas = [50, 49, 48, 47, 46];
const matrica = [1, 10, 100, 1000, 10000];

console.log(masyvas);
console.log(sarasas);
console.log(matrica);
console.log('---------------------');
console.log(`${masyvas[0]}, ${masyvas[1]}, ${masyvas[2]}, ${masyvas[3]}, ${masyvas[4]}`);
console.log(`${sarasas[0]}, ${sarasas[1]}, ${sarasas[2]}, ${sarasas[3]}, ${sarasas[4]}`);
console.log(`${matrica[0]}, ${matrica[1]}, ${matrica[2]}, ${matrica[3]}, ${matrica[4]}`);

console.log('---------------------');
//4.

const medis = ['azuolas', 'berzas', 'klevas', 'uosis', 'pusis'];
const vaisius = ['obuolys', 'ananasas', 'bananas', 'slyva', 'citrina'];
const baldas = ['stalas', 'suolas', 'spinta', 'kede', 'lentyna'];

console.log(medis);
console.log(vaisius);
console.log(baldas);
console.log('---------------------');
console.log(`${medis[0]}, ${medis[1]}, ${medis[2]}, ${medis[3]}, ${medis[4]}`);
console.log(`${vaisius[0]}, ${vaisius[1]}, ${vaisius[2]}, ${vaisius[3]}, ${vaisius[4]}`);
console.log(`${baldas[0]}, ${baldas[1]}, ${baldas[2]}, ${baldas[3]}, ${baldas[4]}`);


console.log('---------------------------------------');

// II.
// 1.

const sk1 = 3;
const sk2 = 6;
const sk3 = 9;
const sk4 = 12;
const sk5 = 15;

console.log(sk1 + sk2 + sk3 + sk4 + sk5);

console.log('---------------------');

// 2. 
const tx1 = 'Geri';
const tx2 = 'vyrai';
const tx3 = 'geroj';
const tx4 = 'girioj';
const tx5 = 'gera';
const tx6 = 'alu';
const tx7 = 'gere';

console.log(`${tx1} ${tx2} ${tx3} ${tx4} ${tx5} ${tx6} ${tx7}.`);

console.log('---------------------');

// 3.

const matr = [19, 25, 16, 64, 81];

console.log(matr[0] - matr[1] + matr[2] - matr[3] + matr[4])

console.log('---------------------');

// 4.

//const medis = ['azuolas', 'berzas', 'klevas', 'uosis', 'pusis'];

console.log(1, `${medis[4]} , ${medis[3]} , ${medis[2]} , ${medis[1]} , ${medis[0]}.`);

console.log(2, medis[4] + ' , ' + medis[3] + ' , ' + medis[2] + ' , ' + medis[1]  + ' , ' + medis[0] + '.');
