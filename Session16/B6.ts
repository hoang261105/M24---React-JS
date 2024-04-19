function Compare<T, U>(num1: T, num2: U): boolean {
    return num1 === num2;
}

let num1: string = "2";
let num2: number = 2;

console.log(Compare(num1, num2));