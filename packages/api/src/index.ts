import express, { Request, Response } from "express";
import { getApplications } from "./getApplications";

const app = express();
const port = process.env["PORT"] || 3031;

app.get("/applications", async (req: Request, res: Response) => {
    const applications = await getApplications();
    res.status(200).json(applications);
});

app.get("/__health", (req: Request, res: Response) => {
  res.status(200).json({ status: 200 });
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}.`);
});
