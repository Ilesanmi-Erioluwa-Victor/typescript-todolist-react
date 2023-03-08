import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Task } from "interface";
import { defaultTasks } from "mock/mock";

const getSavedDirectories = (): string[] => {
  let dirList: string[] = [];

  if (localStorage.getItem("directories")) {
    dirList = JSON.parse(localStorage.getItem("directories")!);
    const mainDirExists = dirList.some((dir: string) => dir === "Main");

    if (!mainDirExists) {
      dirList.push("Main");
    }
  } else {
    dirList.push("Main");
  }

  if (localStorage.getItem("tasks")) {
    const savedTasksList = JSON.parse(localStorage.getItem("tasks")!);
    let dirNotSaved: string[] = [];
    savedTasksList.forEach((task: Task) => {
      if (!dirList.includes(task.dir)) {
        if (!dirNotSaved.includes(task.dir)) {
          dirNotSaved.push(task.dir);
        }
      }
    });
    dirList = [...dirList, ...dirNotSaved];
  }
  return dirList;
};

const initialState: {
  tasks: Task[];
  directories: string[];
} = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : defaultTasks,
  directories: getSavedDirectories(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },

    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },

    markAsImportant(state, action: PayloadAction<string>) {
      const newTaskFavorited = state.tasks.find(
        (task) => task.id === action.payload
      );
      newTaskFavorited!.important = !newTaskFavorited!.important;
    },

    editTask(state, action: PayloadAction<Task>) {
      const taskId = action.payload.id;

      const newTaskEdited: Task = state.tasks.find(
        (task: Task) => task.id === taskId
      )!;
      const indexTask = state.tasks.indexOf(newTaskEdited);
      state.tasks[indexTask] = action.payload;
    },

    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },

    deleteAllData(state) {
      state.tasks = [];
      state.directories = ["Main"];
    },

    createDirectory(state, action: PayloadAction<string>) {
      const newDirectory: string = action.payload;
      const directoryAlreadyExists = state.directories.includes(newDirectory);
      if (directoryAlreadyExists) return;
      state.directories = [newDirectory, ...state.directories];
    },

    deleteDirectory(state, action: PayloadAction<string>) {
      const dirName = action.payload;

      state.directories = state.directories.filter((dir) => dir !== dirName);
      state.tasks = state.tasks.filter((task) => task.dir !== dirName);
    },
  },
});
