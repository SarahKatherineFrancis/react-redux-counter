import React from "react";
import ReactDOM from "react-dom/client";
// Import the Provider component from react-redux to enable Redux integration.
import { Provider } from "react-redux";

// Import the Redux store created in "./store/index".
import store from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the App component wrapped in the Redux Provider.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
