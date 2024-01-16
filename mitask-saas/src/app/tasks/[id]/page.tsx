"use client";

import { fetchTask, projectSeedData, taskSeedData } from "../../../lib/seeds";
import Image from "next/image";
import React from "react";
import { Task } from "../../../../types/tasks";

export default function Page({ params }: { params: { id: string } }) {
  const task = fetchTask(params.id, taskSeedData) as Task;
  const project = projectSeedData.find((proj) =>
    proj.tasks.find((taskInProj) => taskInProj === task)
  );

  if (!project) {
    return <p>This task is not associated with a project</p>;
  }

  return (
    <div className="w-full">
      <Image
        className="w-full h-96 object-cover"
        src={project.image}
        alt={project.title}
        width={400}
        height={400}
      ></Image>
      <h1 className="text-3xl text-foreground text-center mt-8">
        {task?.title}
      </h1>
    </div>
  );
}
