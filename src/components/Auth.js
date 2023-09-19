import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  // Create a dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler for the login form submission
  const loginHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Dispatch the 'login' action to the Redux store, indicating a successful login
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
