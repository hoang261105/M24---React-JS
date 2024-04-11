class Department {
    public readonly id: number;
    private name: string;
    private employee: string[];
    constructor(id: number, name: string, employee: string[]) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }

    describe(): void {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
    }
}

let department = new Department(1, "Hoàng", ["Huy", "Linh", "Hương"]);
department.describe();
