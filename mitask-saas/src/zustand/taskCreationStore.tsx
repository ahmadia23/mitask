import { create } from "zustand";
import { Task, TaskStatus } from "../../types/tasks";
import { getTasks } from "&/lib/actions";
import { url } from "inspector";
import { set } from "zod";

type TaskCreationStore = {
  task: Task;
  taskUpdate: (update: { [P in keyof Task]: Task[P] }) => void;
};
type TasksStore = {
  tasks: Task[];
  task: Task;
  loadTasks: () => void;
  loading: boolean;
  error: {} | null;
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
export const useTasksStore = create<TasksStore>()((set) => ({
  tasks: [],
  loading: false,
  error: null,
  task: {
    title: "",
    description: "",
    projectId: "",
    deadline: "",
    status: undefined,
  },

  loadTasks: async () => {
    set({ loading: true, error: null });
    try {
      const tasksFetched = await getTasks();
      set({ tasks: tasksFetched, loading: false });
    } catch (error) {
      if (error) {
        set({ loading: false, error: error });
      }
    }
  },
}));
