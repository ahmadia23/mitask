"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Project, Task } from "../../types/tasks";
import { ProjectSchema } from "&/schema/tasks";
import { z } from "zod";

export const getTasks = async () => {
  try {
    const result = await fetch("http://localhost:5005/api/tasks");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTasksByParams = async () => {
  try {
    const result = await fetch("http://localhost:5005/api/tasks?title=réunion");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTask = async (id: string) => {
  try {
    const result = await fetch(`http://localhost:5005/api/tasks/${id}`);
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (id: Project["id"]) => {
  try {
    const result = await fetch(`http://localhost:5005/api/projects/${id}`);
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async () => {
  try {
    const result = await fetch("http://localhost:5005/api/projects");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function createATask(task: Partial<Task>) {
  try {
    const result = await fetch("http://localhost:5005/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(task),
    });
    console.log(result.status);
    const response = await result.json();

    console.log(response);

    revalidatePath("/tasks");
    redirect("/tasks");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteATask(taskId: Task["task_id"]) {
  try {
    const result = await fetch(`http://localhost:5005/api/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!result.ok) {
      throw new Error("Network response was not ok.");
    }

    revalidatePath("/tasks");
  } catch (error) {
    console.error(error);
  }
}

export async function createProject(
  projectData: z.infer<typeof ProjectSchema>
): Promise<Project | void> {
  try {
    const project = ProjectSchema.parse(projectData);

    const result = await fetch("http://localhost:5005/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(project),
    });

    if (!result.ok) {
      throw new Error("Network response was not ok.");
    }
    const { data } = await result.json();
    revalidatePath("/tasks/new");
    return data;
  } catch (error) {
    console.error(error);
  }
}
