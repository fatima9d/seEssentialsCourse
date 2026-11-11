
import logger from "../../utils/logger";
import { Book } from "../book.model";

export class BookBuilder {

    private orderId!: string;
    private bookTitle!: string;
    private author!: string;
    private genre!: string;
    private format!: string;
    private language!: string;
    private publisher!: string;
    private specialEdition!: string;
    private packaging!: string;
    private price!: number;
    private quantity!: number;

    setOrderId(orderId: string): BookBuilder {
        this.orderId = orderId;
        return this;
    }

    setBookTitle(bookTitle: string): BookBuilder {
        this.bookTitle = bookTitle;
        return this;
    }

    setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    setFormat(format: string): BookBuilder {
        this.format = format;
        return this;
    }

    setLanguage(language: string): BookBuilder {
        this.language = language;
        return this;
    }

    setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    setSpecialEdition(specialEdition: string): BookBuilder {
        this.specialEdition = specialEdition;
        return this;
    }

    setPackaging(packaging: string): BookBuilder {
        this.packaging = packaging;
        return this;
    }

    setPrice(price: number): BookBuilder {
        this.price = price;
        return this;
    }

    setQuantity(quantity: number): BookBuilder {
        this.quantity = quantity;
        return this;
    }

    build(): Book {

        const requiredProperties = [
            this.orderId,
            this.bookTitle,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging,
            this.price,
            this.quantity
        ];

        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required properties, could not build a book");
                throw new Error("Missing required properties");
            }
        }

        return new Book(
            this.orderId,
            this.bookTitle,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging,
            this.price,
            this.quantity
        );
    }
}
