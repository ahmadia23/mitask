import React from "react";
import { Project } from "../../../types/tasks";

interface ProjectDetailsOverviewProps {
  title: Project["title"];
  description?: Project["description"];
  deadline: Project["deadline"];
}

export const ProjectDetailsOverview: React.FC<ProjectDetailsOverviewProps> = (
  props
) => {
  const { title, description, deadline } = props;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <PackageIcon className="w-6 h-6" />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>

        <div className="flex gap-1 items-center">
          <CalendarIcon className="w-4 h-4" />
          <h3 className="text-lg font-bold">Deadline</h3>
        </div>
        <p>
          {new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(deadline))}
        </p>

        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <h3 className="text-lg font-bold">Completed</h3>
        </div>
        <p></p>

        <div className="flex items-center gap-2">
          <UsersIcon className="w-4 h-4" />
          <h3 className="text-lg font-bold">Members</h3>
        </div>
        <ul className="flex gap-2">
          <li>
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </li>
          <li>
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </li>
          <li>
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
