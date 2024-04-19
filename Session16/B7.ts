function performOperations<T, U>(num1: T, num2: U): void {
    let num3: number;

    // Cộng
    num3 = +num1 + +num2;
    console.log("Kết quả cộng:", num3);

    // Trừ
    num3 = +num1 - +num2;
    console.log("Kết quả trừ:", num3);

    // Nhân
    num3 = +num1 * +num2;
    console.log("Kết quả nhân:", num3);

    // Chia
    num3 = +num1 / +num2;
    console.log("Kết quả chia:", num3);
}

let num1: number = 10;
let num2: number = 5;
let num3: number;

performOperations<number, number>(num1, num2);

num1 = "10" as any;
num2 = true as any;

performOperations<string, boolean>(num1, num2);