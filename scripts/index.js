import ReactDOM from "react-dom";
import React from "react";
import Test from "./Components/Test";

const rootEl = document.getElementById("iris-calc");

rootEl && ReactDOM.render(<Test />, rootEl);
