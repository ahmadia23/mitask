import TaskSection from "&/components/task/TaskSection";

export const Page = () => {
  return (
    <div className="container flex flex-col gap-16  overflow-y-scroll w-full pt-24 md:pl-14">
      <TaskSection status="En cours" />

      <TaskSection status="Non démarré" />

      <TaskSection status="Terminé" />
    </div>
  );
};

export default Page;
