import React, { useState } from "react";
import { useAppDispatch } from "store/hook";
import { tasksActions } from "store/Tasks.store";
import ModalCreateTask from "components/Utils/ModalTask";
import { SlOptionsVertical } from "react-icons/sl"
import { Task } from "interface";

const BtnEditTask: React.FC<{ task: Task }> = ({ task }) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task: Task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <>
      <button
        title="edit task"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
        onClick={openModalEditTask}
      >
        <SlOptionsVertical className="w-4 sm:w-5 h-4 sm:h-5" />
      </button>
      {modalEditTaskOpen && (
        <ModalCreateTask
          onClose={closeModalEditTask}
          task={task}
          nameForm="Edit task"
          onConfirm={editTaskHandler}
        />
      )}
    </>
  );
};

export default BtnEditTask;
