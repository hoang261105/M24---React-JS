let convert = <T>(arr: T[], num1: number, num2: number) => {
    if (num1 < 0 || num1 >= arr.length || num2 < 0 || num2 >= arr.length) {
        return "Không h?p l?";
    }

    let result = [...arr];
    let temp = result[num1];
    result[num1] = result[num2];
    result[num2] = temp;

    return result;
}

let arr = [1, 3, 4, 5, 9];
console.log(convert(arr, 2, 4));