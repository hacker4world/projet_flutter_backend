import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("uuid")
    private _id: string | undefined;
    @Column()
    private _name: string;
    @Column()
    private _price: number;
    @Column()
    private _image: string;


    constructor(name: string, price: number, image: string) {
        this._name = name;
        this._price = price;
        this._image = image;
    }


    get id(): string | undefined {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}