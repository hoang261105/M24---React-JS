"use strict";
function cvAccount(name1, age, job) {
    const person = [
        {
            name: name1,
            age: age,
            job: job,
        }
    ];
    return person;
}
let result = cvAccount("Hoàng", 18, "Developer");
console.log(result);
