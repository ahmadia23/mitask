import { AppDataSource } from "../../config/db";
import { Task } from "../../models/tasks/Task";

export class TaskRepository {
  public async findTasksByUser(id: any): Promise<Task[] | void> {
    try {
      const tasks: Task[] = await AppDataSource.getRepository(Task).find();

      if (tasks) {
        return tasks;
      }

      return [];
    } catch (error) {
      console.error(error);
    }
  }

  public async findTaskById(taskId: string): Promise<Task | void> {
    try {
      const task = await AppDataSource.getRepository(Task).findOneBy({
        task_id: taskId,
      });

      if (task) {
        return task;
      }

      return undefined;
    } catch (error) {
      console.error(error);
    }
  }
}
