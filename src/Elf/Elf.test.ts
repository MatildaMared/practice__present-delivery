import { Elf } from "./Elf";

describe("Elf", () => {
	describe("readListsOfHousesToVisit", () => {
		console.log(
			"I'm trying to read the list of houses to visit, but I'm feeling a little drunk... 🥴"
		);

		it("reads the list of houses to visit", () => {
			const elf = new Elf();
			elf.readListOfHousesToVisit(">");
		});
	});

	describe("provideInstructions method", () => {
		console.log(
			"I'm trying to provide instructions, I hope I don't mess up... 🥴"
		);

		it("returns an array of directions", () => {
			const stringOfDirections = "^^>v<";
			const elf = new Elf();
			elf.readListOfHousesToVisit(stringOfDirections);

			const result = elf.provideDeliveringInstructions();

			const expected = stringOfDirections.split("");

			expect(result).toEqual(expected);
		});

		it("throws an error if the provideInstructionsmethod is called before reading the string of directions", () => {
			const elf = new Elf();

			expect(() => elf.provideDeliveringInstructions()).toThrowError(
				"I need to read the list of houses to visit first!"
			);
		});
	});
});
