/*
Duomenu tipai:

Primitivus:
- number
- string
- boolean
- null
- undefined
- function

Kompleksiniai:
- array (object)
- object

*/

/*
Zmogus:
- vardas
- pavarde
- dob (day of birth)
    - y
    - m
    - d
    - h
    - min
    - s
- vaiku sarasas:
    - vardas
    - pavarde
    - dob (day of birth)
        - y
        - m
        - d
..................

*/

// Tasko koordinates yra [x, y, z].
const point = {
    x: 2,
    y: -5,
    z: 0,
    // 404: 'not found',
}

// console.log(`Tasko koordinates yra [x, y, z].`);
// console.log(point);
// console.log(point['404']);
// console.log(point[404]);
// console.log(point['x']);
// console.log(point['y']);
// console.log(point['z']);

console.log(`Tasko koordinates yra [${point['x']}, ${point['y']}, ${point['z']}].`);
console.log(`Tasko koordinates yra [${point.x}, ${point.y}, ${point.z}].`);

/*
const taskelis = [
    0: 2,
    1: -5,
    2: 0
]

const taskelis = [
    2,
    5,
    0
]
*/
console.log('************************');

const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    dob: {
        year: 2022,
        month: 1,
        day: 25
    },
    favoriteColors: ['red', 'blue', 'yellow'],
    isMarried: false, // true
    children: [] // [5, 5, 5] - trys vaikai
};

// Name (Vardenis) Surname (Pavardenis) is (not) married.
// const isNot = 'is';
// const isNot = 'is not';

let isNot = 'is';
if (!person.isMarried) {
    // isNot = 'is not;'
     isNot += ' not'
}
console.log(`${person.name} ${person.surname} ${isNot} married.`);

// console.log(`${person.name} ${person.surname} is     married.`);
// console.log(`${person.name} ${person.surname} is not married.`);

console.log('************************');

// Person has N children.
console.log(`Person has ${person.children.length} children.`);

console.log('************************');

// Favorite color is color, color, color.
let colors = '';
for (let i = 0; i < person.favoriteColors.length; i++) {
    const color = person.favoriteColors[i];
    console.log(color);
    colors += color + ', ';
}


// 1 budas atsikratyti ', ' - atimti 2 paskutinius ciklo elementus
// let shortColors = '';
// for (let i = 0; i < colors.length - 2; i++){
// const symbol = colors[i];
// shortColors += symbol;
// }
console.log('************************');

// 2 budas atsikratyti ', ' - panaudoti slice.

const shortColors = colors.slice(0, -2)


// console.log(`Favorite color is ${colors}.`);

console.log(`Favorite color is ${shortColors}.`);




// DOB: yyyy-mm-dd.