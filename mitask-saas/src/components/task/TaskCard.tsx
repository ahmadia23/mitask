"use client";
import Link from "next/link";
import React from "react";

const statusValues: {
  "En cours": "text-yellow-400";
  "Non démarré": "text-red-400";
  Terminé: "text-green-400";
} = {
  "En cours": "text-yellow-400",
  "Non démarré": "text-red-400",
  Terminé: "text-green-400",
};

export interface TaskCardProps {
  id?: string;
  title: string;
  description?: string;
  status: keyof typeof statusValues;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, status }) => {
  return (
    <Link
      href={`tasks/${id}`}
      className="flex flex-col justify-between p-4 mb-4 w-52 h-40 bg-card border border-border shadow-md hover:ring ring-ring"
    >
      <h5 className="font-bold">{title}</h5>
      <span className={`${statusValues[status]}`}>{status}</span>
    </Link>
  );
};

export default TaskCard;
