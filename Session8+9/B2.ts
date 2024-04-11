type Person = {
    name: string;
    age: number;
    address: object;
}

let person1: object = {
    name: "Hoàng",
    age: 18,
    address: {
        nation: "Việt Nam",
        street: "Nguyễn Trãi"
    }
}
function validatePerson(obj: any): boolean {
    const person: Person & typeof obj = obj as Person & typeof obj; // Gán giá trị của obj cho biến person và đồng thời áp dụng intersection type cho person.
    // Toán tử As dùng để xác nhận kiểu dữ liệu
    return (
        typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object" &&
        person.address !== null
    );
}


