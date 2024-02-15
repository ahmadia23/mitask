import { ProjectDetailsOverview } from "./ProjectDetailsOverview";
import { ProjectCommentCard } from "./ProjectCommentCard";

import { getProject } from "&/lib/actions";
import { Project } from "next/dist/build/swc";

interface ProjectDetailsProps extends Project {}

export const ProjectDetails: React.FC<ProjectDetailsProps> = async (props) => {
  console.log(props);
  return (
    <div className="flex flex-col gap-16 w-full py-8 px-16">
      <ProjectDetailsOverview {...props}></ProjectDetailsOverview>
      <ProjectCommentCard></ProjectCommentCard>
    </div>
  );
};

function FrameIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}
