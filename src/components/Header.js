import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth-slice";

const Header = () => {
  // Select the 'isAuthenticated' state from the Redux store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Create a dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler for logging out
  const logoutHandler = () => {
    // Dispatch the 'logout' action to the Redux store
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {/* Button to trigger the logoutHandler function */}
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
