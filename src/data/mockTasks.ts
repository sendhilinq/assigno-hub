
import { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design System Update",
    description: "Update the design system with new color palette and typography guidelines",
    assignedBy: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
    },
    dueDate: "2024-03-25",
    status: "pending",
    attachments: [
      {
        name: "design-guidelines.pdf",
        url: "/placeholder.svg",
      },
    ],
  },
  {
    id: "2",
    title: "User Research Analysis",
    description: "Analyze recent user research data and prepare insights report",
    assignedBy: {
      name: "Michael Park",
      avatar: "/placeholder.svg",
    },
    dueDate: "2024-03-28",
    status: "pending",
  },
  {
    id: "3",
    title: "Frontend Performance Optimization",
    description: "Optimize loading times and implement performance improvements",
    assignedBy: {
      name: "Alex Rivera",
      avatar: "/placeholder.svg",
    },
    dueDate: "2024-03-30",
    status: "completed",
    attachments: [
      {
        name: "performance-metrics.xlsx",
        url: "/placeholder.svg",
      },
    ],
  },
];
