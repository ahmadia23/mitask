"use client";

import * as React from "react";

import { Button } from "./button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";
import { Task } from "../../../types/tasks";
import { deleteATask } from "&/lib/actions";

interface DatePickerProps {
  taskId: Task["task_id"];
  children: React.ReactNode;
}

export const DeleteModal: React.FC<DatePickerProps> = ({
  taskId,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle className="text-center">Retirer cette tâche</DialogTitle>
          <DialogDescription className="text-center">
            La tâche sera définitivement supprimée.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="flex gap-2 w-full justify-between">
            <DialogClose className="w-full">
              <Button
                className="w-full"
                variant={"destructive"}
                type="submit"
                onClick={() => deleteATask(taskId)}
              >
                Supprimer
              </Button>
            </DialogClose>
            <DialogClose className="w-full">
              <Button className="w-full" variant={"ghost"}>
                Annuler
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
