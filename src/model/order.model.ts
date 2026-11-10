import { IItem } from "./item.model";

export interface Order {
    getItem(): IItem;
    getPrice(): number;
    getQuantity(): number;
    getId(): String;
}

export class Order implements Order {

    constructor(
        private item: IItem,
        private price: number,
        private quantity: number,
        private id: string
    ) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
        this.id = id;

          }

    getItem(): IItem {
        return this.item;
    }
    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getId(): string {
        return this.id;
    }
}
