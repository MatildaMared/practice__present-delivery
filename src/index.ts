import { Elf } from "./Elf/Elf";
import { Santa } from "./Santa/Santa";
import * as fs from "fs";
import { RobotSanta } from "./RobotSanta/RobotSanta";

const elf = new Elf();
const santa = new Santa();

const stringOfDirections = fs.readFileSync(__dirname + "/testData.txt", "utf8");

console.log("Will visit houses with only one santa! 🎄 🎁");
const totalHousesVisited = elf.provideDeliveringInstructions(
	stringOfDirections,
	[santa]
);

console.log("Total houses visited with only one santa: ", totalHousesVisited);

console.log("-----------------");

console.log("Will visit houses with both santa and robot santa! 🎅 🤖 🎄");
const anotherSanta = new Santa();
const robotSanta = new RobotSanta();

const totalHousesVisitedWithSantaAndRobot = elf.provideDeliveringInstructions(
	stringOfDirections,
	[anotherSanta, robotSanta]
);
console.log(
	"Total houses visited with santa and robot santa: ",
	totalHousesVisitedWithSantaAndRobot
);
