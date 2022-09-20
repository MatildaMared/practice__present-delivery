import { Direction } from "../enums";
import { House } from "../House/House";

export interface PresentDeliverer {
	numOfHousesDeliveredTo: number;
	housesVisited: House[];
	currentHouse: House;
	presentsDelivered: number;

	move: (direction: Direction) => void;
	deliverPresent: () => void;
}
