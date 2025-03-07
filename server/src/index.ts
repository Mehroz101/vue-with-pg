import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Export the Express app to be used as a Vercel serverless function
export default app;
