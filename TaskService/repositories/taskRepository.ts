import { Task } from "../models/Task";

export class TaskRepository {
  public async findTasksByUser(id: any): Promise<Task[]> {
    const tasks: Task[] = await Task;

    return tasks;
  }
}
