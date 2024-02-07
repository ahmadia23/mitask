import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../ui/button";

interface AddProjectSkeletonProps {
  onClick: () => void;
}

export const AddProjectSkeleton: React.FC<AddProjectSkeletonProps> = (
  props
) => {
  const { onClick } = props;
  return (
    <div
      className="flex flex-col text-5xl items-center justify-center border border-dashed w-[290px] mt-8 rounded h-[310px] transition-transform duration-1000 border-2 bg-gray-50  hover:border-solid border-black hover:cursor-pointer hover:text-6xl"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlus} className=""></FontAwesomeIcon>
    </div>
  );
};
