"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { NewProjectForm } from "../project/NewProjectForm";
import { ProjectList } from "../project/ProjectList";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";

export const ProjectOrTaskTabs: React.FC = () => {
  const [value, setValue] = useState(false);
  const { task } = useTaskCreationStore();

  const router = useRouter();

  const handleChange = () => {
    setValue(!value);
  };
  return (
    <Tabs
      defaultValue="old_project"
      className="w-full flex flex-col gap-8 pt-8"
    >
      <div className="flex justify-between w-full">
        <TabsList className="w-fit">
          <TabsTrigger value="old_project">Choisir un projet</TabsTrigger>
          <TabsTrigger value="new_project">Nouveau projet</TabsTrigger>
        </TabsList>
        <Button
          className="mr-20 hover:cursor-pointer"
          disabled={!task.projectId}
          onClick={() => router.push("/tasks/new/task")}
        >
          Suivant
        </Button>
      </div>
      <TabsContent value="old_project" className="w-full">
        <ProjectList />
      </TabsContent>
      <TabsContent value="new_project">
        <NewProjectForm></NewProjectForm>
      </TabsContent>
    </Tabs>
  );
};
