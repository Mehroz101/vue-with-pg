import express from "express";
import cors from "cors";
import User from "./models/user";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
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
        const { fullname,username, email, password } = req.body;
        console.log(req.body)
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Store in DB
        const users = await User.create({ name:fullname, username, email, password: hashedPassword });
    
        res.status(201).json(users);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
      }
})
app.post("/api/login",async(req,res)=>{
  try {
    console.log("enterd in login")
    const {username,password}=req.body;
    const user = await User.findOne({where :{username:username}});
if(user){
  const compPassword = await bcrypt.compare(password,user.password);
  if(compPassword){
    const token = jwt.sign({ id: user.id }, "secret");
    console.log("token: ", token)
    res.status(200).json("login success")
  }
  else{
    res.status(400).json("wrong password");
  }
}
else{
  res.status(400).json("user not found");
}

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
})
app.get("/", (req, res) => {    
    res.send("Hello MOJI!");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
export default app;