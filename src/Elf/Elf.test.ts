import { RobotSanta } from "../RobotSanta/RobotSanta";
import { Santa } from "../Santa/Santa";
import { Elf } from "./Elf";
import * as fs from "fs";
import { House } from "../House/House";

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

		it("returns the correct result given a single present deliverer", () => {
			const elf = new Elf();
			const santa = new Santa();
			elf.readListOfHousesToVisit("^>v<");

			const expected = 4;
			const result = elf.provideDeliveringInstructions([santa]);

			expect(result).toBe(expected);
		});

		it("returns the correct result given multiple present deliverers", () => {
			const elf = new Elf();
			const santa = new Santa();
			const robotSanta = new RobotSanta();
			elf.readListOfHousesToVisit("^v^v^v^v^v");

			const expected = 11;
			const result = elf.provideDeliveringInstructions([santa, robotSanta]);

			expect(result).toBe(expected);
		});

		it("returns the correct result given multiple present deliverers", () => {
			const elf = new Elf();
			const santa = new Santa();
			const robotSanta = new RobotSanta();
			const stringOfDirections = fs.readFileSync(
				__dirname + "/../testData.txt",
				"utf8"
			);
			elf.readListOfHousesToVisit(stringOfDirections);

			const expected = 2631;
			const result = elf.provideDeliveringInstructions([santa, robotSanta]);

			expect(result).toBe(expected);
		});
	});

	describe("calculateNumberOfUniqueHousesVisited method", () => {
		it("returns an array of unique houses given an array of houses", () => {
			const elf = new Elf();
			const arrayOfHouses = [
				new House(0, 0),
				new House(0, 0),
				new House(1, 2),
				new House(3, 3),
				new House(4, 5),
				new House(1, 2),
			];
			const expected = 4;
			const result = elf.calculateNumberOfUniqueHousesVisited(arrayOfHouses);

			expect(result).toBe(expected);
		});
	});
});
