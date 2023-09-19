import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the application, including the counter and a flag to show/hide the counter.
const initialCounterState = { counter: 0, showCounter: true };

// Create a Redux Slice for the counter
const counterSlice = createSlice({
  name: "counter", // Slice name for managing the counter state
  initialState: initialCounterState, // Initial state defined above

  // Reducers are functions that specify how the state should change
  reducers: {
    // Reducer to increment the counter
    increment(state) {
      state.counter++;
    },
    // Reducer to decrement the counter
    decrement(state) {
      state.counter--;
    },
    // Reducer to increase the counter by a specified amount
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    // Reducer to toggle the visibility of the counter
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
