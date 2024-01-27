import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  public tasksService;

  constructor(tasksService: TaskService) {
    this.tasksService = tasksService;
  }

  public getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = "1";
      const tasks = await this.tasksService.getTasks(userId);

      res.status(200).json({ data: tasks, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskId = req.params.id;
      const tasks = await this.tasksService.getTask(taskId);

      res.status(200).json({ data: tasks, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };
}
