import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type pathname = ["/", "/resources", "/settings", "/home", "/tasks"];

export const showSidebar = (isMobile: boolean, currentPath: string) => {
  if (isMobile) {
    return true;
  }

  return currentPath === "/tasks";
};

export const funnelPages = ["/tasks/new"];
