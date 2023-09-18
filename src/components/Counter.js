// Import the useSelector hook from react-redux to access data from the Redux store.
import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

// Define the Counter component.
const Counter = () => {
  // Use useSelector to select and retrieve the 'counter' state from the Redux store.
  const counter = useSelector((state) => state.counter);

  // Placeholder function for a button click event handler (not implemented in this code).
  const toggleCounterHandler = () => {};

  // Render the Counter component, displaying the current counter value and a button.
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
