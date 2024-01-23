import { Task } from "../models/Task";

export type TaskInfos = Pick<
  Task,
  "task_id" | "title" | "description" | "deadline" | "status"
>;

export type TaskStatusResponse = {
  data: {
    tasks: Task[];
  };
};

export type TaskInfosResponse = {
  data: {
    tasks: TaskInfos[];
  };
};

export enum TaskStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}
