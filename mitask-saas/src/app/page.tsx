import { useRouter } from "next/router";
import React from "react";

export const Page = () => {
  return (
    <div className="flex flex-col bg-background text-foreground border-border rounded-radius gap-8 w-full">
      <h1 className="mt-20 text-lg font-bold text-center">Intro page</h1>
    </div>
  );
};

export default Page;
