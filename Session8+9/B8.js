"use strict";
function matchObj(obj1, obj2) {
    const matchedObject = Object.assign(Object.assign({}, obj1), obj2);
    return matchedObject;
}
let obj1 = {
    name: "Hoàng",
    age: 18,
};
let obj2 = {
    job: "Developer",
    address: "Hà Nội",
};
const answer = matchObj(obj1, obj2);
console.log(answer);
