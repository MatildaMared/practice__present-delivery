import { Elf } from "../Elf/Elf";
import { Santa } from "./Santa";
import * as fs from "fs";

describe("Santa", () => {
	it("delivers presents to the correct amount of houses", () => {
		const santa = new Santa();
		const elf = new Elf();
		const stringOfDirections = "^>v<";
		const expected = 4;

		elf.provideDeliveringInstructions(stringOfDirections, [santa]);
		const result = santa.numOfHousesDeliveredTo;

		expect(result).toBe(expected);
	});

	it("delivers presents to the correct amount of houses", () => {
		const santa = new Santa();
		const elf = new Elf();
		const stringOfDirections = fs.readFileSync(
			__dirname + "/../testData.txt",
			"utf8"
		);
		const expected = 2572;

		elf.provideDeliveringInstructions(stringOfDirections, [santa]);
		const result = santa.numOfHousesDeliveredTo;

		expect(result).toBe(expected);
	});
});
