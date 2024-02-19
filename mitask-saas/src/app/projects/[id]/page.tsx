import { ProjectDetails } from "&/components/project/projectdetails";
import { getProject } from "&/lib/actions";
import Image from "next/image";
import { Project } from "../../../../types/tasks";

export const Page = async ({ params }: { params: { id: string } }) => {
  const project = (await getProject(params.id)) as Project;

  return (
    <div className="flex flex-col gap-8 w-full">
      <Image
        alt="Image"
        className="object-cover object-center border"
        height="400"
        src={project.image}
        style={{
          aspectRatio: "1440/400",
          objectFit: "cover",
        }}
        width="1440"
      />
      <ProjectDetails project={project}></ProjectDetails>
    </div>
  );
};

export default Page;
