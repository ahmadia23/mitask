import { ProjectSchema, TaskCreationSchema } from "&/schema/tasks";
import { z } from "zod";

export interface Task {
  task_id?: string;
  title?: string;
  description?: string;
  deadline?: Date | string;
  status?: TaskStatus;
  projectId?: Project["id"];
  project: Project;
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
  deadline: Date | string;
  status: TaskStatus;
  image: string;
  tasks: Task[];
}

export interface TaskProjectInfo {
  title: string;
  image: string;
}

export type validFormData =
  | z.infer<typeof ProjectSchema>
  | z.infer<typeof TaskCreationSchema>;
