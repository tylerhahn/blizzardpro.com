import ReactDOM from "react-dom";
import React from "react";
import App from "../blizz-app/src/App.js";

const rootEl = document.getElementById("iris-calc");

rootEl && ReactDOM.render(<App />, rootEl);
