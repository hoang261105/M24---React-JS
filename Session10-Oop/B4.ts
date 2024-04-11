class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    displayInfo(): void {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
        console.log("Year: ", this.year);
        console.log("Company", this.company);
    }
}

let result1 = new Vehicle("Land Cruiser", 2002, "Toyota", 5);
result1.displayInfo(); 