// 1. Union types
/*
    Union Types cho phép đại diện cho nhiều kiểu dữ liệu khác nhau cho một biến, tham số hoặc giá trị trả về.
    Được ký hiệu bằng dấu | giữa các kiểu dữ liệu.
    Giá trị được gán cho biến union type có thể thuộc bất kỳ kiểu dữ liệu nào trong union.
    Khi sử dụng biến union type, chỉ có thể truy cập các thành phần chung của tất cả các kiểu trong union.
    Union Types cho phép kiểm tra kiểu và thực hiện các phép tương tác phù hợp với từng kiểu dữ liệu.
*/

function printID(id: string | number): void {
    console.log(`ID: ${id}`);
}

printID("ABC123"); // ID: ABC123
printID(123456);   // ID: 123456

// 2. Intersection Types
/*
    Intersection Types cho phép tạo ra một kiểu dữ liệu mới bằng việc kết hợp các kiểu dữ liệu khác nhau.
    Được ký hiệu bằng dấu & giữa các kiểu dữ liệu.
    Kiểu dữ liệu mới chỉ chứa các thành phần có trong tất cả các kiểu gốc.
    Intersection Types cho phép sử dụng tất cả các phương thức và thuộc tính từ các kiểu gốc.
*/

interface Car {
    brand: string;
    color: string;
}

interface Electric {
    batteryCapacity: number;
}

type ElectricCar = Car & Electric;

function printCarInfo(car: ElectricCar): void {
    console.log(`Brand: ${car.brand}, Color: ${car.color}, Battery Capacity: ${car.batteryCapacity}`);
}

const tesla: ElectricCar = {
    brand: "Tesla",
    color: "Red",
    batteryCapacity: 75
};

printCarInfo(tesla); // Brand: Tesla, Color: Red, Battery Capacity: 75