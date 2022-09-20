import { Direction } from "../enums";
import { House } from "../House/House";

export interface PresentDeliverer {
	move: (direction: Direction) => void;
	deliverPresent: () => void;
}