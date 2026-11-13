
import { readCSVFile, writeCSVFile } from "../../utils/parser";
import { CSVOrderMapper } from "../../mappers/Order.mapper";
import { CSVCakeMapper } from "../../mappers/Cake.mapper";
import { IOrder } from "../../model/Iorder";
import { OrderRepository } from "./order.repository";

export class CakeOrderRepository extends OrderRepository {
    private mapper = new CSVOrderMapper(new CSVCakeMapper());
    constructor(private readonly filePath: string) {
        super();
    }
    protected async load(): Promise<IOrder[]> {
        // read 2D strings from file
        const csv = await readCSVFile(this.filePath);
        // convert the string into an object
        const mapper = new CSVOrderMapper(new CSVCakeMapper());
        // return the list of objects
        return csv.map(mapper.map.bind(mapper));
    }

    protected async save(orders: IOrder[]): Promise<void> {
        // generate the list of eaders
        const header = [
            "id", "Type", "Flavor", "Filling", "Size", "Layers",
            "Frosting Type", "Frosting Flavor", "Decoration Type",
            "Decoration Color", "Custom Message", "Shape", "Allergies",
            "Special Ingredients", "Packaging Type", "Price", "Quantity"
        ];

        // convert the orders to 2d strings
        const rawItems = orders.map(this.mapper.reverseMap.bind(this.mapper)); // parse.write
        await writeCSVFile(this.filePath, [header, ...rawItems]);
        



    }
   

}