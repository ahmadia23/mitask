import TaskSection from "&/components/task/TaskSection";

export const Page = () => {
  return (
    <div className="container flex flex-col gap-8 h-screen overflow-y-scroll w-full pt-24">
      <h1 className="text-lg font-bold">Tâches</h1>
      <TaskSection />
    </div>
  );
};

export default Page;
