import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import counterReducer from "./src/counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
