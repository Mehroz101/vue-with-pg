import express from "express";
import cors from "cors";
import User from "./models/user";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors(
  {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  }
));
app.use(express.json())
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("❌ DATABASE_URL is not defined in .env file");
}
app.post("/api/register",async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Store in DB
        const users = await User.create({ name:fullname, email, password: hashedPassword });
    
        res.status(201).json(users);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
      }
})
app.get("/", (req, res) => {    
    res.send("Hello MOJI!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
export default app;