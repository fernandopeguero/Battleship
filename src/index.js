class Ship {
    constructor(length = 1) {
        this.length = length;
        this.isSunk = false;
        this.hitCount = 0;
    }

    hit() {
        if (this.isSunk) return `This ship has been sunk`;

        this.hitCount++;

        if (this.hitCount >= this.length) this.isSunk = true;

        return `Ships hit ${this.hitCount} out of ${this.length}`;
    }
}
