// Importing the createStore function from the Redux library.
import { createStore } from "redux";

// Defining a reducer function named counterReducer.
// Reducers specify how the application's state changes in response to actions.
const counterReducer = (state = { counter: 0 }, action) => {
  // Check if the action type is "increment".
  if (action.type === "increment") {
    // If it is, return a new state object with the counter incremented by 1.
    return { counter: state.counter + 1 };
  }

  // Check if the action type is "decrement".
  if (action.type === "decrement") {
    // If it is, return a new state object with the counter decremented by 1.
    return { counter: state.counter - 1 };
  }

  // If the action type is neither "increment" nor "decrement",
  // return the current state unchanged.
  return state;
};

// Create a Redux store using the counterReducer.
const store = createStore(counterReducer);

// Export the created store so it can be used in other parts of the application.
export default store;
