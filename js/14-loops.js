const list = ['Agurkas', 'Zirnis', 'Salota', 'Ridikelis', 'Pomidoras'];
console.log(list);

console.log('FOR: --------------------------');


    // FOR
for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log(item);
}
// console.log('FOR: -------------------');

// 2 for parasymas, lyginimas su while
// let i = 0;
// for (; i < list.length; ) {
//     const item = list[i];
//     console.log(item);
//     i++
// }

// console.log('FOR: ----------------------');

// let fr = 0;
// for (let i = 0; fr < 0.9; i++) {
//     fr = Math.random();
//     console.log(`${i} ${fr}`);
// }

// console.log('FOR: ----------------------');

// galim issimesti indeksa i
// let fm = 0;
// for (; fm < 0.9;) {
//     fm = Math.random();
//     console.log(fm);
// }


console.log('WHILE: ------------------------');

    // WHILE
// while (condition) {
//     console.log('sdsfdgf');
// }

let iw = 0;
while (iw < list.length) {
    const item = list[iw];
    console.log(item);
    iw++;
}

// let ir = 0;
// let rn = 0;
// while (rn < 0.9){
//     rn = Math.random();
//     console.log(`${ir} ${rn}`)
//     ir++;
// }

const imax = 5;
let ir = 0;
let rn = 0;
while (rn < 0.9 && ir < imax){
    rn = Math.random();
    console.log(`${ir} ${rn}`)
    ir++;
}


console.log('DO-WHILE: ------------------------');

    // DO-WHILE
do {
    console.log('ewesgdhdh')
} while (false)

console.log('FOR: ----------------------');

let idw = 0;
do {
    const item = list[idw];
    console.log(item)
    idw++;
} while (idw <list.length);


console.log('MAP: ------------------------');

    // MAP
const mapMarks = [10, 2, 8, 4, 6];
// const doubleMapMarks = [];
const doubleMapMarks = mapMarks.map(mark => mark * 2)
const duaMapMarks = mapMarks.map(n => n + 2);

// iprastas FORas
// for (let i = 0; i < mapMarks.length; i++) {
//     const mark = mapMarks[i];
//     doubleMapMarks.push(mark*2);
// }


console.log(mapMarks)
console.log(doubleMapMarks)
console.log(duaMapMarks)


const listFirstLetters = list.map(item => item[0]);
const listLengths = list.map(item => item.length);
console.log(list);
console.log(listFirstLetters);
console.log(listLengths);


console.log('-----------------------');

const labas = 'labas';
for (let i = 0; i < labas.length; i++) {
    const raide = labas[i];
    console.log(raide);
}

console.log('-----------------------');


const nums = [2148525, 45852, 84562, 859625];
// const numFirstNum = nums.map(n => ('' + n)[0]);
// const numFirstNum = nums.map(n => +('' + n)[0]);
// const numFirstNum = nums.map(n => n);
// const numFirstNum = nums.map(n => ('' + n)[0]);
const numFirstNum = nums.map(n => +('' + n)[0]);
console.log(numFirstNum)



console.log('FILTER: ------------------------');

    // FILTER
    const filterMarks = [10, 2, 8, 4, 6];
    // const goodMarks = filterMarks;
     const goodMarks = filterMarks.filter(n => n >= 7);

    // const filterMarks = [10, 2, 8, 0, 4, 6];       // ------> 0 negrazina
    // const goodMarks = filterMarks.filter(n => n * 0);


console.log(filterMarks);
console.log(goodMarks);

console.log('-----------------------');

// const filteredList = list.filter(item => item.length > 6);
const filteredList = list.filter(item => item.length > 6 && item.length <9);
console.log(filteredList);

console.log('-----------------------');

// MAP + FILTER
console.log('MAP + FILTER: --------------------');
const names = ['Jonas', 'Ona', 'Rasa', 'Petras', 'Maryte', 'Ciubaka'];

// pasilikti tik vardu pirmas raides, kur vardu ilgis yra maziau 6 simboliu
//let modifiedNames = names.filter(name => name.length <6);
// modifiedNames = modifiedNames.map(name => name[0]);

console.log('-----------------------');

const modifiedNames = names.filter(name => name.length < 6).map(name => name[0]);
console.log(modifiedNames);
const modifiedNames2 = names.map(name => name[0]).filter(name => name.length < 6);
console.log(modifiedNames2);

console.log('-----------------------');

// const modifiedNames2 = names.map(name => name.slice(-1)).filter(name => name.length < 6);
// const modifiedNames2 = names.map(name => name[name.length -1]).filter(name => name.length < 6);
// console.log(modifiedNames2);

// console.log('-----------------------');

// const modifiedNames = names
//     .filter(name => name.length < 6)
//     .map(name => name[0]);
// console.log(modifiedNames);

// const modifiedNames2 = names
//     .map(name => name[name.length - 1])
//     .filter(name => name.length < 6);
// console.log(modifiedNames2);


console.log('OTHER LOOPS---------------');

// SORT
// REDUCE
// FOR-EACH













