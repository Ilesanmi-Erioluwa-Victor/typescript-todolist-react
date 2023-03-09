import React from "react";
import LayoutRoutes from "components/Utils/LayoutRoutes";
import { useAppSelector } from "store/hook";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize your tasks", "All tasks");
  return (
    <LayoutRoutes
      title="All tasks"
      tasks={tasks}
    ></LayoutRoutes>
  );
};

export default Home;
