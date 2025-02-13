
import { Task } from "../types/task";
import { format } from "date-fns";
import { Calendar, Paperclip, X } from "lucide-react";

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
}

export const TaskDetail = ({ task, onClose }: TaskDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 animate-fade-in">
      <div className="absolute inset-y-0 right-0 w-full max-w-2xl bg-white shadow-xl animate-slide-in">
        <div className="h-full overflow-auto">
          <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
            <div className="flex items-center justify-between p-6">
              <h2 className="text-xl font-semibold text-gray-900">Task Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            <div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  task.status === "completed"
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
              <h1 className="text-2xl font-semibold text-gray-900 mt-4">
                {task.title}
              </h1>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Assigned By</h3>
              <div className="flex items-center gap-3">
                <img
                  src={task.assignedBy.avatar}
                  alt={task.assignedBy.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {task.assignedBy.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Due Date</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{format(new Date(task.dueDate), "MMMM d, yyyy")}</span>
              </div>
            </div>

            {task.attachments && task.attachments.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">Attachments</h3>
                <div className="space-y-3">
                  {task.attachments.map((attachment, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <Paperclip className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-900">
                        {attachment.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
