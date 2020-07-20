// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.react";

import "./index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App/>, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}
