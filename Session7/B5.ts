// Sự khác nhau giữa any và unknown
// Any: Không chặt chẽ và cũng chưa biết kiểu dữ liệu, có thể gán cho bất kỳ kiểu dữ liệu nào
// Unknown: Tương tự như any nhưng có tính chặt chẽ hơn

function typeAnys(userName: unknown): void {
    if (typeof userName == "string") {
        console.log(userName.toUpperCase());
    } else {
        console.log("Không phải là string");

    }
}
typeAnys("Tràng");

function typeAny1(userName: any): void {
    console.log(userName.toUpperCase());
}
typeAny1("Trinh");
