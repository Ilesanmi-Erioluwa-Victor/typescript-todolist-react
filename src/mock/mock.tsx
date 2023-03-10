import { Task } from "interface";

export const defaultTasks: Task[] = [
  {
    title: "Task 1",
    important: false,
    description: "This is the description for this task",
    date: "2023-04-12",
    dir: "Main",
    completed: true,
    id: "t1",
  },
  {
    title: "Task 2",
    important: true,
    description: "This is the description for this task",
    date: "2023-05-15",
    dir: "Main",
    completed: true,
    id: "t2",
  },
  {
    title: "Task 3",
    important: false,
    description: "This is the description for this task",
    date: "2023-08-21",
    dir: "Main",
    completed: false,
    id: "t3",
  },
];
