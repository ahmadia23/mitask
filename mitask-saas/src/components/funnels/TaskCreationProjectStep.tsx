import React from "react";
import { ProjectList } from "../project/ProjectList";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";

export const TaskCreationProjectStep = () => {
  const { task, taskUpdate } = useTaskCreationStore();

  return (
    <div className="container flex flex-col w-full">
      <Link
        href={task.projectId ? "/tasks/new/task" : ""}
        className="w-40 self-end"
      >
        <Button className="w-full" disabled>
          Suivant
        </Button>
      </Link>
      <ProjectList />
    </div>
  );
};
