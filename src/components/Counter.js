import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";
import classes from "./Counter.module.css";

// Define the Counter component.
const Counter = () => {
  // Create a dispatch function to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  // Use useSelector to select and retrieve the 'counter' and 'showCounter' states from the Redux store.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // Define an event handler to increment the counter.
  const incrementHandler = () => {
    // Dispatch an 'increment' action to the Redux store.
    dispatch(counterActions.increment());
  };

  // Define an event handler to increase the counter by a specified amount.
  const increaseHandler = () => {
    // Dispatch an 'increase' action with the amount to the Redux store.
    dispatch(counterActions.increase(5));
  };

  // Define an event handler to decrement the counter.
  const decrementHandler = () => {
    // Dispatch a 'decrement' action to the Redux store.
    dispatch(counterActions.decrement());
  };

  // Define an event handler to toggle the visibility of the counter.
  const toggleCounterHandler = () => {
    // Dispatch a 'toggle' action to the Redux store.
    dispatch(counterActions.toggleCounter());
  };

  // Render the Counter component, displaying the current counter value and buttons for incrementing, decrementing, and toggling.
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
