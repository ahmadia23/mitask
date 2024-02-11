import React from "react";
import TaskDetailsForm from "../task/TaskDetailsForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { createATask } from "&/lib/actions";
import { Task } from "../../../types/tasks";
import { redirect } from "next/navigation";

export const TaskCreationTaskStep = () => {
  return (
    <div className="container flex flex-col gap-4 w-full justify-center">
      <Link href={"/tasks/new"}>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon>
          retour
        </div>
      </Link>
      <h1 className="text-2xl text-center"> Nouvelle tâche</h1>
      <TaskDetailsForm></TaskDetailsForm>
    </div>
  );
};
