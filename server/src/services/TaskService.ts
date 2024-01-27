import { Task } from "../models/tasks/Task";
import { TaskRepository } from "../repositories/tasks/taskRepository";

export class TaskService {
  public taskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getTasks(userId: string): Promise<Task[] | void> {
    return await this.taskRepository.findTasksByUser(userId);
  }
  async getTask(taskId: string): Promise<Task | void> {
    return await this.taskRepository.findTaskById(taskId);
  }
}
