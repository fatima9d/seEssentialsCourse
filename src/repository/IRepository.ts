export type id=string; 
export interface ID {
    getId(): string;
}


export interface IRepository<T extends ID> {
    // Invalid item
    create(item: T): Promise<id>;
    get(id:id): Promise<T>;
    // throw an error if item not found get(id: ID): Promise<T>;
    getAll(): Promise<T[]>;
    // throw item not found || invalid item update(item: T): Promise<void>;
    // throw item not found
    delete(id: id): Promise<void>;
}