import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type pathname = ["/tasks"];

export const showSidebar = (currentPath: string) => {
  return currentPath !== "/tasks/new";
};

export const funnelPages = ["/tasks/new"];
