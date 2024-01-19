/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hU4wdoSDMjK
 */
import { Label } from "@radix-ui/react-label";
import { Button } from "./button";
import { Input } from "./input";

import { Textarea } from "./textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Checkbox } from "@radix-ui/react-checkbox";

interface ITaskCard {
  id?: string;
  title: string;
  description?: string;
  status: string;
}

interface TaskDetailsProps {
  task: ITaskCard;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
  const { title, description, status } = task;

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
                <SelectValue placeholder="Choisir le statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="deadline">Deadline</Label>
            <Input id="deadline" type="date" />
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
