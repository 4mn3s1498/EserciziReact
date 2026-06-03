import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counter";
import todosReducer from "./components/todo";
import usersReducer from "./components/fetch";
import { loggingMiddleware } from "./components/middle";
import { delayMiddleware } from "./components/delay";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware, delayMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;