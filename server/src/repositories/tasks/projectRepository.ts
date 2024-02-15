import { AppDataSource } from "../../config/db";
import { Project } from "../../models/tasks/Project";

export class ProjectRepository {
  public async findProjectsByUser(id: any): Promise<Project[] | void> {
    try {
      const tasks: Project[] = await AppDataSource.getRepository(
        Project
      ).find();

      if (tasks) {
        return tasks;
      }

      return [];
    } catch (error) {
      console.error(error);
    }
  }
  public async findProjectById(id: any): Promise<Project | void> {
    try {
      const project = await AppDataSource.getRepository(Project).findOneOrFail({
        where: {
          id: id,
        },
      });

      if (project) {
        return project;
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async createProject(project: Project): Promise<Project["id"] | void> {
    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Project)
        .values(project)
        .execute();
    } catch (error) {
      console.error(error);
    }
  }
}
