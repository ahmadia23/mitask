"use client";
import React from "react";
import { FunnelWrapper } from "./FunnelWrapper";
import { Funnel, useFunnel } from "&/hooks/useFunnel";
import { TaskCreationProjectStep } from "./TaskCreationProjectStep";
import { TaskCreationTaskStep } from "./TaskCreationTaskStep";

const taskCreationFunnel: Funnel[] = [
  { path: "/tasks/new", order: 1, name: "Project" },
  { path: "/tasks/new/task", order: 2, name: "Task" },
];

export const TaskCreationFunnel = () => {
  const { currentStep } = useFunnel(taskCreationFunnel);

  return (
    <FunnelWrapper funnel={taskCreationFunnel} currentStep={currentStep}>
      {currentStep.name === "Project" && (
        <TaskCreationProjectStep></TaskCreationProjectStep>
      )}
      {currentStep.name === "Task" && (
        <TaskCreationTaskStep></TaskCreationTaskStep>
      )}
    </FunnelWrapper>
  );
};
