"use client";
import React, { useEffect, useState } from "react";
import { Card, CardDescription } from "../ui/Cards";
import { Project } from "../../../types/tasks";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";
import { useRouter } from "next/navigation";

interface ProjectCardProps extends Project {
  inFunnelMode?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { id, image, title, description, inFunnelMode } = props;
  const { task, taskUpdate } = useTaskCreationStore();
  const [isActive, setIsActive] = useState(task.projectId === id);
  const router = useRouter();

  useEffect(() => {
    setIsActive(task.projectId === id);
  }, [task]);

  const handleProjectCardClick = () => {
    if (!isActive && inFunnelMode) {
      taskUpdate({ projectId: id });
    } else if (isActive && inFunnelMode) {
      taskUpdate({ projectId: "" });
    } else {
      router.push(`/projects/${id}`);
    }
  };

  return (
    <Card
      className={`w-full flex flex-col mt-8 gap-2 hover:cursor-pointer hover:scale-95 transition-transform ease-in rounded overflow-hidden h-[310px] ${
        isActive ? "bg-gray-300" : ""
      }`}
      onClick={handleProjectCardClick}
    >
      <img alt={title} className="w-full h-36 object-cover " src={image} />

      <div className="flex flex-col p-4 ">
        <h1 className="font-bold text-center">{title}</h1>
        <CardDescription className="p-2">{description}</CardDescription>
      </div>
    </Card>
  );
};
