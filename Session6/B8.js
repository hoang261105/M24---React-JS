"use strict";
let firstName = "john";
let lastName = "doe";
// Viết hoa chữ cái đầu của firstName
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
// Viết hoa chữ cái đầu của lastName
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
// Ghép hai chuỗi lại với dấu cách ở giữa và gán cho biến fullName
let fullName = firstName + " " + lastName;
console.log(fullName); // Kết quả: "John Doe"
