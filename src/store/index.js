// Import the createStore function from the Redux library to create a Redux store.
import { createStore } from "redux";

// Define the initial state of the application, including the counter and a flag to show/hide the counter.
const initialState = { counter: 0, showCounter: true };

// Define a reducer function named counterReducer.
// Reducers specify how the application's state changes in response to actions.
const counterReducer = (state = initialState, action) => {
  // Check if the action type is "increment".
  if (action.type === "increment") {
    // If it is, return a new state object with the counter incremented by 1.
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  // Check if the action type is "increase".
  if (action.type === "increase") {
    // If it is, return a new state object with the counter increased by the specified amount.
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  // Check if the action type is "decrement".
  if (action.type === "decrement") {
    // If it is, return a new state object with the counter decremented by 1.
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  // Check if the action type is "toggle".
  if (action.type === "toggle") {
    // If it is, toggle the value of the showCounter flag.
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  // If the action type is not recognized, return the current state unchanged.
  return state;
};

// Create a Redux store using the counterReducer and the initial state.
const store = createStore(counterReducer);

// Export the created store so it can be used in other parts of the application.
export default store;
