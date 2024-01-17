import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/Cards";
import { Task } from "../../../types/tasks";

interface TaskProps extends Task {}

const TaskDescription: React.FC<TaskProps> = (task: TaskProps) => {
  const { description, status } = task;

  return (
    <div className="container flex items-center gap-4 flex-wrap">
      <Card>
        <CardHeader>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>{status}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TaskDescription;
