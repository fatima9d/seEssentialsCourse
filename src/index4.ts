import { readCSVFile } from "./utils/parser";
import { parseXML } from "./utils/xmlParser";
import { CSVCakeMapper } from "./mappers/Cake.mapper";
import logger from "./utils/logger";
import { CSVOrderMapper } from "./mappers/Order.mapper";
import { XMLToyMapper } from "./mappers/toy.mapper";

async function main() {
  //  const data = await readCSVFile("src/data/cake orders.csv");
    
   // const cakeMapper = new CSVCakeMapper();

   // const orderMapper = new CSVOrderMapper(cakeMapper);
  //  const orders = data.map(row => orderMapper.map(row));
  //  logger.info("List of orders: %j", orders);
    

const xmlData = await parseXML("src/data/toy orders.xml") as string[][];

const toyMapper = new XMLToyMapper();

const toys = xmlData.map((row: string[]) => toyMapper.map(row));

    logger.info("List of toys: %j", toys);
}
main();





