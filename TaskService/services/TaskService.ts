import { TaskRepository } from "../repositories/taskRepository";

export class TaskService {
  public taskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  getTasks(userId: string) {
    return this.taskRepository.findTasksByUser(userId);
  }
}
