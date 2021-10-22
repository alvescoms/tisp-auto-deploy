"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.get('/', (request, response) => response.send('Express + TypeScript Server'));
app.listen(process.env.SERVER_PORT, () => console.log(`⚡️ [server]: Server is running at https://${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`));
