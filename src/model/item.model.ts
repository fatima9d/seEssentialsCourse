

export enum ItemCategory {
    CAKE = "cake",
     BOOK = "book",
    TOY = "toy",
}

export interface IItem {
    getCategory(): ItemCategory;
}

export class Cake implements IItem {

    private type: string;
    private flavor: string;
    private filling: string;
    private size: number;

    constructor(
        type: string,
        flavor: string,
        filling: string,
        size: number,
  
    ) {
        this.type = type;
        this.flavor = flavor;
        this.filling = filling;
        this.size = size;
   
    }

    getCategory(): ItemCategory {
        return ItemCategory.CAKE;
    }

    getType(): string {
        return this.type;
    }

    getFlavor(): string {
        return this.flavor;
    }

    getFilling(): string {
        return this.filling;
    }

    getSize(): number {
        return this.size;
    }
 
}