import TaskSection from "&/components/task/TaskSection";
import React from "react";

export const Page = () => {
  return (
    <div className="flex flex-col bg-background text-foreground border-border rounded-radius gap-8">
      <h1 className="mt-8 text-lg font-bold">intro page</h1>
      <TaskSection />
    </div>
  );
};

export default Page;
