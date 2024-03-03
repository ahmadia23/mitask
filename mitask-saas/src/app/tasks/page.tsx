import TaskSection from "&/components/task/TaskSection";

export default function Page() {
  return (
    <div className="container flex flex-col gap-8 overflow-y-scroll w-full pt-24 md:pl-14">
      <h1 className="text-2xl">Ma Liste de Tâches</h1>
      <TaskSection />
    </div>
  );
}
