"use strict";
// 1. Union types
/*
    Union Types cho phép đại diện cho nhiều kiểu dữ liệu khác nhau cho một biến, tham số hoặc giá trị trả về.
    Được ký hiệu bằng dấu | giữa các kiểu dữ liệu.
    Giá trị được gán cho biến union type có thể thuộc bất kỳ kiểu dữ liệu nào trong union.
    Khi sử dụng biến union type, chỉ có thể truy cập các thành phần chung của tất cả các kiểu trong union.
    Union Types cho phép kiểm tra kiểu và thực hiện các phép tương tác phù hợp với từng kiểu dữ liệu.
*/
function printID(id) {
    console.log(`ID: ${id}`);
}
printID("ABC123"); // ID: ABC123
printID(123456); // ID: 123456
function printCarInfo(car) {
    console.log(`Brand: ${car.brand}, Color: ${car.color}, Battery Capacity: ${car.batteryCapacity}`);
}
const tesla = {
    brand: "Tesla",
    color: "Red",
    batteryCapacity: 75
};
printCarInfo(tesla); // Brand: Tesla, Color: Red, Battery Capacity: 75
