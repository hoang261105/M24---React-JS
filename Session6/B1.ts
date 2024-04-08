function cvAccount(name1: string, age: number, job: string) {
    const person = [
        {
            name: name1,
            age: age,
            job: job,
        }
    ]
    return person;
}

let result = cvAccount("Hoàng", 18, "Developer");
console.log(result);
