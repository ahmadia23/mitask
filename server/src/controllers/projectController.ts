import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";

export class ProjectController {
  private projectService;

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

  public addProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const project = req.body;
      await await this.projectService.createProject(project);

      res.status(200).json({ data: project, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };
}
