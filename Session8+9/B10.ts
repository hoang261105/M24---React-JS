interface Persons {
    name: string;
    age: number;
}

interface Employee extends Persons {
    employeeId: number;
}

// Kiểm tra
let checkObj: Employee = {
    name: "Hoàng",
    age: 19,
    employeeId: 1243,
}

console.log(checkObj);


