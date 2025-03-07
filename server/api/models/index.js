"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("../config/config.json")); // Import JSON correctly
const config = config_json_1.default["development"];
// Initialize Sequelize
const sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect, // Ensure the correct type
});
const db = {}; // Explicitly define `db` as an object
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
// Import models
const user_1 = __importDefault(require("./user")); // Ensure the correct import method
db.User = db.User = user_1.default.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "User",
});
exports.default = db;
//# sourceMappingURL=index.js.map