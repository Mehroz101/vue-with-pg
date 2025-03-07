import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(4000, () => {
  console.log("Server is running on port 3000");
})
// Export the Express app to be used as a Vercel serverless function
export default app;
