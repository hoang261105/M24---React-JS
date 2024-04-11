class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let arrStudent = [];
let std = new Student(1, 20, "hoang@gmail.com");
let std2 = new Student(2, 21, "linh@gmail.com");
arrStudent.push(std, std2);
arrStudent.forEach((student, index) => {
    console.log("Thông tin sinh viên", index + 1);
    console.log("Id", student.id);
    console.log("Tuổi", student.age);
    console.log("Email", student.email);


})
