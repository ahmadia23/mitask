import { Skeleton } from "&/components/ui/Skeletons";
import React from "react";

export default function loading() {
  return (
    <div className="container flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-8 pt-20 w-full">
        <Skeleton className="w-11/12 h-[20px] rounded-full "></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <Skeleton className="w-11/12 h-[20px] rounded-full "></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <Skeleton className="w-11/12 h-[20px] rounded-full "></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
        <Skeleton className="w-11/12 h-[20px] rounded-full"></Skeleton>
      </div>
    </div>
  );
}
