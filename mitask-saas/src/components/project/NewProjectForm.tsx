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

import z, { ZodError } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
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
import { ProjectSchema } from "&/schema/tasks";

interface NewProjectFormProps {
  onCancel: () => void;
  onProjectCreate: (id: string) => void;
}

interface ValidationError {
  field: string;
  message: string;
}

export const NewProjectForm: React.FC<NewProjectFormProps> = (props) => {
  const { onCancel, onProjectCreate } = props;
  const [date, setDate] = useState<Date>(new Date());
  const [error, setError] = useState<ValidationError[]>();
  const form = useForm<z.infer<typeof ProjectSchema>>();

  async function onSubmit(projectData: z.infer<typeof ProjectSchema>) {
    const result = ProjectSchema.safeParse(projectData);

    if (result.success) {
      try {
        const projectCreated = await createProject(result.data);

        if (projectCreated) {
          onProjectCreate(projectCreated.id);
        }
      } catch (error) {
        // if (error instanceof ZodError) {
        //   // Convert ZodError to a simpler format for the UI
        //   const errors: ValidationError[] = error.errors.map((err) => ({
        //     field: err.path[0], // Assuming error paths are simple
        //     message: err.message,
        //   }));
        //   setError(errors);
        // }
      }
    } else {
      // setError(result.error.format());
    }
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
