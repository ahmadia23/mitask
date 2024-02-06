import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { User } from "../models/users/User";
import { UserService } from "../services/UserService";

export class UserController {
  public userService;

  constructor(UserService: UserService) {
    this.userService = UserService;
  }

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body as User;

      const user = await this.userService.createUser(userData);

      res.status(200).json({ data: user, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public findUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.user_id;

      const user = await this.userService.getUserById(id);
      res.status(200).json({ data: user, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  // public login = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userData = req.body as User;

  //     console.log(req.query);
  //     const tasks = await this.tasksService.getTasks(userId);

  //     res.status(200).json({ data: tasks, message: "findAll" });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
