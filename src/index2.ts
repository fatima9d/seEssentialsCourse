
import path from 'path';
import {readCSVFile} from './utils/parser';
import logger from "./utils/logger";

const csvfilePath = path.resolve(__dirname, './data/cake orders.csv');


async function main() {

  try {

        const products = await readCSVFile(csvfilePath);
        logger.info('CSV Parser Result:');
        for (const product of products) {
            logger.info(product + '\n');
        }


    } catch (error) {
        logger.error('Parser test failed:', error);
    }



}






  


main();

