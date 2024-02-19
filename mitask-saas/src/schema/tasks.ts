import { z } from "zod";
import { TaskStatus } from "../../types/tasks";

export const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  deadline: z.date().optional(),
  status: z.nativeEnum(TaskStatus).optional(),
  image: z.string().url().optional(),
});

export const TaskCreationSchema = z.object({
  title: z.string().max(255),
  description: z.string(),
  deadline: z.date(),
  status: z.enum(["open", "in_progress", "done"]),
});
