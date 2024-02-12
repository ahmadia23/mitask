import React from "react";
import TaskCard from "./TaskCard";
import { Project, Task } from "../../../types/tasks";
import { getProjects, getTasks, getTasksByParams } from "&/lib/actions";
import { useTasksStore } from "&/zustand/taskCreationStore";

interface TaskSectionProps {
  status?: string;
}

const TaskSection: React.FC<TaskSectionProps> = async ({ status }) => {
  const tasks = (await getTasks()) as Task[];

  const projects = (await getProjects()) as Project[];

  return (
    <>
      <h1 className="text-lg font-bold">{status} </h1>
      <div className="flex flex-wrap items-center gap-4 h-full overflow-scroll-y md:flex">
        {tasks
          .filter((task) => (status ? task.status === status : task))
          .map((task) => {
            const project = projects.find(
              (proj) => task.projectId === proj.id
            ) as Project;

            return (
              <TaskCard
                task={task}
                project={{ image: project.image, projectName: project.title }}
              ></TaskCard>
            );
          })}
      </div>
    </>
  );
};

export default TaskSection;
