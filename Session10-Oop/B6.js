"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getLength() {
        return this.length;
    }
    setLength(newLength) {
        this.length = newLength;
    }
}
const song = new Song(1, "Chú ếch con", 120);
song.setName("Lí cây xanh");
song.setLength(150);
console.log(`Name: ${song.getName()}`);
console.log(`Length: ${song.getLength()}`);
