function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && !isNaN(parseFloat(x))) {
        x = parseFloat(x);
    }
    if (typeof y === 'string' && !isNaN(parseFloat(y))) {
        y = parseFloat(y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        return 'Invalid arguments';
    }
}

function subtract(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && !isNaN(parseFloat(x))) {
        x = parseFloat(x);
    }
    if (typeof y === 'string' && !isNaN(parseFloat(y))) {
        y = parseFloat(y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x - y;
    } else {
        return 'Invalid arguments';
    }
}

function multiply(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && !isNaN(parseFloat(x))) {
        x = parseFloat(x);
    }
    if (typeof y === 'string' && !isNaN(parseFloat(y))) {
        y = parseFloat(y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x * y;
    } else {
        return 'Invalid arguments';
    }
}

function divide(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && !isNaN(parseFloat(x))) {
        x = parseFloat(x);
    }
    if (typeof y === 'string' && !isNaN(parseFloat(y))) {
        y = parseFloat(y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
        if (y !== 0) {
            return x / y;
        } else {
            return 'Invalid arguments';
        }
    } else {
        return 'Invalid arguments';
    }
}

// Sử dụng hàm
console.log(add(2, 3));             // Kết quả: 5
console.log(add('2', '3'));         // Kết quả: 5
console.log(add('2', 'abc'));       // Kết quả: Invalid arguments

console.log(subtract(5, 2));        // Kết quả: 3
console.log(subtract('5', '2'));    // Kết quả: 3
console.log(subtract('5', 'abc'));  // Kết quả: Invalid arguments

console.log(multiply(2, 3));        // Kết quả: 6
console.log(multiply('2', '3'));    // Kết quả: 6
console.log(multiply('2', 'abc'));  // Kết quả: Invalid arguments

console.log(divide(6, 2));          // Kết quả: 3
console.log(divide('6', '2'));      // Kết quả: 3
console.log(divide('6', 'abc'));    // Kết quả: Invalid arguments