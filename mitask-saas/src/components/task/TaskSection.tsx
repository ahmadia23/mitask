import React from "react";
import taskSeedData from "&/lib/seeds";
import TaskCard from "./TaskCard";

const TaskSection = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {taskSeedData.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status as "En cours" | "Non démarré" | "Terminé"}
        />
      ))}
    </div>
  );
};

export default TaskSection;
