import logger from "./utils/logger";
import { parseCSV } from './utils/parser';
import { Cake } from "./model/cake.model";

async function main() {

        const cake = new Cake(
            "type", "flavor", "filling",
            10,
            2,
            "frostingType",
            "frostingFlavor",
            "decorationType",
            "decorationColor",
            "customMessage",
            "shape",
            "allergies",
            "specialIngredients",
            "packagingType");
             console.log(cake);
 }