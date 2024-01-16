import React from "react";
import { taskSeedData } from "../../lib/seeds";
import TaskCard from "./TaskCard";

const TaskSection = () => {
  return (
    <div className="container flex items-center gap-4 flex-wrap bg-background text-foreground border-border rounded-radius">
      {taskSeedData.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status as "Non démarré" | "En cours" | "Terminé"}
        />
      ))}
    </div>
  );
};

export default TaskSection;
