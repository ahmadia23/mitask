import React from "react";

export interface TaskCardProps {
  id?: string;
  title: string;
  description: string;
  status: "En cours" | "Non démarré" | "Terminé";
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, status }) => {
  return (
    <div className="border border-gray-300 rounded shadow p-4 mb-4 bg-white overflow-hidden w-64 h-64">
      <h5 className="font-bold">{title}</h5>
      <p>{description}</p>
      <span>{status}</span>
    </div>
  );
};

export default TaskCard;
