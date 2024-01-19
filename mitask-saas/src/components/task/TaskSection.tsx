import React from "react";
import { projectSeedData, taskSeedData } from "../../lib/seeds";
import TaskCard from "./TaskCard";
import { Project } from "../../../types/tasks";

const TaskSection = () => {
  return (
    <div className="container flex items-center  gap-4 flex-wrap h-full overflow-scroll-y">
      {taskSeedData.map((task) => {
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
  );
};

export default TaskSection;
