import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { validFormData } from "../../types/tasks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type pathname = ["/tasks"];

export const showSidebar = (currentPath: string) => {
  return currentPath !== "/tasks/new";
};

export const funnelPages = ["/tasks/new"];

// export const validateFormData = (formData: validFormData, zodSchema: ) => {};
