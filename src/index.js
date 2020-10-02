// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.react";

import "./index.scss";
import "./assets/scss/theme.scss";
import "./css/base.css";

// Services
import './services/i18n';


const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App/>, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}
