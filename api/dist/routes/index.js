"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deploy_1 = __importDefault(require("./deploy"));
const router = express_1.default.Router();
router.use('/deploy', deploy_1.default);
exports.default = router;
