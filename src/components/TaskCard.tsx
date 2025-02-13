
import { Task } from "../types/task";
import { format } from "date-fns";
import { Calendar, Paperclip } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

export const TaskCard = ({ task, onClick }: TaskCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
              task.status === "completed"
                ? "bg-green-50 text-green-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {format(new Date(task.dueDate), "MMM d")}
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
          {task.title}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2">{task.description}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <img
              src={task.assignedBy.avatar}
              alt={task.assignedBy.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{task.assignedBy.name}</span>
          </div>
          {task.attachments && task.attachments.length > 0 && (
            <div className="flex items-center gap-1 text-gray-500">
              <Paperclip className="w-4 h-4" />
              <span className="text-sm">{task.attachments.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
