import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./js/components/container/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.scss";

const appLoadingState = {
  title: "Traveling Man",
  artist: "Intense Son",
  artwork: "https://via.placeholder.com/900x900"
};

const appReducer = (state = appLoadingState, action) => {
  switch (action.type) {
  case "UPDATE_TITLE":
  case "UPDATE_ARTIST":
  case "UPDATE_ARTWORK":
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
