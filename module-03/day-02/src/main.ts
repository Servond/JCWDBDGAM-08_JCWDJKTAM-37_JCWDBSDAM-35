import express, { Request, Response } from "express";
import { readJson } from "./utils/json";
const PORT = 8080;

const app = express();

app.get("/api", (req: Request, res: Response) => {
  const data = readJson();

  res.json({
    message: "OK",
    data,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
