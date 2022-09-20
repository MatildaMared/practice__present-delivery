import { Direction } from "../enums";
import { PresentDeliverer } from "../PresentDeliverer/PresentDeliverer";
import { Santa } from "../Santa/Santa";

export class Elf {
	private _deliveringInstructions: Direction[] = [];

	readListOfHousesToVisit(stringOfHousesToVisit: string) {
		const deliveringInstructions = stringOfHousesToVisit.split("");

		const availableDirections: string[] = Object.values(Direction);

		const filteredDeliveringInstructions = deliveringInstructions.filter(
			(deliveringInstruction) =>
				availableDirections.includes(deliveringInstruction)
		);

		this._deliveringInstructions =
			filteredDeliveringInstructions as Direction[];
	}

	provideDeliveringInstructions(giftDeliverers: PresentDeliverer[]) {
		if (giftDeliverers.length === 1) {
			giftDeliverers[0].deliverPresent();

			this._deliveringInstructions.forEach((direction) => {
				giftDeliverers[0].move(direction);
				giftDeliverers[0].deliverPresent();
			});
		} else {
			// do something
		}
	}
}
