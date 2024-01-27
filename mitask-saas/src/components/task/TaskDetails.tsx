import React from "react";
import TaskDetailsForm from "./TaskDetailsForm";
import Image from "next/image";
import { getProjects, getTask } from "&/lib/actions";
import { Project, Task } from "../../../types/tasks";

interface TaskDetailsProps {
  id: string;
}

export const TaskDetails: React.FC<TaskDetailsProps> = async (props) => {
  const { id } = props;

  const task: Task = await getTask(id);
  const projects: Project[] = await getProjects();
  const project = projects.find(
    (proj: Project) => proj.id === task.projectId
  ) as Project;
  return (
    <div className="flex flex-col items-center w-full h-screen  pt-16 gap-8">
      <Image
        className="w-full h-72 object-cover overlow-hidden"
        src={project.image}
        alt={project.title}
        width={800}
        height={800}
      ></Image>
      <h1 className="text-3xl text-foreground">{task.title}</h1>
      <TaskDetailsForm task={task} />
      {/* <TaskDescription task></TaskDescription> */}
    </div>
  );
};
