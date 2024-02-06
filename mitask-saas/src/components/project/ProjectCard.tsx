"use client";
import React, { useEffect, useState } from "react";
import { Card, CardDescription } from "../ui/Cards";
import { Project } from "../../../types/tasks";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { id, image, title, description } = props;
  const { task, taskUpdate } = useTaskCreationStore();
  const [isActive, setIsActive] = useState(task.projectId === id);

  useEffect(() => {
    setIsActive(task.projectId === id);
  }, [task]);

  const handleProjectCardClick = () => {
    if (!isActive) {
      taskUpdate({ projectId: id });
    } else {
      taskUpdate({ projectId: "" });
    }
  };

  return (
    <Card
      className={`w-[340px] flex flex-col mt-8 gap-4 hover:cursor-pointer hover:scale-95 transition-transform ease-in ${
        isActive ? "bg-gray-300" : ""
      }`}
      onClick={handleProjectCardClick}
    >
      <img
        alt={title}
        className="w-full h-36 object-cover overflow-hidden"
        src={image}
      />

      <div className="flex flex-col p-4 gap-8">
        <h1 className="font-bold text-center">{title}</h1>
        <CardDescription>{description}</CardDescription>
      </div>
    </Card>
  );
};
