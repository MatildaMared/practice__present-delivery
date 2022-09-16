import { Elf } from "./Elf/Elf";
import { Santa } from "./Santa/Santa";
import * as fs from "fs";

const drunkElf = new Elf();
const santa = new Santa();

const testData = fs.readFileSync(__dirname + "/testData.txt", "utf8");
console.log("testData", testData);

drunkElf.readListOfHousesToVisit(testData);
const deliveringInstructions = drunkElf.provideDeliveringInstructions();

santa.deliverPresents(deliveringInstructions);
const housesVisited = santa.numOfHousesDeliveredTo;
