import { Request, Response } from "express";

const express = require("express");
import httpProxy from "http-proxy";
const cors = require("cors");
const app = express();

const proxy = httpProxy.createProxyServer({});
// Use CORS to prevent Cross-Origin Requets issue
app.use(cors());

const TASK_SERVICE_ADDRESSES = [
  "http://localhost:6000",
  "http://localhost:6001",
]; // Add more as needed
let currentIndex = 0;

// Get the status of the API
app.get("/api/status", (req: Request, res: Response) => {
  return res.json({ status: "ok" });
});

// Returns a random quote from the quote api
app.get("/task-services/api/tasks", async (req: Request, res: Response) => {
  const target = TASK_SERVICE_ADDRESSES[currentIndex];
  currentIndex = (currentIndex + 1) % TASK_SERVICE_ADDRESSES.length;

  proxy.web(req, res, { target });
});

app.get("/", (req: Request, res: Response) => {
  return res.send(
    "<h1 style={{textAlign: 'center', width: '100%'}}>Hello World</h1>"
  );
});

// Handle any unknown route
app.get("*", (req: Request, res: Response) => {
  res.status(404);
  return res.json({
    message: "Resource not found",
  });
});

// starts the app
app.listen(5001, () => {
  console.log("API Gateway is listening on port 5001!");
});
