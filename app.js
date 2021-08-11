"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection"));
const recadoRoute_1 = __importDefault(require("./routes/recadoRoute"));
var cors = require("cors");
const app = express_1.default();
dotenv_1.default.config();
//connectDB
const db = new connection_1.default().openConnection();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", recadoRoute_1.default);
app.get("/", (req, res) => {
    res.send("API online!");
});
app.listen(process.env.PORT, () => {
    return console.log(`server is listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT},`);
});
/*function go() {
    //createConnection()
        //.then(async (connection) => {
            console.log("Inserting a new user into the database...");
            const rec = new Recado("kek", "wow");

            await connection.manager.save(rec);
            console.log("Saved a new user with id: " + rec.uid);

            console.log("Loading users from the database...");
            const recs = await connection.manager.find(Recado);
            console.log("Loaded users: ", recs);

            console.log(
                "Here you can setup and run express/koa/any other framework."
            );
        })
        .catch((error) => console.log(error));
}*/
