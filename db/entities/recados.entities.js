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
exports.Recado = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Recado = class Recado extends typeorm_1.BaseEntity {
    constructor(recado, detalhes, uid, createdAt, updatedAt) {
        super();
        this.recado = recado;
        this.detalhes = detalhes;
        this.uid = uid;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    beforeInsert() {
        this.uid = uuid_1.v4();
        this.createdAt = new Date(Date.now());
        this.updatedAt = new Date(Date.now());
    }
    beforeUpdate() {
        this.updatedAt = new Date(Date.now());
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Recado.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recado.prototype, "recado", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recado.prototype, "detalhes", void 0);
__decorate([
    typeorm_1.Column({ name: "created_at" }),
    __metadata("design:type", Date)
], Recado.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: "updated_at" }),
    __metadata("design:type", Date)
], Recado.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Recado.prototype, "beforeInsert", null);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Recado.prototype, "beforeUpdate", null);
Recado = __decorate([
    typeorm_1.Entity({ name: "recado" }),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date])
], Recado);
exports.Recado = Recado;
