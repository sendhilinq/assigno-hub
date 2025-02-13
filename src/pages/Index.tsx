
import { useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskDetail } from "../components/TaskDetail";
import { mockTasks } from "../data/mockTasks";
import { Task } from "../types/task";
import { List } from "lucide-react";

const Index = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3">
              <List className="w-6 h-6 text-gray-900" />
              <h1 className="text-2xl font-semibold text-gray-900">My Tasks</h1>
            </div>
            <p className="mt-2 text-gray-600">
              View and manage your assigned tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() => setSelectedTask(task)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default Index;
