"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DeleteModal } from "./DeleteModal";
import { TaskProjectInfo } from "../../../types/tasks";

const statusMapper = {
  in_progress: "En cours",
  open: "Non démarré",
  done: "Terminé",
};

interface ITaskCard {
  task_id?: string;
  title?: string;
  description?: string;
  status?: "in_progress" | "done" | "open";
}

interface TaskCardProps {
  task: ITaskCard;
  project: TaskProjectInfo;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, project }) => {
  const { task_id, title, description, status } = task;
  const { image, title: projectName } = project;

  return (
    <Card className="flex flex-col group hover:shadow-custom cursor-pointer">
      <DeleteModal taskId={task_id}>
        <FontAwesomeIcon
          className="self-end p-4 text-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity hover:scale-125 duration-300"
          icon={faXmark}
        ></FontAwesomeIcon>
      </DeleteModal>
      <Link href={`/tasks/${task_id}`} className="md:w-96">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Due in 3 days
          </span>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {status && statusMapper[status]}
          </div>
          <CardDescription className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-white">
              Related Project:
            </h3>
            <div className="flex items-center mt-2">
              <img
                alt="Project Image"
                className="w-12 h-12 rounded-full"
                height="50"
                src={`${image}`}
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <span className="ml-4 text-sm text-gray-600 dark:text-gray-300">
                {projectName}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default TaskCard;
