import express, { NextFunction, Request, Response } from "express";
// import { jwt } from "jsonwebtoken";

import { Router } from "express-serve-static-core";
import { TaskController } from "../controllers/taskController";
import { TaskRepository } from "../repositories/tasks/taskRepository";
import { TaskService } from "../services/TaskService";
import { ProjectRepository } from "../repositories/tasks/projectRepository";
import { ProjectService } from "../services/ProjectService";
import { ProjectController } from "../controllers/projectController";
import { UserRepository } from "../repositories/users/userRepository";
import { UserService } from "../services/UserService";
import { UserController } from "../controllers/userController";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export class Api {
  router: Router;
  taskController: TaskController;
  project: ProjectController;
  userController: UserController;

  constructor() {
    this.router = express.Router();
    this.taskController = taskController;
    this.userController = userController;
    this.project = projectController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/api/tasks", this.taskController.getTasks);
    this.router.get(
      "/api/tasks?:title&:description",
      this.taskController.getTasksByParamsQuery
    );
    this.router.get("/api/tasks/:id", this.taskController.getTask);
    this.router.delete("/api/tasks/:id", this.taskController.removeTask);
    this.router.post("/api/tasks", this.taskController.createTask);

    this.router.get("/api/signup", this.userController.signup);

    this.router.get("/api/projects", this.project.getProjects);
    this.router.post("/api/projects", this.project.addProject);
    this.router.post("/api/projects/:project_id", this.project.getProjectById);
  }

  // const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const token = "getTokenFromHeaders(req);"

  //     jwt.verify(token, process.env.SECRET_KEY, async (err: any, decoded: any) => {
  //       if (err) {
  //         // Using standard Express response methods for UNAUTHORIZED error
  //         return res.status(401).json({ error: "Unauthorized access." });
  //       }

  //       const user = a.;

  //       if (!user) {
  //         // Using standard Express response methods for USER NOT FOUND error
  //         return res.status(404).json({ error: "User not found." });
  //       }

  //       req.user = user;
  //       next();
  //     });
  //   } catch (error: Error) {
  //     // Using standard Express response methods for generic error handling
  //     return res.status(403).json({ error: error.message });
  //   }
}
