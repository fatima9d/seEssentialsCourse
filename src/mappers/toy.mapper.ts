import { IMapper } from "../mappers/IMapper";
import { ToyBuilder } from "../model/builders/toy.builder";
import { Toy } from "../model/toy.model";

export class XMLToyMapper implements IMapper<Record<string, unknown>, Toy> {

    map(data: Record<string, unknown>): Toy {

        return new ToyBuilder()
            .setType(String(data["Type"]))
            .setAgeGroup(String(data["AgeGroup"]))
            .setBrand(String(data["Brand"]))
            .setMaterial(String(data["Material"]))
            .setBatteryRequired(String(data["BatteryRequired"]))
            .setEducational(String(data["Educational"]))
            .setPrice(Number(data["Price"]))
            .setQuantity(Number(data["Quantity"]))
            .build();
    }
}
