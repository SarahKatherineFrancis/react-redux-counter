import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for authentication
const initialAuthState = { isAuthenticated: false };

// Create a Redux Slice for authentication
const authSlice = createSlice({
  name: "authentication", // Slice name for managing authentication state
  initialState: initialAuthState,

  // Reducers for managing authentication state
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
