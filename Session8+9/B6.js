"use strict";
function isString(str) {
    if (typeof str === "string") {
        console.log(str);
    }
    else if (Array.isArray(str)) {
        str.forEach(word => {
            console.log(word);
        });
    }
}
isString("Hello World");
