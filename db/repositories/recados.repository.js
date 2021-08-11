"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recados_entities_1 = require("../entities/recados.entities");
class RecadosRepository {
    async getRecados() {
        const recados = await recados_entities_1.Recado.find();
        return recados.map((recado) => {
            return {
                uid: recado.uid,
                recado: recado.recado,
                detalhes: recado.detalhes,
            };
        });
    }
}
exports.default = RecadosRepository;
