import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/task-services/api/tasks", (req, res) => {
  // Mock task data
  const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    // ...more tasks
  ];
  res.json(tasks);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`TaskService is listening on port ${PORT}`);
});
