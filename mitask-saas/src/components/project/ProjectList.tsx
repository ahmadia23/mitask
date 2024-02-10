"use client";
import { getProjects } from "&/lib/actions";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../../types/tasks";
import { NewProjectForm } from "./NewProjectForm";
import { AddProjectSkeleton } from "./AddProjectSkeleton";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";
import { usePathname } from "next/navigation";

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [projectFormIsOpen, setProjectFormIsOpen] = useState<boolean>(false);
  const { task, taskUpdate } = useTaskCreationStore();
  const pathname = usePathname();

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(await getProjects());
    };
    fetchProjects();
  }, []);

  const handleNewProjectSubmit = (id: Project["id"]) => {
    if (pathname === "/tasks/new") {
      taskUpdate({ projectId: id });
    }
    setProjectFormIsOpen(false);
  };

  return (
    <div className="flex flex-wrap gap-4 w-full items-center">
      {projects &&
        projects.map((project: Project) => {
          return <ProjectCard key={project.id} {...project}></ProjectCard>;
        })}
      {!projectFormIsOpen ? (
        <AddProjectSkeleton
          onClick={() => {
            setProjectFormIsOpen(true);
          }}
        ></AddProjectSkeleton>
      ) : (
        <NewProjectForm
          onProjectCreate={handleNewProjectSubmit}
          onCancel={() => setProjectFormIsOpen(false)}
        ></NewProjectForm>
      )}
    </div>
  );
};
