import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(tasksMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
