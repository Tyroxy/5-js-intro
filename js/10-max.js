/*
function x(a) {
    duomenu (input) validacija
    logika
    rezultato validacija
    rezultato grazinimas
}

*/

                        // function isRealNumber(num) {
                        //     return typeof num === 'number' && isFinite(num);
                        // }


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
    // if (typeof list !== 'object') {
    //     return 'ERROR: Pateikta netinkamo tipo reiksme'
    if (!Array.isArray(list)) {
        return 'ERROR: privalo buti masyvas'
         // return 'ERROR: Pateikta netinkamo tipo reiksme'

    }


    if (list.length === 0) {
        return 'ERROR: masyvas privalo buti ne tuscias'
        // return 'ERROR: pateiktas sarasas negali buti tuscias'
    }

    // let biggest = 0;
    let biggest = -Infinity;
    
    //let biggest = list[0];

    // for (let i = 1; i < list.length; i++) {
    //     const n = list [i];
    //     if (n > biggest) {
    //         biggest = n; 
    //     }
    // }

    // for (let i = 1; i < list.length; i++) {
    //     const n = list [i];
    //     if (typeof n === 'number' && n > biggest) {
    //         biggest = n; 
    //     }
    // }

    // for (let i = 1; i < list.length; i++) {
    for (let i = 0; i < list.length; i++) { 
        const n = list [i];
                            // if (isRealNumber(n) && n > biggest) {
                            //     biggest = n; 
                            // }
        if (typeof n === 'number' 
        && isFinite(n) 
        && n > biggest) {
            biggest = n; 
        }
    }


    // for (let i = 0; i < addListener.length; i++) {
    //     const n = list [n];
    //     if (n > biggest) {
    //         biggest = n; 
    //     }
    // }

    if (biggest === -Infinity) {
        return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus';
    }

    return biggest;
}

// console.log(max(true), '-->', 'ERROR')
// console.log(max('asd'), '-->', 'ERROR')
// console.log(max(NaN), '-->', 'ERROR')
// console.log(max(Infinity), '-->', 'ERROR')
// console.log(max(-Infinity), '-->', 'ERROR')

console.log(max('pomidoras'), '-->', 'ERROR');
console.log(max([]), '-->', 'ERROR');
console.log(max(Infinity), '-->', 'ERROR');
console.log(max(NaN), '-->', 'ERROR');
console.log(max({}), '-->', 'ERROR');
console.log(max(null), '-->', 'ERROR');
console.log(max(undefined), '-->', 'ERROR');
console.log(max([Infinity]), '-->', 'ERROR');
console.log(max([-Infinity, -Infinity, -Infinity]), '-->', 'ERROR');

console.log(max([1]), '-->', 1);
console.log(max([5]), '-->', 5);
console.log(max([1, 2, 3]), '-->', 3);
console.log(max([-5, 78, 14, 0, 18]), '-->', 78);
console.log(max([69, 69, 69, 69, 66]), '-->', 69);
console.log(max([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);

console.log(max([1, true, 'labas', [], [5, 8], [''], ['a'], ['a', 'sdgf'], 2, 3]), '-->', 3);
console.log(max([-1, NaN, -8, -2, -3]), '-->', -1);
console.log(max([1, NaN, 8, 2, 3]), '-->', 8);
console.log(max([1, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(max([1, NaN, Infinity, -Infinity, 8, 2, 3]), '-->', 8);
console.log(max([Infinity, 8]), '-->', 8);
console.log(max([8, Infinity]), '-->', 8);


// extra
console.log(max([8, [2, 14], 77, [123, 4]]), '-->', 123);
console.log(max([8, [2, [777], 14], 77, [123, 4]]), '-->', 777);
console.log(max([8, [2, [777, [1, 2, 888]], 14], 77, [123, 4]]), '-->', 888);