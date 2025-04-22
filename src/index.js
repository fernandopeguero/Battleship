export class Ship {
    constructor(length = 1) {
        this.length = length;
        this.hitCount = 0;
    }

    hit() {
        if (this.isSunk()) return `This ship has been sunk`;

        this.hitCount++;

        return `Ships hit ${this.hitCount} out of ${this.length}`;
    }

    isSunk() {
        return this.hitCount >= this.length;
    }
}

class Player {
    constructor() {}
}

const GameBoard = () => {
    // create function to make board

    // takes 2 parameter as a pair of coordinates and determines if the ship was hit
    function receiveAttack() {}
};
