import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";

const getSavedDirectories = (): string[] => {
    let dirList: string[] = [];
    
    if (localStorage.getItem("directories")) {
        
    }
};
