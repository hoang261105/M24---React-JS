function check<T>(a: T): void {
    if (a) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

let check1: boolean = true;
check<boolean>(check1);
