import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Commande {
    @PrimaryGeneratedColumn("uuid")
    private _id: string | undefined;
    @Column()
    private _userId: string;
    @Column()
    private _username: string;


    constructor(userId: string, username: string) {
        this._userId = userId;
        this._username = username;
    }


    get id(): string | undefined {
        return this._id;
    }

    set id(value: string | undefined) {
        this._id = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}