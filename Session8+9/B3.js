"use strict";
function isSquare(obj) {
    return obj.kind === "square";
}
function calculateArea(obj) {
    if (isSquare(obj)) {
        return obj.sideLength * 2;
    }
    else {
        return Math.PI * obj.radius * 2;
    }
}
const square = {
    kind: "square",
    sideLength: 6,
};
const circle = {
    kind: "circle",
    radius: 4,
};
console.log(calculateArea(square));
console.log(calculateArea(circle));
