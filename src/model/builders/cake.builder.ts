import logger from "../../utils/logger";
import { Cake } from "../cake.model";
export class CakeBuilder {

    private type!: string;
    private flavor!: string;
    private filling!: string;
    private size!: number;
    private layers!: number;
    private frostingType!: string;
    private frostingFlavor!: string;
    private decorationType!: string;
    private decorationColor!: string;
    private customMessage!: string;
    private shape!: string;
    private allergies!: string;
    private specialIngredients!: string;
    private packagingType!: string;

    setType(type: string): void {
        this.type = type;
    }

    setFlavor(flavor: string): void {
        this.flavor = flavor;
    }

    setFilling(filling: string): void {
        this.filling = filling;
    }

    setSize(size: number): void {
        this.size = size;
    }

    setLayers(layers: number): void {
        this.layers = layers;
    }

    setFrostingType(frostingType: string): void {
        this.frostingType = frostingType;
    }

    setFrostingFlavor(frostingFlavor: string): void {
        this.frostingFlavor = frostingFlavor;
    }

    setDecorationType(decorationType: string): void {
        this.decorationType = decorationType;
    }

    setDecorationColor(decorationColor: string): void {
        this.decorationColor = decorationColor;
    }

    setCustomMessage(customMessage: string): void {
        this.customMessage = customMessage;
    }

    setShape(shape: string): void {
        this.shape = shape;
    }

    setAllergies(allergies: string): void {
        this.allergies = allergies;
    }

    setSpecialIngredients(specialIngredients: string): void {
        this.specialIngredients = specialIngredients;
    }

    setPackagingType(packagingType: string): void {
        this.packagingType = packagingType;
    }


    build(): Cake {

        const requiredProperties = [
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType
        ];

        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required properties, could not build a cake"); 
                throw new Error("Missing required properties");
            }}

            return new Cake(
                this.type,
                this.flavor,
                this.filling,
                this.size,
                this.layers,
                this.frostingType,
                this.frostingFlavor,
                this.decorationType,
                this.decorationColor,
                this.shape,
                this.customMessage,
                this.allergies,
                this.specialIngredients,
                this.packagingType);
        }


    }