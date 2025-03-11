import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database"; // ✅ Import database connection

class User extends Model {
  public id!: number;
  public name!: string;

public username! : string;
  public email!: string;
  public password!: string;

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // ✅ Use the database connection
    modelName: "User",
    tableName: "users",
  }
);

export default User;
