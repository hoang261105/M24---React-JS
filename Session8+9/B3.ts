function isSquare(obj: Square | Circle): obj is Square {
    return obj.kind === "square";
}

function calculateArea(obj: Square | Circle): number {
    if (isSquare(obj)) {
        return obj.sideLength * 2;
    } else {
        return Math.PI * obj.radius * 2;
    }
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

const square: Square = {
    kind: "square",
    sideLength: 6,
}

const circle: Circle = {
    kind: "circle",
    radius: 4,
}

console.log(calculateArea(square));
console.log(calculateArea(circle));