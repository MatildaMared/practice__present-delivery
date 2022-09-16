import { Direction } from "../enums";

export class Elf {
	private _stringOfHousesToVisit: string | undefined = undefined;

	readListOfHousesToVisit(stringOfHousesToVisit: string) {
		this._stringOfHousesToVisit = stringOfHousesToVisit;
	}

	provideDeliveringInstructions(): Direction[] {
		if (!this._stringOfHousesToVisit) {
			throw new Error("I need to read the list of houses to visit first!");
		}

		const deliveringInstructions = this._stringOfHousesToVisit.split("");

		const availableDirections: string[] = Object.values(Direction);

		const filteredDeliveringInstructions = deliveringInstructions.filter(
			(deliveringInstruction) =>
				availableDirections.includes(deliveringInstruction)
		);

		return filteredDeliveringInstructions as Direction[];
	}
}
