"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deployController_1 = __importDefault(require("../controllers/deployController"));
const router = express_1.default.Router();
router.post('/', (request, response) => {
    const body = request.body;
    console.log(body);
    deployController_1.default.deploy();
    response.send('Deploy endpoint adasdasd');
});
exports.default = router;
