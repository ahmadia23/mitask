import { create } from "zustand";
import { Task, TaskStatus } from "../../types/tasks";

type TaskCreationStore = {
  task: Task;
  taskUpdate: (update: { [P in keyof Task]: Task[P] }) => void;
};

export const useTaskCreationStore = create<TaskCreationStore>()((set) => ({
  task: {
    title: "",
    description: "",
    projectId: "",
    deadline: "",
    status: undefined,
  },
  taskUpdate: (taskUpdate: { [P in keyof Task]: Task[P] }) => {
    set((state: any) => ({ task: { ...state.task, ...taskUpdate } }));
  },
}));
