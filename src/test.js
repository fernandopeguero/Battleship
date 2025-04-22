import { experiments } from "webpack";
import { Ship } from "./index";

test("test hit method ship class", () => {
    const ship = new Ship(3);

    ship.hit();

    expect(ship.hitCount).toBe(1);
});

test("test if ship been sunk", () => {
    const ship = new Ship(1);

    ship.hit();

    expect(ship.isSunk()).toBe(true);
});

test("test ship correct length", () => {
    const ship = new Ship(3);

    expect(ship.length).toBe(3);
});
