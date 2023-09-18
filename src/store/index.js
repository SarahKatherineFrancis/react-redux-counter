import { createSlice, configureStore } from "@reduxjs/toolkit";

// Define the initial state of the application, including the counter and a flag to show/hide the counter.
const initialState = { counter: 0, showCounter: true };

// Create a Redux Slice for the counter
const counterSlice = createSlice({
  name: "counter", // Slice name
  initialState, // Initial state defined above
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
      state.counter = state.counter + action.payload.amount; // Use 'payload' to access the action's data
    },
    // Reducer to toggle the visibility of the counter
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Create a Redux store using the counterSlice.reducer and the initial state.
const store = configureStore({ reducer: counterSlice.reducer });

// Export the created store so it can be used in other parts of the application.
export default store;
