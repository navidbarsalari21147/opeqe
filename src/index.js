/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import locales from "../locales/index";
import "./assets/libraries/fontawesome/fontawesome.css";
import "./assets/libraries/fontawesome/regular";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.scss";

locales.setActiveLanguage("fa-ir");
global.locales = locales.localize;

ReactDOM.render(<App />, document.getElementById("root"));
