import React from "react";
import { useAppDispatch } from "store/hook";
import { tasksActions } from "store/Tasks.store";
import { BsFillStarFill } from "react-icons/bs"

const BtnMarkAsImportant: React.FC<{
  taskId: string;
  taskImportant: boolean;
}> = ({ taskId, taskImportant }) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = () => {
    dispatch(tasksActions.markAsImportant(taskId));
  };

  return (
    <button
      title={taskImportant ? "unmark as important" : "mark as important"}
      onClick={markAsImportantHandler}
      className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"
    >
      <BsFillStarFill
        className={`w-5 h-5 sm:w-6 sm:h-6 ${
          taskImportant ? "fill-rose-500 stroke-rose-500 " : "fill-none"
        }`}
      />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
