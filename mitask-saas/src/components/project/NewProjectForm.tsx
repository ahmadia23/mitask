"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Project, TaskStatus } from "../../../types/tasks";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DatePicker } from "../ui/datePicker";
import { createProject } from "&/lib/actions";

interface NewProjectFormProps {
  onCancel: () => void;
  onProjectCreate: (id: Project["id"]) => void;
}

const ProjectSchema = z.object({
  title: z.string().max(255),
  description: z.string(),
  deadline: z.date().optional(),
  status: z.nativeEnum(TaskStatus).optional(),
  image: z.string().max(255).url().optional(),
});

export const NewProjectForm: React.FC<NewProjectFormProps> = (props) => {
  const { onCancel, onProjectCreate } = props;
  const [date, setDate] = useState<Date>(new Date());
  const form = useForm<z.infer<typeof ProjectSchema>>({
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof ProjectSchema>) {
    const project = {
      title: values.title,
      description: values.description,
      image: values.image,
      status: values.status || ("open" as TaskStatus),
      deadline: date,
    };

    const { id } = createProject(project);
    onProjectCreate(id);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[450px] space-y-3 border p-4 rounded-xl m-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Faire le bilan de..." {...field} />
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
                <Textarea placeholder="Faire le bilan de..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://mitask.com/photo/mitask.jpg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-8">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select {...field}>
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
                  <DatePicker date={date} setDate={setDate} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <Button className="w-full" type="submit">
            Valider
          </Button>
          <Button className="w-full" variant="ghost" onClick={onCancel}>
            Annuler
          </Button>
        </div>
      </form>
    </Form>
  );
};
