function printValue<T>(...val: T[]): void {
    val.forEach(v => console.log(v));
}

let val1: number;
let val2: undefined;
let val3;
printValue(val1, val2, val3);