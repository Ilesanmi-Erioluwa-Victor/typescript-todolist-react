import { useState, useEffect } from "react";
import { Task } from "interface";
import { useAppSelector } from "store/hook";

const useTodayTasks = (): Task[] => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [todaysTasks, setTodaysTasks] = useState<Task[]>([]);

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    let filteredTasks: Task[] = tasks.filter(
      (task: Task) => task.date === dateTimeFormat
    );
    setTodaysTasks(filteredTasks);
  }, [dateTimeFormat, tasks]);
  return todaysTasks;
};

export default useTodayTasks;
