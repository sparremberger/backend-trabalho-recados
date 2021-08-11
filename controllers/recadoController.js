"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecados = exports.storeRecado = void 0;
const recados_entities_1 = require("../db/entities/recados.entities");
const storeRecado = async (req, res) => {
    const { recado, detalhes } = req.body;
    console.log(req.body);
    const entity = await new recados_entities_1.Recado(recado, detalhes).save();
    return res.status(200).json(entity); //entity
};
exports.storeRecado = storeRecado;
const getRecados = async (req, res) => {
    const recados = await recados_entities_1.Recado.find();
    return res.status(200).json(recados);
};
exports.getRecados = getRecados;
