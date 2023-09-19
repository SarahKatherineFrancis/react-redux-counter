import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// Create a Redux store using the counterSlice.reducer and the initial state.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// Export the created store so it can be used in other parts of the application.
export default store;
