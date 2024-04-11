function parseInput(str: string): number | boolean | string | null | undefined {
    if (str === "number") {
        return 4;
    } else if (str === "boolean") {
        return true;
    } else if (str === "string") {
        return "Hello World";
    } else if (str === "null") {
        return null;
    } else if (str === "undefined") {
        return undefined;
    } else {
        return "Không tìm thấy kiểu dữ liệu";
    }
}
console.log(parseInput("number"));



