import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { Task } from "../models/Task";

export class TaskController {
  public tasksService;

  constructor(tasksService: TaskService) {
    this.tasksService = tasksService;
  }

  public getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = "1";
      const tasks: Task[] = await this.tasksService.getTasks(userId);

      res.status(200).json({ data: tasks, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };
}
