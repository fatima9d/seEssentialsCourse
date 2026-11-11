import { CakeBuilder } from "./model/builders/cake.builder";
import { BookBuilder } from "./model/builders/book.builder";
import { ToyBuilder } from "./model/builders/toy.builder";

async function main() {

    const cakeBuilder = new CakeBuilder();

    cakeBuilder.setType("type").setFlavor("flavor").setFilling("filling").setSize(10).setLayers(2)
        .setFrostingType("frostingType").setFrostingFlavor("frostingFlavor")
        .setDecorationType("decorationType").setDecorationColor("decorationColor")
        .setCustomMessage("customMessage").setShape("shape").setAllergies("allergies")
        .setSpecialIngredients("specialIngredients").setPackagingType("packagingType");
    const cake = cakeBuilder.build();


    const bookBuilder = new BookBuilder();

    bookBuilder.setBookTitle("Edge of Eternity")
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

    toyBuilder.setType("Building Blocks")
        .setAgeGroup("5-8 years")
        .setBrand("LEGO")
        .setMaterial("Plastic")
        .setBatteryRequired("No")
        .setEducational("Yes")
        .setPrice(25)
        .setQuantity(2);

    const toy = toyBuilder.build();


    // Display the created objects
    console.log("Cake:", cake);
    console.log("Book:", book);
    console.log("Toy:", toy);
}


main();