import { AppDataSource } from "../../config/db";
import { Project } from "../../models/tasks/Project";

export class ProjectRepository {
  public async findProjectsByUser(id: any): Promise<Project[] | void> {
    try {
      const tasks: Project[] = await AppDataSource.getRepository(
        Project
      ).find();
      console.log(tasks);

      if (tasks) {
        return tasks;
      }

      return [];
    } catch (error) {
      console.error(error);
    }
  }
}
