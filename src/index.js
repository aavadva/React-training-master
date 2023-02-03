import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./week2/App";

import "./week2/index.css";

const reactContainer = document.getElementById("root");

const root = ReactDOM.createRoot(reactContainer);

root.render(<App />);
