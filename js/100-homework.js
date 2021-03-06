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

const greita = ['Geri', 'vyrai', 'geroj', 'girioj', 'gera', 'alu', 'gere'];

console.log(`${tx1} ${tx2} ${tx3} ${tx4} ${tx5} ${tx6} ${tx7}.`);
console.log(`${greita[0]} ${greita[1]} ${greita[2]} ${greita[3]} ${greita[4]} ${greita[5]} ${greita[6]}.`);

console.log('---------------------');

// 3.

const matr = [19, 25, 16, 64, 81];

console.log(matr[0] - matr[1] + matr[2] - matr[3] + matr[4])

console.log('---------------------');

// 4.

//const medis = ['azuolas', 'berzas', 'klevas', 'uosis', 'pusis'];

console.log(1, `${medis[4]} , ${medis[3]} , ${medis[2]} , ${medis[1]} , ${medis[0]}.`);

console.log(2, medis[4] + ' , ' + medis[3] + ' , ' + medis[2] + ' , ' + medis[1]  + ' , ' + medis[0] + '.');


console.log('---------------------------------------');





/*
JavaScript mini užduotys

III. Kintamųjų palyginimas

Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
4. Išvesti sąrašo tipo kintamųjų ilgius
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus


IV.Ciklo for panaudojimas

1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    a. 0 - 0
    b. 0 - 4
    c. 0 - 100
    d. 574 - 815
    e. -50 - 50
    f. -70 - 30
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    pvz.: “abcdef” -> “fedcba”
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    a. 0 - 11
    b. 8 - 31
    c. -18 - 18
    d. rezultatą pateikti tokiu formatu:
        1) Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        2) Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        3) Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

*/


// III.
// 1.

const x = 9
const y = 6

