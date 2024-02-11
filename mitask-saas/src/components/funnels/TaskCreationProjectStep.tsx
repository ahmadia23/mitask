import React from "react";
import { ProjectList } from "../project/ProjectList";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const TaskCreationProjectStep = () => {
  const { task, taskUpdate } = useTaskCreationStore();

  return (
    <div className="container flex flex-col w-full">
      <div className="flex items-center justify-between">
        <Link href={"/tasks"} className="text-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faLongArrowLeft}></FontAwesomeIcon>
          <p className="text-bold text-xl">retour</p>
        </Link>
        <Link
          href={task.projectId ? "/tasks/new/task" : ""}
          className="w-40 self-end"
        >
          <Button className="w-full" disabled={Boolean(!task.projectId)}>
            Suivant
          </Button>
        </Link>
      </div>
      <ProjectList />
    </div>
  );
};
