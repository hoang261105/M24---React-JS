function concatArr<T>(arr: T[]) {
    let newArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(concatArr(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(concatArr(arr));