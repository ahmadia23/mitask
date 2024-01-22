"use client";

import { fetchTask, projectSeedData, taskSeedData } from "../../../lib/seeds";
import Image from "next/image";
import React from "react";
import { Task } from "../../../../types/tasks";
import TaskDetails from "&/components/task/TaskDetails";

export default function Page({ params }: { params: { id: string } }) {
  const task = fetchTask(params.id, taskSeedData) as Task;
  const project = projectSeedData.find((proj) =>
    proj.tasks.find((taskInProj) => taskInProj === task)
  );

  if (!project) {
    return <p>This task is not associated with a project</p>;
  }

  console.log(task);
  return (
    <div className="flex flex-col items-center w-full h-screen  pt-16 gap-8">
      <Image
        className="w-full h-72 object-cover overlow-hidden"
        src={project.image}
        alt={project.title}
        width={800}
        height={800}
      ></Image>
      <h1 className="text-3xl text-foreground">{task?.title}</h1>
      <TaskDetails task={task} />
      {/* <TaskDescription task></TaskDescription> */}
    </div>
  );
}
