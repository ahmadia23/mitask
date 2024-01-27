export type Task = {
  id: string;
  title: string;
  description: string;
  status: "in_progress" | "open" | "done";
  deadline: string;
};

export interface Project {
  projectId: string;
  title: string;
  description: string;
  tasks: Task[];
  image: string;
}
