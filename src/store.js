import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/user/userSlice";
import weatherReducer from './features/tasks/weatherSlice'; 

const saveTasksToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
  return result;
}

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTasksToLocalStorage),
});

export default store;