"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commande = void 0;
const typeorm_1 = require("typeorm");
let Commande = class Commande {
    constructor(userId, username) {
        this._userId = userId;
        this._username = username;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
};
exports.Commande = Commande;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Commande.prototype, "_userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Commande.prototype, "_username", void 0);
exports.Commande = Commande = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String])
], Commande);
