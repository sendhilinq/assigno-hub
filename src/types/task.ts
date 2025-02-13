
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedBy: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  status: "pending" | "completed";
  attachments?: {
    name: string;
    url: string;
  }[];
}
