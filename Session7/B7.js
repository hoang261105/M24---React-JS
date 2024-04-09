"use strict";
class Student {
    constructor(id, name, className) {
        this.id = id;
        this.name = name;
        this.class = className;
    }
}
// Khởi tạo mảng sinh viên
const student = [
    new Student(1, "Linh", "12A10"),
    new Student(2, "Hương", "12A9"),
    new Student(3, "Nhi", "12A9"),
    new Student(4, "Ngọc", "12A9"),
    new Student(5, "Ly", "12A10"),
];
// Hàm lọc sinh viên theo lớp
function filterStudentsByClass(studentArray, className) {
    return studentArray.filter((student) => student.class === className);
}
// Sử dụng hàm để lấy danh sách sinh viên trong lớp A
const classAStudents = filterStudentsByClass(student, "12A10");
console.log(classAStudents);
