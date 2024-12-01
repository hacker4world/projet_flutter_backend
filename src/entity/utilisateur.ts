import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    private _id: string | undefined;
    @Column() private _name: string;
    @Column() private _lastName: string;
    @Column() private _email: string;
    @Column() private _password: string;
    @Column() private _phoneNumber: string;
    @Column() private _accountType: string;


    constructor(name: string, lastName: string, email: string, password: string, phoneNumber: string, accountType: string) {
        this._name = name;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._accountType = accountType;
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

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get accountType(): string {
        return this._accountType;
    }

    set accountType(value: string) {
        this._accountType = value;
    }
}