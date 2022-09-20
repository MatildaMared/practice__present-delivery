import { Elf } from "./Elf";

describe("Elf", () => {
	describe("readListsOfHousesToVisit", () => {
		it("reads the list of houses to visit", () => {
			const elf = new Elf();
			elf.readListOfHousesToVisit(">v");

			const expected = [">", "v"];
			const result = elf.deliveringInstructions;

			expect(result).toEqual(expected);
		});
	});

	describe("provideInstructions method", () => {
		it("throws an error if the provideInstructionsmethod is called before reading the string of directions", () => {
			const elf = new Elf();

			expect(() => elf.provideDeliveringInstructions([])).toThrowError(
				"I need to read a list of houses to visit first!"
			);
		});
	});
});
