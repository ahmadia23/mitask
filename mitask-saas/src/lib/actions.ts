"use server";

import { TaskCreationSchema } from "&/components/task/TaskDetailsForm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Project, Task } from "../../types/tasks";

export const getTasks = async () => {
  try {
    const result = await fetch("http://localhost:5001/api/tasks");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTasksByParams = async () => {
  try {
    const result = await fetch("http://localhost:5001/api/tasks?title=réunion");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTask = async (id: string) => {
  try {
    const result = await fetch(`http://localhost:5001/api/tasks/${id}`);
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async () => {
  try {
    const result = await fetch("http://localhost:5001/api/projects");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function createATask(task: Task) {
  try {
    const result = await fetch("http://localhost:5001/api/tasks", {
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
export async function createProject(project: Project) {
  try {
    const result = await fetch("http://localhost:5001/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors", // no-cors, *cors, same-origin
      body: JSON.stringify(project),
    });
    const response = await result.json();
    console.log(response);
    revalidatePath("/tasks/new");
    return response;
  } catch (error) {
    console.error(error);
  }
}
