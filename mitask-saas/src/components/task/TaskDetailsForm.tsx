"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { createATask } from "&/lib/actions";
import { z } from "zod";
import { Task, TaskStatus } from "../../../types/tasks";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "&/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import { DatePicker } from "../ui/datePicker";
import { redirect, useRouter } from "next/navigation";
import { TaskCreationSchema } from "&/schema/tasks";

interface TaskDetailsFormProps {
  existingTask?: Pick<Task, "title" | "description" | "deadline" | "status">;
}

const TaskDetailsForm: React.FC<TaskDetailsFormProps> = ({ existingTask }) => {
  const form = useForm<z.infer<typeof TaskCreationSchema>>();
  const [date, setDate] = useState<Date>(new Date());
  const { task, taskUpdate } = useTaskCreationStore();
  const router = useRouter();

  const handleCreateTaskSubmit = async (
    task: Partial<Task>,
    isTaskValid: boolean
  ) => {
    if (isTaskValid) {
      await createATask(task);
      router.push("/tasks");
    } else {
      console.log("an error has occured", isTaskValid);
    }
  };

  const taskIsValid = useMemo(
    () => TaskCreationSchema.safeParse(task).success,
    [task]
  );

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <Form {...form}>
      <form
        className={`flex flex-1 flex-col gap-2 p-4 md:gap-8 md:p-6 w-[700px] mx-auto`}
        onSubmit={form.handleSubmit(
          handleCreateTaskSubmit.bind(null, task, taskIsValid)
        )}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input
                  placeholder="Finir les review de PR"
                  {...field}
                  onChange={(e) => taskUpdate({ title: e.target.value })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Lire toutes les pulls requests et faire des commentaires..."
                  {...field}
                  onChange={(e) => taskUpdate({ description: e.target.value })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select
                  name="status"
                  onValueChange={(value: TaskStatus) =>
                    taskUpdate({ status: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="En cours"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="in_progress">En cours</SelectItem>
                      <SelectItem value="open">Non Démarré</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deadline</FormLabel>
              <FormControl>
                <DatePicker
                  date={date}
                  setDate={(value) => {
                    setDate(value);
                    taskUpdate({ deadline: value });
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="space-y-1">
          <Label htmlFor="checklist">Checklist</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="item1" />
              <Label htmlFor="item1">Item 1</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item3" />
              <Label htmlFor="item3">Item 3</Label>
            </div>
          </div>
        </div> */}
        <Button
          className="w-full sm:w-40"
          type="submit"
          disabled={!taskIsValid}
        >
          Save Changes
        </Button>
      </form>
      <div className="border border-bottom w-10/12 mx-auto mt-8"></div>
    </Form>
  );
};

export default TaskDetailsForm;
