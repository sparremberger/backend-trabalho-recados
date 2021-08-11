"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRecado1628458160675 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableRecado1628458160675 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "recado",
            columns: [
                {
                    name: "uid",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "recado",
                    type: "varchar",
                    length: "500",
                    isUnique: false,
                    isNullable: false,
                },
                {
                    name: "detalhes",
                    type: "varchar",
                    length: "500",
                    isUnique: false,
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false,
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("recado");
    }
}
exports.CreateTableRecado1628458160675 = CreateTableRecado1628458160675;
