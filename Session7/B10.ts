function removeFalsy(obj: Record<string, any>): void {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];
        }
    }
}

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
}

removeFalsy(obj);
console.log(obj);
