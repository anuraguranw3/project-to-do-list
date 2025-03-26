import { createSlice } from "@reduxjs/toolkit";

// function to load tasks from localStorage
const loadTaskFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

const initialState = {
  tasks: loadTaskFromLocalStorage(), // load tasks from localStorage
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // add new task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // remove a task by id
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // toggle task - complete or not by ID
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id == action.payload);
      if (task) {
        task.isComplete = !task.isComplete;
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;