import Link from "next/link";
import React from "react";

import { TaskFilters } from "./TaskFilters";
import { Button } from "&/components/ui/button";

export const SideBarContent = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-xl font-bold ml-8">Filtres</h1>
      <TaskFilters type="deadline"></TaskFilters>
      <TaskFilters type="status"></TaskFilters>
      <Link href={"/tasks/new"} className="self-center">
        <Button>Créer une tâche</Button>
      </Link>
    </div>
  );
};
