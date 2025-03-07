import { Sequelize, DataTypes } from "sequelize";
import { Dialect } from "sequelize/types"; // Ensure proper typing
import configData from "../config/config.json"; // Import JSON correctly

const config = configData["development"];

// Initialize Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect as Dialect, // Ensure the correct type
  }
);

const db: any = {}; // Explicitly define `db` as an object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
import UserModel from "./user"; // Ensure the correct import method
db.User = db.User = UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default db;
