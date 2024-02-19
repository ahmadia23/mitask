import { create } from "zustand";
import { Task, TaskStatus } from "../../types/tasks";
import { getTasks } from "&/lib/actions";

type TaskCreationStore = {
  task: Omit<Task, "project">;
  taskUpdate: (update: { [P in keyof Omit<Task, "project">]: Task[P] }) => void;
};
type TasksStore = {
  tasks: Task[];
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

  taskUpdate: (taskUpdate) => {
    set((state: any) => ({ task: { ...state.task, ...taskUpdate } }));
  },
}));

export const useTasksStore = create<TasksStore>()((set) => ({
  tasks: [],
  loading: false,
  error: null,

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
