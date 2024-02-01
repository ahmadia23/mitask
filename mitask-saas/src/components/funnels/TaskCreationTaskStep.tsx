import React from "react";
import TaskDetailsForm from "../task/TaskDetailsForm";

export const TaskCreationTaskStep = () => {
  return (
    <div className="container flex flex-col gap-4 w-full pt-8 justify-center">
      <h1 className="text-2xl text-center"> Nouvelle tâche</h1>
      <TaskDetailsForm></TaskDetailsForm>
    </div>
  );
};
