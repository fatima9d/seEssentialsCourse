import { CakeBuilder } from "./model/builders/cake.builder";
import { BookBuilder } from "./model/builders/book.builder";
import { ToyBuilder } from "./model/builders/toy.builder";
import logger from './utils/logger';
import { readCSVFile } from "./utils/parser";
import { CSVCakeMapper } from "./mappers/Cake.mapper";
async function main() {

    const data = await readCSVFile("./src/data/cake orders.csv");
    const mapper = new CSVCakeMapper();
    const cakes = data.map(mapper.map);
    logger.info("list of cakes: \n %o",cakes);


    const bookBuilder = new BookBuilder();

    bookBuilder.setOrderId("B001")
        .setBookTitle("Edge of Eternity")
        .setAuthor("Ken Follett")
        .setGenre("Historical Fiction")
        .setFormat("Hardcover")
        .setLanguage("English")
        .setPublisher("Penguin")
        .setSpecialEdition("No")
        .setPackaging("Standard")
        .setPrice(12)
        .setQuantity(5);

    const book = bookBuilder.build();

    const toyBuilder = new ToyBuilder();

    toyBuilder.setOrderId("T001")
        .setType("Building Blocks")
        .setAgeGroup("5-8 years")
        .setBrand("LEGO")
        .setMaterial("Plastic")
        .setBatteryRequired("No")
        .setEducational("Yes")
        .setPrice(25)
        .setQuantity(2);

    const toy = toyBuilder.build();


    // Display the created objects
    console.log("Cake:", cakes);
    console.log("Book:", book);
    console.log("Toy:", toy);
}


main();