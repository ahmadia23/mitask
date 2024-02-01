export interface Task {
  task_id?: string;
  title?: string;
  description?: string;
  deadline?: Date | string;
  status?: TaskStatus;
  projectId?: Project["id"];
  project?: Project;
}

export enum TaskStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  deadline: Date | string; // Use Date for JavaScript Date object or string for ISO date string
  status: TaskStatus;
  image: string;
  tasks?: Task[];
}
