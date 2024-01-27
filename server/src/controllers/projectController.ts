import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";

export class ProjectController {
  public projectService;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
  }

  public getProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = "1";
      const projects = await this.projectService.getTasks(userId);

      res.status(200).json({ data: projects, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };
}
