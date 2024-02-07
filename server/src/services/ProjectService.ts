import { Project } from "../models/tasks/Project";
import { Task } from "../models/tasks/Task";
import { ProjectRepository } from "../repositories/tasks/projectRepository";

export class ProjectService {
  public projectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async getTasks(userId: string): Promise<Task[] | void> {
    return await this.projectRepository.findProjectsByUser(userId);
  }

  async createProject(project: Project): Promise<Project["id"] | void> {
    return await this.projectRepository.createProject(project);
  }
}
