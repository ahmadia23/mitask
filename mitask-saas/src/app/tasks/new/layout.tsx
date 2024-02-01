import { TaskCreationFunnel } from "&/components/funnels/TaskCreationFunnel";

export default function TaskCreationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TaskCreationFunnel></TaskCreationFunnel>;
}
