// function max() {
//     return 0;
// }

console.log('************************');

// function max(list) {
//     return list[0];
// }

console.log('************************');

// const { addListener } = require("nodemon");

function max(list) {
    if (typeof list !== 'object') {
        return 'ERROR: Pateikta netinkamo tipo reiksme'
    }
    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias'
    }

    // let biggest = 0;
    // let biggest = -Infinity;
    let biggest = list[0];

    for (let i = 1; i < list.length; i++) {
        const n = list [i];
        if (n > biggest) {
            biggest = n; 
        }
    }



    // for (let i = 0; i < addListener.length; i++) {
    //     const n = list [n];
    //     if (n > biggest) {
    //         biggest = n; 
    //     }
    // }

    return biggest;
}

// console.log(max(true), '-->', 'ERROR')
// console.log(max('asd'), '-->', 'ERROR')
// console.log(max(NaN), '-->', 'ERROR')
// console.log(max(Infinity), '-->', 'ERROR')
// console.log(max(-Infinity), '-->', 'ERROR')


console.log(max([1]), '-->', 1);
console.log(max([5]), '-->', 5);
console.log(max([1, 2, 3]), '-->', 3);
console.log(max([-5, 78, 14, 0, 18]), '-->', 78);
console.log(max([69, 69, 69, 69, 66]), '-->', 69);
console.log(max([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(max('pomidoras'), '-->', 'ERROR');
console.log(max([]), '-->', 'ERROR');

console.log(max([1, true, 'labas', [], [5, 8], [''], ['a'], ['a', 'sdgf'], 2, 3]), '-->', 3);



console.log(max(), '-->', 'ERROR');




