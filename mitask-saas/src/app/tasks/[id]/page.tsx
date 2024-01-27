import { TaskDetails } from "&/components/task/TaskDetails";

export default function Page({ params }: { params: { id: string } }) {
  return <TaskDetails {...params} />;
}
