class Ship {
    constructor(length = 1) {
        this.length = length;
        this.hitCount = 0;
    }

    hit() {
        if (this.isSunk) return `This ship has been sunk`;

        this.hitCount++;

        if (this.hitCount >= this.length) this.isSunk = true;

        return `Ships hit ${this.hitCount} out of ${this.length}`;
    }

    isSunk() {
        if (this.hitCount === this.length) return true;

        return false;
    }
}

const GameBoard = () => {
    // create function to make board
};
