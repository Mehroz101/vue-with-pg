import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default User;
