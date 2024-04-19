"use strict";
function recursiveObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
};
let obj2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        }
    },
    g: 10,
};
console.log(recursiveObj(obj1, obj2));
