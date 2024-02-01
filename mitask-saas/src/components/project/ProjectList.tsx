"use client";
import { getProjects } from "&/lib/actions";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../../types/tasks";

export const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>();
  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(await getProjects());
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 w-full">
      {projects &&
        projects.map((project: Project) => {
          return <ProjectCard key={project.id} {...project}></ProjectCard>;
        })}
    </div>
  );
};
