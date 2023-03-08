import { useEffect, useState } from "react";
import { Task } from "interface";
import { useAppSelector } from "store/hook";

const useSearchQuery = (searchQuery: string) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const [matchedTasks, setMatchedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task: Task) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchQuery, tasks]);

  return matchedTasks;
};

export default useSearchQuery;
