"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { createATask } from "&/lib/actions";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { TaskStatus } from "../../../types/tasks";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";

export const TaskCreationSchema = z.object({
  title: z.string().max(255),
  description: z.string(),
  deadline: z.date(),
  status: z.nativeEnum(TaskStatus),
  projectId: z.string().uuid(),
});

const TaskDetailsForm = () => {
  const form = useForm<z.infer<typeof TaskCreationSchema>>();
  const { task, taskUpdate } = useTaskCreationStore();

  return (
    <Form {...form}>
      <form
        className={`flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 w-[700px] mx-auto`}
        onSubmit={form.handleSubmit(() => createATask(task))}
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
                  onValueChange={(value) => console.log(value)}
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

        <div className="space-y-1">
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
        </div>
        <Button className="w-full sm:w-40" type="submit">
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default TaskDetailsForm;
