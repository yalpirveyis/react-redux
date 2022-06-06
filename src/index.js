import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./redux/reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
