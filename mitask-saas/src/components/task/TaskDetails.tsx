/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hU4wdoSDMjK
 */
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Task } from "../../../types/tasks";

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  const { title, description, status, deadline } = task;
  console.log(status);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 w-full">
      <div className="border shadow-sm rounded-lg">
        <form className="space-y-4 p-4">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Task Title" value={title} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Task Description"
              value={description}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="status">Status</Label>
            <Select value={status}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir le statut"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="En cours">En cours</SelectItem>
                  <SelectItem value="Terminé">Terminé</SelectItem>
                  <SelectItem value="Non Démarré">Non Démarré</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              onChange={(e) => console.log(e.target.value)}
              value={deadline}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="checklist">Checklist</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="item1" />
                <Label htmlFor="item1">Item 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item2" />
                <Label htmlFor="item2">Item 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item3" />
                <Label htmlFor="item3">Item 3</Label>
              </div>
            </div>
          </div>
          <Button className="w-full sm:w-40" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </main>
  );
};

export default TaskDetails;
