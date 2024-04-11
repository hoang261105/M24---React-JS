function matchObj(obj1: object, obj2: object): object {
    const matchedObject: object & typeof obj1 & typeof obj2 = { ...obj1, ...obj2 };
    return matchedObject;
}

let obj1: object = {
    name: "Hoàng",
    age: 18,
};

let obj2: object = {
    job: "Developer",
    address: "Hà Nội",
}

const answer = matchObj(obj1, obj2);
console.log(answer);
