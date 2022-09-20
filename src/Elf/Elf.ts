import { Direction } from "../enums";
import { House } from "../House/House";
import { PresentDeliverer } from "../PresentDeliverer/PresentDeliverer";
import { Santa } from "../Santa/Santa";

export class Elf {
	deliveringInstructions: Direction[] = [];

	readListOfHousesToVisit(stringOfHousesToVisit: string) {
		const deliveringInstructions = stringOfHousesToVisit.split("");

		const availableDirections: string[] = Object.values(Direction);

		const filteredDeliveringInstructions = deliveringInstructions.filter(
			(deliveringInstruction) =>
				availableDirections.includes(deliveringInstruction)
		);

		this.deliveringInstructions = filteredDeliveringInstructions as Direction[];
	}

	provideDeliveringInstructions(presentDeliverers: PresentDeliverer[]) {
		if (this.deliveringInstructions.length === 0) {
			throw new Error("I need to read a list of houses to visit first!");
		}

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

		return this.calculateNumberOfUniqueHousesVisited(presentDeliverers);
	}

	calculateNumberOfUniqueHousesVisited(presentDeliverers: PresentDeliverer[]) {
		let allHousesVisited: House[] = [];

		presentDeliverers.forEach((presentDeliverer) => {
			allHousesVisited = [
				...allHousesVisited,
				...presentDeliverer.housesVisited,
			];
		});

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
