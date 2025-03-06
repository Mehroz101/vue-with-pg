import express from "express";
import cors from "cors";
import User from "./models/User.js";
import bcrypt from "bcrypt";
const app = express();
app.use(cors());
app.use(express.json())
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
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});