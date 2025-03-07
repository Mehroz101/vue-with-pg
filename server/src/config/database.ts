import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is not set. Check your .env file.");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
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

export default sequelize;
