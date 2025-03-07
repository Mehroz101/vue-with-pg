"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // ✅ Load .env variables
if (!process.env.DATABASE_URL) {
    throw new Error("❌ DATABASE_URL is not set. Check your .env file.");
}
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
sequelize
    .authenticate()
    .then(() => console.log("✅ Connected to Supabase PostgreSQL"))
    .catch((err) => console.error("❌ Database connection error:", err.message));
exports.default = sequelize;
//# sourceMappingURL=database.js.map