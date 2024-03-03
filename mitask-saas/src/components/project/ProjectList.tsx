"use client";
import { getProject, getProjects } from "&/lib/actions";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../../types/tasks";
import { NewProjectForm } from "./NewProjectForm";
import { AddProjectSkeleton } from "./AddProjectSkeleton";
import { useTaskCreationStore } from "&/zustand/taskCreationStore";
import { usePathname } from "next/navigation";

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectFormIsOpen, setProjectFormIsOpen] = useState<boolean>(false);
  const { task, taskUpdate } = useTaskCreationStore();
  const pathname = usePathname();

  useEffect(() => {
    const fetchProjectsAction = async () => {
      setProjects(await getProjects());
    };
    fetchProjectsAction();
  }, [getProjects]);

  const handleNewProjectSubmit = async (id: Project["id"]) => {
    const newProject = await getProject(id);

    setProjects([...projects, newProject]);

    if (pathname === "/tasks/new") {
      taskUpdate({ ...task, projectId: id });
    }

    setProjectFormIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects &&
        projects.map((project: Project) => {
          return (
            <ProjectCard
              key={project.id}
              {...project}
              inFunnelMode={pathname === "/tasks/new"}
            ></ProjectCard>
          );
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
