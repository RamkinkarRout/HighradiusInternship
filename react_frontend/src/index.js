import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  transitions,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
ReactDOM.render(
  <Fragment>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Fragment>,
  document.getElementById("root")
);
