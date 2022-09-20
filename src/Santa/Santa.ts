import { Direction } from "../enums";
import { House } from "../House/House";
import { PresentDeliverer } from "../PresentDeliverer/PresentDeliverer";

export class Santa implements PresentDeliverer {
	numOfHousesDeliveredTo: number = 0;
	housesVisited: House[] = [];
	currentHouse: House = new House(0, 0);
	presentsDelivered: number = 0;

	move(direction: Direction) {
		let houseToVisit: House;

		switch (direction) {
			case Direction.North:
				houseToVisit = new House(
					this.currentHouse.x,
					this.currentHouse.y + 1
				);
				break;
			case Direction.South:
				houseToVisit = new House(
					this.currentHouse.x,
					this.currentHouse.y - 1
				);
				break;
			case Direction.East:
				houseToVisit = new House(
					this.currentHouse.x + 1,
					this.currentHouse.y
				);
				break;
			case Direction.West:
				houseToVisit = new House(
					this.currentHouse.x - 1,
					this.currentHouse.y
				);
				break;
		}

		this.currentHouse = houseToVisit;
	}

	deliverPresent() {
		this.presentsDelivered += 1;

		const hasVisitedBefore = this.housesVisited.some((house) => {
			return house.x === this.currentHouse.x && house.y === this.currentHouse.y;
		});

		if (!hasVisitedBefore) {
			this.numOfHousesDeliveredTo += 1;
		}

		this.housesVisited.push(this.currentHouse);
		this.currentHouse = this.currentHouse;
	}
}
