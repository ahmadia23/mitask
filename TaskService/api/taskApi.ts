import express from "express";

import { TaskController } from "../controllers/taskController";
import { TaskRepository } from "../repositories/taskRepository";
import { TaskService } from "../services/TaskService";
import { Router } from "express-serve-static-core";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

export class TaskApi {
  router: Router;
  taskController: TaskController;

  constructor(taskController: TaskController) {
    this.router = express.Router();
    this.initializeRoutes();
    this.taskController = taskController;
  }

  private initializeRoutes() {
    this.router.get("/tasks");
  }
}
