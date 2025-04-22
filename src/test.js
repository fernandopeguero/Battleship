import { Ship } from "./index";

test("test hit method ship class", () => {
    const ship = new Ship(3);

    ship.hit();

    expect(ship.hitCount).toBe(1);
});
