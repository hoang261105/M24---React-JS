class Song {
    public readonly id: number;
    private name: string;
    private length: number;
    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }

    getLength(): number {
        return this.length;
    }

    setLength(newLength: number): void {
        this.length = newLength;
    }
}

const song = new Song(1, "Chú ếch con", 120);
song.setName("Lí cây xanh");
song.setLength(150);

console.log(`Name: ${song.getName()}`);
console.log(`Length: ${song.getLength()}`);
