"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recadoController_1 = require("../controllers/recadoController");
const router = express_1.default.Router();
router.route("/recados").post(recadoController_1.storeRecado);
router.route("/recados").get(recadoController_1.getRecados);
router.route("/recados").delete(recadoController_1.delRecado);
exports.default = router;
