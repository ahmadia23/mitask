import React from "react";
import { Project, Task, TaskProjectInfo } from "../../../types/tasks";
import TaskCard from "../task/TaskCard";

interface ProjectTasksListProps {
  tasks: Project["tasks"];
  project: TaskProjectInfo;
}

export const ProjectTasksList: React.FC<ProjectTasksListProps> = (props) => {
  const { tasks, project } = props;

  return (
    <div className="flex gap-2">
      {tasks?.map((task: Task) => {
        return <TaskCard task={task} project={project}></TaskCard>;
      })}
    </div>
  );
};