// a.
if (x > y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// b.
if (x < y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// c.
if (x === y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// d.
if (x !== y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// e.
if (x >= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// f.
if (x <= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}
console.log('------------------------------------------------');

// 2.
const saule = 'zvaigzde'
const zeme = 'planeta'

// 3.

// a.
if (saule.length > zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// b.
if (saule.length < zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// c.
if (saule.length === zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// d.
if (saule.length !== zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// e.
if (saule.length >= zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// f.
if (saule.length <= zeme.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.log('------------------------------------------------');

// 4.
const pazym = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const balai = [1, 2, 3, 4, 5, 6];

// 5.
// a.
if (pazym.length > balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// b.
if (pazym.length < balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// c.
if (pazym.length === balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// d.
if (pazym.length !== balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// e.
if (pazym.length >= balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

// f.
if (pazym.length <= balai.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.log('------------------------------------------------');

// IV.
// 1.

// a. intervalas 0 - 0

let sum1 = 0;
for (let i = 0; i <= 0; i++) {
    sum1 = sum1 + i
 }
console.log('Skaiciu suma intervale 0 - 0:', sum1);

// b. intervalas 0 - 4

let sum2 = 0;
for (let i = 0; i <= 4; i++) {
    sum2 = sum2 + i
}
console.log('Skaiciu suma intervale 0 - 4:', sum2);

// c. intervalas 0-100

let sum3 = 0;
for (let i = 0; i <= 100; i++) {
    sum3 = sum3 + i
}
console.log('Skaiciu suma intervale 0 - 100:', sum3);

// d. intervalas 574 - 815

let sum4 = 0;
for (let i = 574; i <= 815; i++) {
    sum4 = sum4 + i
}
console.log('Skaiciu suma intervale 574 - 815:', sum4);

// e. intervalas -50 - 50

let sum5 = 0;
for (let i = -50; i <= 50; i++) {
    sum5 = sum5 + i
}
console.log('Skaiciu suma intervale -50 - 50:', sum5);

// f. intervalas -70 - 30

let sum6 = 0;
for (let i = -70; i <= 30; i++) {
    sum6 = sum6 + i
}
console.log('Skaiciu suma intervale -70 - 30:', sum6);


console.log('------------------------------------------------');

// 2.
//pvz.: “abcdef” -> “fedcba”

let zod = 'pomidoras';
let atv = '' 

for (let i = zod.length - 1; i >= 0; i--) {
    atv += zod [i];
}
console.log(`Zodis "${zod}", o atvirksciai "${atv}"`);


console.log('------------------------------------------------');

// 3.

const tre = 3;
const pen = 5;
const sep = 7;

// a. intervalas 0 - 11

// is 3
// 1) sprendimo var.
const int1 = 0;
const int2 = 11;
let kiekis0 = [];
let kiekis1 = [];
let kiekis2 = [];
let kiekis3 = [];

if (int1 <= int2) {
  for (let i = int1; i <= int2; i++) {
    if (i % tre === 0)
      kiekis0.push(i);
  }
}
console.log(kiekis0);
console.log(kiekis0.length);

console.log('----------------------');

// 2) sprendimo var.
let kiek = 0;
    for (let i = int1; i <= int2; i++) {

      if (i % tre === 0) { // tre = 3
          kiek++
      } 
    }
    console.log(kiek);

console.log('----------------------');

// sprendimai:

if (int1 <= int2) {
    for (let i = int1; i <= int2; i++) {

      if (i % tre === 0)  // tre = 3
      kiekis1.push(i);
      
   
      if (i % pen === 0)  // pen = 5
      kiekis2.push(i);
      
      if (i % sep === 0)  // sep = 7
      kiekis3.push(i);
      }
    }

  console.log(kiekis1);
  console.log(kiekis1.length);

  console.log('--------------');

  console.log(kiekis2);
  console.log(kiekis2.length);

  console.log('--------------');

  console.log(kiekis3);
  console.log(kiekis3.length);


  console.log('----------------------');

 // b. intervalas 8 - 31 

const int3 = 8;
const int4 = 31;

let kiekis4 = [];
let kiekis5 = [];
let kiekis6 = [];

if (int3 <= int4) {
    for (let i = int3; i <= int4; i++) {

      if (i % tre === 0)  // tre = 3
      kiekis4.push(i);
      
   
      if (i % pen === 0)  // pen = 5
      kiekis5.push(i);
      
      if (i % sep === 0)  // sep = 7
      kiekis6.push(i);
      }
    }

  console.log(kiekis4);
  console.log(kiekis4.length);

  console.log('--------------');

  console.log(kiekis5);
  console.log(kiekis5.length);

  console.log('--------------');

  console.log(kiekis6);
  console.log(kiekis6.length);


  console.log('----------------------');



// c. intervalas -18 - 18 

const int5 = -18;
const int6 = 18;

let kiekis7 = [];
let kiekis8 = [];
let kiekis9 = [];

if (int5 <= int6) {
    for (let i = int5; i <= int6; i++) {

      if (i % tre === 0)  // tre = 3
      kiekis7.push(i);
      
   
      if (i % pen === 0)  // pen = 5
      kiekis8.push(i);
      
      if (i % sep === 0)  // sep = 7
      kiekis9.push(i);
      }
    }

  console.log(kiekis7);
  console.log(kiekis7.length);

  console.log('--------------');

  console.log(kiekis8);
  console.log(kiekis8.length);

  console.log('--------------');

  console.log(kiekis9);
  console.log(kiekis9.length);


  console.log('----------------------');

/*  kitas sprendimas, randant tik galimu sprendiniu kiekius 

const nuoA = 0;
const ikiA = 11;
const daliklis1 = 3;
const daliklis2 = 5;
const daliklis3 = 7;
let dalmuoA1 = 0;
let dalmuoA2 = 0;
let dalmuoA3 = 0;

for (let i = 0; i <= 11; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoA1++
    }
    if (i % daliklis2 === 0) {
        dalmuoA2++
    }
    if (i % daliklis3 === 0) {
        dalmuoA3++
    }
}

// b. 8 - 31

const nuoB = 8;
const ikiB = 31;
let dalmuoB1 = 0;
let dalmuoB2 = 0;
let dalmuoB3 = 0;

for (let i = 8; i <= 31; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoB1++
    }
    if (i % daliklis2 === 0) {
        dalmuoB2++
    }
    if (i % daliklis3 === 0) {
        dalmuoB3++
    }
}

// c. -18 -18

const nuoC = -18;
const ikiC = 18;
let dalmuoC1 = 0;
let dalmuoC2 = 0;
let dalmuoC3 = 0;

for (let i = -18; i <= 18; i++) {
    
    if (i % daliklis1 === 0) {
        dalmuoC1++
    }
    if (i % daliklis2 === 0) {
        dalmuoC2++
    }
    if (i % daliklis3 === 0) {
        dalmuoC3++
    }
}
*/


// d. rezultatą pateikti tokiu formatu:
// i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

console.log(`Skaiciu intervale tarp ${int1} ir ${int2}, besidalijanciu be liekanos is ${tre} yra ${kiekis1.length} vienetai.`);
console.log(`Skaiciu intervale tarp ${int1} ir ${int2}, besidalijanciu be liekanos is ${pen} yra ${kiekis2.length} vienetai.`);
console.log(`Skaiciu intervale tarp ${int1} ir ${int2}, besidalijanciu be liekanos is ${sep} yra ${kiekis3.length} vienetai.`);
console.log(`-------------------------------------------------------------------------------`);
console.log(`Skaiciu intervale tarp ${int3} ir ${int4}, besidalijanciu be liekanos is ${tre} yra ${kiekis4.length} vienetai.`);
console.log(`Skaiciu intervale tarp ${int3} ir ${int4}, besidalijanciu be liekanos is ${pen} yra ${kiekis5.length} vienetai.`);
console.log(`Skaiciu intervale tarp ${int3} ir ${int4}, besidalijanciu be liekanos is ${sep} yra ${kiekis6.length} vienetai.`);
console.log(`-------------------------------------------------------------------------------`);
console.log(`Skaiciu intervale tarp ${int5} ir ${int6}, besidalijanciu be liekanos is ${tre} yra ${kiekis7.length} vienetu.`);
console.log(`Skaiciu intervale tarp ${int5} ir ${int6}, besidalijanciu be liekanos is ${pen} yra ${kiekis8.length} vienetai.`);
console.log(`Skaiciu intervale tarp ${int5} ir ${int6}, besidalijanciu be liekanos is ${sep} yra ${kiekis9.length} vienetai.`);


console.log('------------------------------------------------------');


