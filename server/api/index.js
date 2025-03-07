"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));
app.use(express_1.default.json());
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("❌ DATABASE_URL is not defined in .env file");
}
app.post("/api/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email, password } = req.body;
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Store in DB
        const users = yield user_1.default.create({ name: fullname, email, password: hashedPassword });
        res.status(201).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}));
app.get("/", (req, res) => {
    res.send("Hello MOJI!");
});
exports.default = app;
//# sourceMappingURL=index.js.map