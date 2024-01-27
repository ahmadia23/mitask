import express from "express";

import { Router } from "express-serve-static-core";
import { TaskController } from "../controllers/taskController";
import { TaskRepository } from "../repositories/tasks/taskRepository";
import { TaskService } from "../services/TaskService";
import { ProjectRepository } from "../repositories/tasks/projectRepository";
import { ProjectService } from "../services/ProjectService";
import { ProjectController } from "../controllers/projectController";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

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

export class ProjectApi {
  router: Router;
  project: ProjectController;

  constructor() {
    this.router = express.Router();
    this.project = projectController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/api/projects", this.project.getProjects);
  }
}
