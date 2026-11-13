import { IItem } from "../Iitem";
import { IOrder, Order } from "../order.model";
export class OrderBuilder {

    private item!: IItem;
    private price!: number;
    private quantity!: number;
    private id!: string;

    public static newBuilder(): OrderBuilder {
        return new OrderBuilder();
    }
    setId(id: string): OrderBuilder {
        this.id = id;
        return this;
    }
    setItem(item: IItem): OrderBuilder {
        this.item = item;
        return this;
    }
    setPrice(price: number): OrderBuilder {
        this.price = price;
        return this;
    }
    setQuantity(quantity: number): OrderBuilder {
        this.quantity = quantity;
        return this;
    }
    build(): IOrder {
        return new Order(this.item, this.price, this.quantity, this.id);
    }
}