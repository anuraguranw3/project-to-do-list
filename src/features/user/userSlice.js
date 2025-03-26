import { createSlice } from "@reduxjs/toolkit";


const loadUserFromLocalStorage = () => {
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : { isAuthenticated: false, user: null };
};


const initialState = loadUserFromLocalStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;