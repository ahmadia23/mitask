import React from "react";
import NavItem from "./NavItem";

const filtersTypes = ["status", "deadline"];

const filtersData = [
  {
    displayName: "À finir aujourd'hui",
    type: "deadline",
    isActive: false,
  },
  {
    displayName: "Pour la semaine",
    type: "deadline",
    isActive: false,
  },
  {
    displayName: "En retard",
    type: "status",
    isActive: false,
  },
  {
    displayName: "Non démarré",
    type: "status",
    isActive: false,
  },
  {
    displayName: "Terminé",
    type: "status",
    isActive: false,
  },
];

interface TaskFiltersProps {
  type?: string;
}

export const TaskFilters: React.FC<TaskFiltersProps> = (props) => {
  const { type } = props;

  return (
    <div className="flex flex-col gap-2">
      <h4 className="ml-8 text-gray-600 text-bold">
        {type === "deadline" && "Périodicité"}
      </h4>
      <h4 className="ml-8 text-gray-600 text-bold">
        {type === "status" && "Status"}
      </h4>

      <div>
        {filtersData
          .filter((f) => f.type === type)
          .map((filter) => {
            return (
              <NavItem href="/#" isActive={filter.isActive}>
                {filter.displayName}
              </NavItem>
            );
          })}
      </div>
    </div>
  );
};
