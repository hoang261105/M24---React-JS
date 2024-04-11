"use strict";
function calculateSquare(num) {
    if (typeof num === "number") {
        return num * num;
    }
    else if (Array.isArray(num)) {
        let results = num.map((e) => {
            return e * e;
        });
        return results;
    }
    else {
        console.log("Không hợp lệ");
    }
}
console.log(calculateSquare([3, 4, 5, 6, 7]));
console.log(5 && 6);
