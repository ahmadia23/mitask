import express from "express";

import { Router } from "express-serve-static-core";
import { TaskController } from "../controllers/taskController";
import { TaskRepository } from "../repositories/tasks/taskRepository";
import { TaskService } from "../services/TaskService";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

export class TaskApi {
  router: Router;
  taskController: TaskController;

  constructor() {
    this.router = express.Router();
    this.taskController = taskController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/api/tasks", this.taskController.getTasks);
  }
}
