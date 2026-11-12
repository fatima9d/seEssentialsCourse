import { IMapper } from "../mappers/IMapper";
import { ToyBuilder } from "../model/builders/toy.builder";
import { Toy } from "../model/toy.model";

export class XMLToyMapper implements IMapper<string[], Toy> {

    map(data: string[]): Toy {

        return new ToyBuilder()
            .setType(data[1])
            .setAgeGroup(data[2])
            .setBrand(data[3])
            .setMaterial(data[4])
            .setBatteryRequired(data[5])
            .setEducational(data[6])
            .setPrice(parseInt(data[7]))
            .setQuantity(parseInt(data[8]))
            .build();
    }
}
