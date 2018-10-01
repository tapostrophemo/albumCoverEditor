import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./js/components/container/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.scss";

const appLoadingState = {};

const appReducer = (state = appLoadingState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const store = createStore(appReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
