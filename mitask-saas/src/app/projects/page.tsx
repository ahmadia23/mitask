import SideNavBar from "&/components/layout/SideNavigation/SideBar";
import { ProjectList } from "&/components/project/ProjectList";
import TaskSection from "&/components/task/TaskSection";

export const Page = () => {
  return (
    <div className="flex flex-col gap-4 w-full pt-24 justify-center mx-16">
      <h1 className="text-2xl"></h1>
      <ProjectList />
    </div>
  );
};

export default Page;
