import React from "react";
import { ProjectList } from "../project/ProjectList";
import { ProjectOrTaskTabs } from "../task/projectOrTaskTabs";

export const TaskCreationProjectStep = () => {
  return (
    <div className="container flex flex-col">
      <ProjectOrTaskTabs />
    </div>
  );
};
