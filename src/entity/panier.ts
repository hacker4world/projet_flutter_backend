import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Panier {
    @PrimaryGeneratedColumn("uuid")
    private _id: string | undefined;
    @Column()
    private _userId: string;
    @Column()
    private _articleId: string;


    constructor(userId: string, articleId: string) {
        this._userId = userId;
        this._articleId = articleId;
    }


    get id(): string | undefined {
        return this._id;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get articleId(): string {
        return this._articleId;
    }

    set articleId(value: string) {
        this._articleId = value;
    }
}