import React from "react";

export const ProjectCommentCard = () => {
  return (
    <div className=" self-center border rounded-lg p-4 bg-gray-100 dark:bg-gray-800 w-full">
      <div className="flex items-center gap-4">
        <img
          alt="Avatar"
          className="rounded-full"
          height="40"
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <div className="grid gap-1">
          <div className="font-semibold">Alice Johnson</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Project Manager
          </div>
        </div>
        <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
          2 days ago
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold">
        We are making good progress. The design team has already submitted the
        wireframes. Next up, we need to review and provide feedback.
      </div>
    </div>
  );
};
