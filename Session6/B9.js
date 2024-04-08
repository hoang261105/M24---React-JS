"use strict";
let sentence = "This is a sample sentence.";
let uniqueCharacters = "";
// Lọc các ký tự duy nhất trong chuỗi
for (let i = 0; i < sentence.length; i++) {
    if (uniqueCharacters.indexOf(sentence[i]) === -1) {
        uniqueCharacters += sentence[i];
    }
}
console.log(uniqueCharacters); // Kết quả: "This amlenc."
