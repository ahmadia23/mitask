import { AppDataSource } from "../../config/db";
import { Task } from "../../models/tasks/Task";

export class TaskRepository {
  public async findTasksByUser(id: any): Promise<Task[] | void> {
    try {
      const tasks: Task[] = await AppDataSource.getRepository(Task).find();
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
