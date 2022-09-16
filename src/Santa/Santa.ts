import { Direction } from "../enums";
import { House } from "../House/House";

export class Santa {
	private _numOfHousesDeliveredTo: number = 0;
	private _housesVisited: House[] = [];
	private _currentHouse: House = new House(0, 0);

	get numOfHousesDeliveredTo(): number {
		console.log(
			"Ho ho ho! I've delivered presents to " +
				this._numOfHousesDeliveredTo +
				" houses! 🎄"
		);
		return this._numOfHousesDeliveredTo;
	}

	deliverPresents(instructions: Direction[]) {
		console.log("Ho ho ho! I'm delivering presents! 🎁");

		this._currentHouse = new House(0, 0);
		this._housesVisited.push(this._currentHouse);
		this._numOfHousesDeliveredTo += 1;

		instructions.forEach((direction) => {
			this.move(direction);
		});
	}

	move(direction: Direction) {
		let houseToVisit: House;

		switch (direction) {
			case Direction.North:
				houseToVisit = new House(
					this._currentHouse.x,
					this._currentHouse.y + 1
				);
				break;
			case Direction.South:
				houseToVisit = new House(
					this._currentHouse.x,
					this._currentHouse.y - 1
				);
				break;
			case Direction.East:
				houseToVisit = new House(
					this._currentHouse.x + 1,
					this._currentHouse.y
				);
				break;
			case Direction.West:
				houseToVisit = new House(
					this._currentHouse.x - 1,
					this._currentHouse.y
				);
				break;
		}

		const hasVisitedBefore = this._housesVisited.some((house) => {
			return house.x === houseToVisit.x && house.y === houseToVisit.y;
		});

		if (!hasVisitedBefore) {
			this._numOfHousesDeliveredTo += 1;
		}

		this._housesVisited.push(houseToVisit);
		this._currentHouse = houseToVisit;
	}
}
