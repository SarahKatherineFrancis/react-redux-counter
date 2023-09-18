import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

// Define the Counter component.
const Counter = () => {
  // Create a dispatch function to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  // Use useSelector to select and retrieve the 'counter' state from the Redux store.
  const counter = useSelector((state) => state.counter);

  // Define an event handler to increment the counter.
  const incrementHandler = () => {
    // Dispatch an 'increment' action to the Redux store.
    dispatch({ type: "increment" });
  };

  // Define an event handler to decrement the counter.
  const decrementHandler = () => {
    // Dispatch a 'decrement' action to the Redux store.
    dispatch({ type: "decrement" });
  };

  // Placeholder function for a button click event handler (not implemented in this code).
  const toggleCounterHandler = () => {};

  // Render the Counter component, displaying the current counter value and buttons for incrementing and decrementing.
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
