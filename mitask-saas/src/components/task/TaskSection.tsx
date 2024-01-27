import React from "react";
import { projectSeedData, taskSeedData } from "../../lib/seeds";
import TaskCard from "./TaskCard";
import { Project, Task } from "../../../types/tasks";
import { getTasks } from "&/lib/actions";

interface TaskSectionProps {
  status?: string;
}

const TaskSection: React.FC<TaskSectionProps> = async ({ status }) => {
  const tasks = (await getTasks()) as Task[];
  console.log(tasks);

  return (
    <>
      <h1 className="text-lg font-bold">{status} </h1>
      <div className="flex flex-wrap items-center gap-4 h-full overflow-scroll-y md:flex">
        {tasks
          .filter((task) => task.status === status || task)
          .map((task) => {
            const project = projectSeedData.find((proj) =>
              proj.tasks.find((projTask) => projTask === task)
            ) as Project;

            return (
              <TaskCard
                task={task}
                project={{ image: project?.image, projectName: project?.title }}
              ></TaskCard>
            );
          })}
      </div>
    </>
  );
};

export default TaskSection;
