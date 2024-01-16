import TaskSection from "&/components/task/TaskSection";

export const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="mt-8 text-lg font-bold">Tâches du moment</h1>
      <TaskSection />
    </div>
  );
};

export default Page;
