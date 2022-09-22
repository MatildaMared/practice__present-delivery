import { Direction } from "../enums";
import { House } from "../House/House";
import { PresentDeliverer } from "../PresentDeliverer/PresentDeliverer";

export class Elf {
	deliveringInstructions: Direction[] = [];

	readStringOfDirections(stringOfDirections: string) {
		const deliveringInstructions = stringOfDirections.split("");

		const availableDirections: string[] = Object.values(Direction);

		const filteredDeliveringInstructions = deliveringInstructions.filter(
			(deliveringInstruction) =>
				availableDirections.includes(deliveringInstruction)
		);

		this.deliveringInstructions = filteredDeliveringInstructions as Direction[];
	}

	provideDeliveringInstructions(
		stringOfDirections: string,
		presentDeliverers: PresentDeliverer[]
	) {
		if (stringOfDirections.length === 0) {
			throw new Error("Please give me some directions!");
		}

		this.readStringOfDirections(stringOfDirections);

		presentDeliverers.forEach((presentDeliverers) => {
			presentDeliverers.deliverPresent();
		});

		let currentGiftDelivererIndex = 0;
		this.deliveringInstructions.forEach((direction) => {
			presentDeliverers[currentGiftDelivererIndex].move(direction);
			presentDeliverers[currentGiftDelivererIndex].deliverPresent();

			currentGiftDelivererIndex += 1;
			if (currentGiftDelivererIndex === presentDeliverers.length)
				currentGiftDelivererIndex = 0;
		});

		let allHousesVisited: House[] = [];

		presentDeliverers.forEach((presentDeliverer) => {
			allHousesVisited = [
				...allHousesVisited,
				...presentDeliverer.housesVisited,
			];
		});

		return this.calculateNumberOfUniqueHousesVisited(allHousesVisited);
	}

	calculateNumberOfUniqueHousesVisited(allHousesVisited: House[]) {
		const uniqueHousesVisited: House[] = [];

		allHousesVisited.forEach((visitedHouse) => {
			const hasVisitedBefore = uniqueHousesVisited.some((house) => {
				return visitedHouse.x === house.x && visitedHouse.y === house.y;
			});

			if (!hasVisitedBefore) {
				uniqueHousesVisited.push(visitedHouse);
			}
		});

		return uniqueHousesVisited.length;
	}
}
